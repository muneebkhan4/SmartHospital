from flask import Flask, request, jsonify
from flask_cors import CORS
from project import search_disease

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS


@app.route('/diseasesearch', methods=['GET'])
def diseasesearch():
    if 'disease_name' in request.args:
        # Extract the disease name from the query parameter
        disease_name = request.args.get('disease_name')

        # Call the search_disease function with the disease name
        result = search_disease(disease_name)

        # Return the result as a JSON object
        return jsonify(result)
    else:
        return 'Not found', 404


@app.route('/', methods=['GET'])
def home():
    return "Welcome Home!"


if __name__ == '__main__':
    app.run(host='localhost', port=8080)
