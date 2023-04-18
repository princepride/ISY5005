from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
'''
UTTERANCE = "I want to book a room. Can you help me?"
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
# print(tokenizer.batch_decode(reply_ids))
output=tokenizer.batch_decode(reply_ids)[0]
output = output.replace('<s>', '').replace('</s>', '')
'''

def chat_bot_model(UTTERANCE):
    inputs = tokenizer([UTTERANCE], return_tensors="pt")
    reply_ids = model.generate(**inputs)
    output=tokenizer.batch_decode(reply_ids)[0]
    output = output.replace('<s>', '').replace('</s>', '')
    return output
# print(chat_bot_model("How are you"))