from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Disease data
diseases = [
    {

        "Disease Name": "Malaria Disease",
        "Prevalence": "Plasmodium falciparum is the most lethal of the four malaria parasites and is responsible for the majority of malaria deaths globally. It is prevalent in sub-Saharan Africa, but also occurs in other regions such as Southeast Asia and South America.",
        "Symptoms": "Fever, chills, headache, muscle pain, and fatigue. In severe cases, it can lead to organ failure and death.",
        "Diagnosis": "Blood tests that detect the presence of the parasite in the blood or rapid diagnostic tests that detect malaria antigens.",
        "Treatments": "Antimalarial medications such as artemisinin-based combination therapies and supportive care such as rest and hydration.",
        "Preventive Measures": "Mosquito control measures such as using insecticide-treated bed nets and indoor residual spraying, taking chemoprophylaxis medication when traveling to high-risk areas, and wearing long-sleeved shirts and pants and using insect repellent."
    },
    {

        "Disease Name": "Influenza",
        "Prevalence": "Influenza viruses circulate worldwide and can affect anyone, but certain groups such as young children, older adults, and individuals with weakened immune systems are at higher risk of severe complications.",
        "Symptoms": "Fever, cough, sore throat, runny or stuffy nose, body aches, headache, chills, fatigue, and sometimes vomiting and diarrhea.",
        "Diagnosis": "Based on symptoms, physical examination, and sometimes laboratory tests such as rapid antigen tests or molecular assays.",
        "Treatments": "Antiviral medications to reduce the severity and duration of symptoms, plenty of rest, fluids, and over-the-counter pain relievers.",
        "Preventive Measures": "Annual vaccination, frequent handwashing, avoiding close contact with sick individuals, covering mouth and nose when coughing or sneezing, and staying home when feeling unwell."
    },
    {

        "Disease Name": "COVID-19",
        "Prevalence": "COVID-19 is a global pandemic caused by the SARS-CoV-2 virus. It has spread to nearly every country and can affect individuals of all ages, although older adults and people with underlying health conditions are at higher risk of severe illness.",
        "Symptoms": "Fever, cough, shortness of breath, fatigue, muscle or body aches, headache, sore throat, loss of taste or smell, congestion or runny nose, nausea or vomiting, and diarrhea.",
        "Diagnosis": "Based on symptoms, laboratory tests such as PCR or antigen tests, and medical imaging.",
        "Treatments": "Supportive care to manage symptoms, antiviral medications in severe cases, and vaccination to prevent infection.",
        "Preventive Measures": "Wearing masks, practicing physical distancing, frequent handwashing, avoiding large gatherings, following local health guidelines and restrictions, and getting vaccinated."
    },
    {

        "Disease Name": "Heart Disease",
        "Prevalence": "Heart disease is a leading cause of death globally. It can affect individuals of all ages, but the risk increases with age and certain factors such as high blood pressure, high cholesterol, smoking, obesity, diabetes, and a sedentary lifestyle.",
        "Symptoms": "Chest pain or discomfort, shortness of breath, fatigue, irregular heartbeat, dizziness, lightheadedness, fainting, and swelling in the legs, ankles, and feet.",
        "Diagnosis": "Based on medical history, physical examination, blood tests, electrocardiogram (ECG), stress tests, echocardiogram, cardiac catheterization, and other imaging tests.",
        "Treatments": "Lifestyle changes (e.g., healthy diet, regular exercise, smoking cessation), medications (e.g., statins, beta-blockers, ACE inhibitors), medical procedures (e.g., angioplasty, stent placement, bypass surgery), and cardiac rehabilitation.",
        "Preventive Measures": "Maintaining a healthy lifestyle, managing risk factors (e.g., blood pressure, cholesterol, diabetes), regular check-ups, avoiding smoking, and staying physically active."
    },
    {

        "Disease Name": "Diabetes",
        "Prevalence": "Diabetes is a chronic condition that affects the way the body processes blood sugar. It is a global health problem, with increasing prevalence worldwide. Risk factors include obesity, sedentary lifestyle, family history, and certain ethnicities.",
        "Symptoms": "Frequent urination, excessive thirst, unexplained weight loss, increased hunger, fatigue, blurred vision, slow healing of wounds, and recurring infections.",
        "Diagnosis": "Blood tests to measure blood sugar levels, such as fasting plasma glucose and hemoglobin A1c tests.",
        "Treatments": "Lifestyle modifications (e.g., healthy diet, regular exercise, weight management), oral medications, insulin therapy, and monitoring blood sugar levels.",
        "Preventive Measures": "Maintaining a healthy weight, being physically active, eating a balanced diet, avoiding tobacco and excessive alcohol consumption, and regular health check-ups."
    },
    {

        "Disease Name": "Asthma",
        "Prevalence": "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways. It affects people of all ages, but often starts in childhood. Risk factors include allergies, family history, and exposure to certain substances or environmental triggers.",
        "Symptoms": "Coughing, wheezing, shortness of breath, chest tightness, and difficulty breathing.",
        "Diagnosis": "Medical history, physical examination, lung function tests (spirometry), and allergy testing.",
        "Treatments": "Inhalers (bronchodilators and corticosteroids) to manage symptoms, avoiding triggers, and creating an asthma action plan.",
        "Preventive Measures": "Identifying and avoiding triggers (e.g., allergens, irritants), regular medical check-ups, using inhalers as prescribed, and having an emergency plan in case of an asthma attack."
    },
    {

        "Disease Name": "Alzheimer's Disease",
        "Prevalence": "Alzheimer's disease is a progressive brain disorder that affects memory, thinking, and behavior. It is the most common cause of dementia and primarily affects older adults. The exact cause is unknown, but age and family history are considered risk factors.",
        "Symptoms": "Memory loss (especially recent memories), confusion, difficulty with problem-solving and language, changes in mood and behavior, and challenges in performing familiar tasks.",
        "Diagnosis": "Medical history, cognitive tests, neurological examination, brain imaging (MRI, PET scans), and ruling out other possible causes.",
        "Treatments": "Medications to manage symptoms and slow disease progression, supportive care, and lifestyle modifications (e.g., regular exercise, mental stimulation).",
        "Preventive Measures": "Engaging in mentally stimulating activities, staying socially active, managing cardiovascular risk factors (e.g., high blood pressure, diabetes), and maintaining a healthy lifestyle."
    },
    {

        "Disease Name": "Breast Cancer",
        "Prevalence": "Breast cancer is the most common cancer among women worldwide. It can also occur in men, but it is less common. The risk factors include age, family history, certain genetic mutations, early menstruation, late menopause, and hormone replacement therapy.",
        "Symptoms": "Lump or thickening in the breast or underarm, changes in breast size or shape, nipple changes, nipple discharge (other than breast milk), and breast pain.",
        "Diagnosis": "Breast examination, imaging tests (mammogram, ultrasound), and biopsy (removal of a sample of breast tissue for analysis).",
        "Treatments": "Surgery (lumpectomy or mastectomy), radiation therapy, chemotherapy, hormone therapy, targeted therapy, and supportive care.",
        "Preventive Measures": "Regular breast self-exams, clinical breast exams, mammograms (based on age and risk factors), maintaining a healthy weight, limiting alcohol consumption, and avoiding tobacco."
    },
    {

        "Disease Name": "Lung Cancer",
        "Prevalence": "Lung cancer is a malignant tumor that originates in the lungs. It is one of the leading causes of cancer-related deaths worldwide. Smoking is the primary risk factor for developing lung cancer, but exposure to secondhand smoke, radon gas, asbestos, and air pollution also contribute to the risk.",
        "Symptoms": "Persistent cough, coughing up blood, chest pain, shortness of breath, hoarseness, unexplained weight loss, and recurring respiratory infections.",
        "Diagnosis": "Imaging tests (CT scan, MRI), biopsy (removal of a sample of lung tissue for analysis), and other tests to determine the stage and extent of the cancer.",
        "Treatments": "Surgery, radiation therapy, chemotherapy, targeted therapy, immunotherapy, and palliative care to manage symptoms and improve quality of life.",
        "Preventive Measures": "Avoiding tobacco and secondhand smoke, reducing exposure to occupational and environmental carcinogens, and early detection through regular health check-ups and screening for high-risk individuals."
    },
    {

        "Disease Name": "HIV/AIDS",
        "Prevalence": "HIV (Human Immunodeficiency Virus) is a viral infection that attacks the immune system, leading to acquired immunodeficiency syndrome (AIDS). It is a global epidemic, with the highest prevalence in sub-Saharan Africa. Unprotected sexual intercourse, sharing needles, and mother-to-child transmission during childbirth or breastfeeding are common modes of transmission.",
        "Symptoms": "Flu-like symptoms (fever, sore throat, fatigue), swollen lymph nodes, weight loss, diarrhea, night sweats, and opportunistic infections in later stages.",
        "Diagnosis": "Blood tests to detect the presence of HIV antibodies or viral genetic material (RNA or DNA).",
        "Treatments": "Antiretroviral therapy (ART) to suppress the virus, prevent disease progression, and reduce transmission risk. Other supportive treatments help manage opportunistic infections and complications.",
        "Preventive Measures": "Safe sex practices (use of condoms), HIV testing and counseling, avoiding sharing needles or other injection equipment, and access to antiretroviral medications for prevention in high-risk individuals."
    },
    {

        "Disease Name": "Osteoporosis",
        "Prevalence": "Osteoporosis is a bone disease characterized by low bone mass and structural deterioration, leading to increased risk of fractures. It primarily affects older adults, particularly women after menopause. Risk factors include age, gender, family history, low calcium and vitamin D intake, sedentary lifestyle, smoking, and excessive alcohol consumption.",
        "Symptoms": "Bone pain, fractures (especially in the spine, hip, or wrist), loss of height over time, and a stooped posture.",
        "Diagnosis": "Bone mineral density tests (dual-energy X-ray absorptiometry or DXA scan), medical history, physical examination, and evaluation of risk factors.",
        "Treatments": "Lifestyle modifications (e.g., weight-bearing exercises, adequate calcium and vitamin D intake), medications (e.g., bisphosphonates, hormone therapy), fall prevention measures, and regular monitoring of bone health.",
        "Preventive Measures": "Adequate calcium and vitamin D intake, regular weight-bearing and muscle-strengthening exercises, avoiding smoking and excessive alcohol consumption, and regular bone density screenings for high-risk individuals."
    },
    {

        "Disease Name": "Alzheimer's Disease",
        "Prevalence": "Alzheimer's disease is a progressive neurological disorder that affects memory, thinking, and behavior. It is the most common cause of dementia. The exact cause is unknown, but age, family history, and certain genetic factors increase the risk.",
        "Symptoms": "Memory loss, confusion, difficulty in performing familiar tasks, language problems, changes in mood and personality, and withdrawal from social activities.",
        "Diagnosis": "Medical history, physical examination, cognitive tests, neurological evaluation, brain imaging (MRI, PET scan), and ruling out other possible causes.",
        "Treatments": "There is no cure for Alzheimer's disease, but medications (e.g., cholinesterase inhibitors, memantine) can help manage symptoms and improve quality of life. Supportive care and lifestyle modifications are also important.",
        "Preventive Measures": "Engaging in mentally stimulating activities, regular physical exercise, maintaining a healthy diet (especially the Mediterranean diet), managing cardiovascular risk factors, and staying socially active."
    },
    {

        "Disease Name": "Type 2 Diabetes",
        "Prevalence": "Type 2 diabetes is a chronic metabolic disorder characterized by high blood sugar levels. It is influenced by genetic and environmental factors. Sedentary lifestyle, unhealthy diet, obesity, family history, and certain ethnicities (such as Asian, African, or Hispanic) increase the risk.",
        "Symptoms": "Increased thirst, frequent urination, unexplained weight loss, fatigue, blurred vision, slow-healing sores or infections, and tingling or numbness in the hands or feet.",
        "Diagnosis": "Fasting blood sugar test, oral glucose tolerance test, glycated hemoglobin (A1C) test, and assessment of symptoms and risk factors.",
        "Treatments": "Lifestyle modifications (e.g., healthy diet, regular physical activity, weight management), oral medications (e.g., metformin, sulfonylureas), insulin therapy in some cases, and monitoring blood sugar levels.",
        "Preventive Measures": "Maintaining a healthy weight, engaging in regular physical activity, eating a balanced diet, limiting processed foods and sugary beverages, and regular health check-ups to monitor blood sugar levels."
    },
    {

        "Disease Name": "Breast Cancer",
        "Prevalence": "Breast cancer is a malignant tumor that develops in the breast tissue. It is the most common cancer among women worldwide. Risk factors include age, family history, certain genetic mutations (BRCA1 and BRCA2), hormonal factors, and lifestyle factors (such as obesity and alcohol consumption).",
        "Symptoms": "A lump or thickening in the breast or underarm area, changes in breast size or shape, nipple discharge or inversion, skin changes (redness, dimpling), and breast pain.",
        "Diagnosis": "Mammography, ultrasound, breast MRI, biopsy (removal of tissue for analysis), and evaluation of family and medical history.",
        "Treatments": "Surgery (lumpectomy, mastectomy), radiation therapy, chemotherapy, hormone therapy, targeted therapy, and breast reconstruction.",
        "Preventive Measures": "Regular breast self-exams, clinical breast exams, mammograms, maintaining a healthy weight, limiting alcohol consumption, and discussing the potential benefits and risks of genetic testing with a healthcare provider."
    },
    {

        "Disease Name": "Depression",
        "Prevalence": "Depression is a common mental health disorder characterized by persistent feelings of sadness, loss of interest or pleasure, and a range of other emotional and physical symptoms. It affects people of all ages and can be caused by a combination of genetic, biological, environmental, and psychological factors.",
        "Symptoms": "Persistent sadness, loss of interest or pleasure in activities, changes in appetite and sleep patterns, fatigue, difficulty concentrating, feelings of guilt or worthlessness, and thoughts of self-harm or suicide.",
        "Diagnosis": "Evaluation of symptoms, medical history, and mental health assessments by a healthcare professional.",
        "Treatments": "Psychotherapy (such as cognitive-behavioral therapy), medication (such as antidepressants), support groups, lifestyle changes (exercise, healthy diet, stress management), and self-care strategies.",
        "Preventive Measures": "Maintaining social connections, seeking support from loved ones or mental health professionals, managing stress, engaging in regular physical activity, and developing healthy coping mechanisms."
    },
    {

        "Disease Name": "Rheumatoid Arthritis",
        "Prevalence": "Rheumatoid arthritis is an autoimmune disease that causes chronic inflammation in the joints. It can affect people of all ages, but it is more common in women. Genetic and environmental factors (such as smoking) play a role in its development.",
        "Symptoms": "Joint pain, swelling, stiffness, fatigue, morning stiffness that lasts for more than an hour, loss of appetite, and a general feeling of being unwell.",
        "Diagnosis": "Evaluation of symptoms, medical history, physical examination, blood tests (such as rheumatoid factor and anti-CCP antibodies), and imaging tests (X-rays, MRI, ultrasound).",
        "Treatments": "Medications (such as nonsteroidal anti-inflammatory drugs, disease-modifying antirheumatic drugs, and biologics), physical therapy, occupational therapy, lifestyle changes (such as regular exercise and a balanced diet), and joint surgery in severe cases.",
        "Preventive Measures": "There are no specific preventive measures for rheumatoid arthritis. However, avoiding smoking and maintaining overall good health can help reduce the risk of developing the disease."
    },

    {

        "Disease Name": "Colon Cancer",
        "Prevalence": "Colon cancer, also known as colorectal cancer, develops in the colon or rectum. It is the third most common cancer worldwide. Risk factors include age, family history, certain genetic conditions (such as Lynch syndrome and familial adenomatous polyposis), a history of inflammatory bowel disease, and unhealthy lifestyle habits.",
        "Symptoms": "Changes in bowel habits (diarrhea or constipation), blood in the stool, abdominal discomfort or pain, unintended weight loss, weakness, and fatigue.",
        "Diagnosis": "Colonoscopy, sigmoidoscopy, fecal occult blood test, imaging tests (such as CT scan), and biopsy (removal of tissue for analysis).",
        "Treatments": "Surgery (to remove the cancerous tissue), chemotherapy, radiation therapy, targeted therapy, and immunotherapy in advanced cases.",
        "Preventive Measures": "Regular screening (colonoscopy, fecal occult blood test), maintaining a healthy weight, being physically active, eating a balanced diet (high in fiber, fruits, and vegetables), limiting processed meats and alcohol consumption, and avoiding smoking."
    }

]
uri = "mongodb+srv://muneeb:muneeb@cluster0.v3vpd.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
database = client['Hospital']
collection = database['Diseases']

# Send a ping to confirm a successful connection
try:
    # Insert disease data objects
    collection.insert_many(diseases)
    print("Disease data created successfully.")

except Exception as e:
    print(e)
