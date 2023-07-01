import os
import nltk
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.stem import SnowballStemmer
from pymongo import MongoClient

# nltk.download('stopwords')

# Set up stop words and stemmer
stop_words = set(stopwords.words('english'))
stemmer = SnowballStemmer('english')

# Connect to MongoDB
uri = "mongodb+srv://muneeb:muneeb@cluster0.v3vpd.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
database = client['Hospital']
collection = database['Diseases']

# Read documents from MongoDB
docs = [doc for doc in collection.find()]

# Pre-process the documents
preprocessed_docs = []
for doc in docs:
    preprocessed_doc = []
    for key, value in doc.items():
        if key != "_id":
            words = value.split()
            words = [word for word in words if word.lower() not in stop_words]
            words = [stemmer.stem(word) for word in words]
            preprocessed_doc.extend(words)
    preprocessed_doc = ' '.join(preprocessed_doc)
    preprocessed_docs.append(preprocessed_doc)

# Generate tf-idf matrix of the terms
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(preprocessed_docs)


def search_disease(query):
    preprocessed_query = []
    for word in query.split():
        if word.lower() not in stop_words:
            word = stemmer.stem(word)
            preprocessed_query.append(word)
    preprocessed_query = ' '.join(preprocessed_query)

    cosine_similarities = tfidf_matrix.dot(
        vectorizer.transform([preprocessed_query]).T).toarray().flatten()
    most_similar_doc_index = cosine_similarities.argsort()[::-1][0]
    most_similar_doc = docs[most_similar_doc_index]

    result = {key: value for key, value in most_similar_doc.items()
              if key != "_id"}

    return result
