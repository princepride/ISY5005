import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# 加载语言模型和分词器
tokenizer = AutoTokenizer.from_pretrained('textattack/bert-base-uncased-imdb')
model = AutoModelForSequenceClassification.from_pretrained('textattack/bert-base-uncased-imdb')

def check_sql(input_text):
    # 对输入文本进行预处理和分词
    input_text = input_text.strip().lower()
    inputs = tokenizer(input_text, return_tensors='pt')
    
    # 使用语言模型判断输入文本是否为一个 SQL 查询
    outputs = model(**inputs)
    predictions = torch.softmax(outputs.logits, dim=1).detach().numpy()[0]
    is_sql_query = bool(predictions[1] > 0.5)
    
    return is_sql_query



# print(check_sql('Do you know sam time from 2pm to 3pm is free?'))