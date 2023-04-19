from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("tscholak/cxmefzzi")

model = AutoModelForSeq2SeqLM.from_pretrained("tscholak/cxmefzzi")


input_text="what's the room size of Tom's booking? | question | table : name, phone_number, room_size"

input_token = tokenizer.encode(input_text, return_tensors="pt")
output_token = model.generate(input_token)
print(tokenizer.decode(output_token[0], skip_special_tokens=True))