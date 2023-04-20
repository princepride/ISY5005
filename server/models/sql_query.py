from typing import List
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import re
tokenizer = AutoTokenizer.from_pretrained("juierror/text-to-sql-with-table-schema")
model = AutoModelForSeq2SeqLM.from_pretrained("juierror/text-to-sql-with-table-schema")
def prepare_input(question: str, table: List[str]):
    table_prefix = "table:"
    question_prefix = "question:"
    join_table = ",".join(table)
    inputs = f"{question_prefix} {question} {table_prefix} {join_table}"
    input_ids = tokenizer(inputs, max_length=700, return_tensors="pt", truncation=True).input_ids
    return input_ids
def inference(question: str, table: List[str]) -> str:
    input_data = prepare_input(question=question, table=table)
    input_data = input_data.to(model.device)
    outputs = model.generate(inputs=input_data, num_beams=10, top_k=10, max_length=700)
    result = tokenizer.decode(token_ids=outputs[0], skip_special_tokens=True)
    return result

def booking_flag(message):
    if "want to book" in message.lower():
        return True
    
def booking(message):
    if booking_flag(message):
        name = re.search('name is (.+?)[,.\s]', message.lower())
        print(name)
        phone_number = re.search('phone number is (.+?)[,.\s]', message.lower())
        print(phone_number)
        room_size = re.search('room size is (.+?)[,.\s]', message.lower())
        print(room_size)
        begin_time = re.search('begin time is (.+?)[,.\s]', message.lower())
        print(begin_time)
        note = re.search('note is (.+)', message.lower())
        print(note)
        if name and phone_number and room_size and begin_time and note:
            sql_query = f'INSERT INTO booking_123 (name, phone_number, room_size, begin_time, note) VALUES ("{name.group(1)}","{phone_number.group(1)}","{room_size.group(1)}","{begin_time.group(1)}","{note.group(1)}")'
            return sql_query
        else:
            return "Please provide all required information for booking."
        
# print(inference("what's the room size of Tom's booking",["name","id","roomSize"]))