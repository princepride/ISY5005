from models.chat_bot import chat_bot_model
from models.judge_query2 import check_sql
from models.sql_query import inference
from models.query_run import query_run_fun, answer_type




class ChatBot:
    def __init__(self):
        self.name = "ChatBot"
    
    def respond(self, message):
        if check_sql(message):
            query_sql=inference(message, ["name", "phone_number", "room_size", "begin_time", "note"])
            print(query_sql)
            answer=query_run_fun(query_sql)
            return answer_type(answer)
        else:
            return chat_bot_model(message)





