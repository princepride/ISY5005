import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# 加载语言模型和分词器
tokenizer = AutoTokenizer.from_pretrained('textattack/bert-base-uncased-imdb')
model = AutoModelForSequenceClassification.from_pretrained('textattack/bert-base-uncased-imdb')

def check_sql(input_text):
    # 对输入文本进行预处理和分词
    input_text = input_text.strip().lower()
    inputs = tokenizer(input_text, return_tensors='pt')
    # print(inputs)
    
    # 使用语言模型判断输入文本是否为一个 SQL 查询
    outputs = model(**inputs)
    # print(outputs)
    predictions = torch.softmax(outputs.logits, dim=1).detach().numpy()[0]
    # print(predictions)
    is_sql_query = bool(predictions[1] > 0.5)
    print(is_sql_query)
    
    return is_sql_query



# print(check_sql('get people name with age equal 25'))