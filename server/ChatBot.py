from models.chat_bot import chat_bot_model
from models.judge_query2 import check_sql
from models.sql_query import inference, booking, booking_flag
from models.query_run import query_run_fun, answer_type




class ChatBot:
    def __init__(self):
        self.name = "ChatBot"
        self.welcome_message = "Hello! What can I do for you? If you want to use the booking function, please remember that you should type your name, phone number, room size, begin time, and note."
    
    def respond(self, message):
        if "hello" in message.lower():
            return self.welcome_message
        
        elif booking_flag(message):
            sql_insert = booking(message)
            print(sql_insert)
            answer=query_run_fun(sql_insert)
            return answer_type(answer)

        elif check_sql(message):
            query_sql=inference(message, ["name", "phone_number", "room_size", "begin_time", "note"])
            print(query_sql)
            answer=query_run_fun(query_sql)
            return answer_type(answer)
        else:
            return chat_bot_model(message)





