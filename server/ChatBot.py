from models.chat_bot import chat_bot_model
from models.judge_query2 import check_sql
from models.sql_query import inference




class ChatBot:
    def __init__(self):
        self.name = "ChatBot"
    
    def respond(self, message):
        if check_sql(message):
            query_sql=inference(message, ["name", "phone_number", "room_size", "begin_time", "note"])
        else:
            return chat_bot_model(message)
        
