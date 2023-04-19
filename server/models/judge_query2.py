from transformers import AutoTokenizer, AutoModelForSequenceClassification
tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-mnli")
model = AutoModelForSequenceClassification.from_pretrained("facebook/bart-large-mnli")
from transformers import pipeline
classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")


sequence_to_classify = "What is the gender of people who live in New York?"

def check_sql(sequence_to_classify):
    candidate_labels = ['data query']
    response=classifier(sequence_to_classify, candidate_labels)
    # print(response)
    dataQueryIndex=response["labels"].index("data query")
    # print(response["scores"][dataQueryIndex])
    if response["scores"][dataQueryIndex]>0.9:
        return True
    else:
        return False
# print(check_sql('Hello I want to book a room, can you suggest me where I can get'))