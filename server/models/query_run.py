import sqlite3
import re

# def add_quotes_to_query(sql_query):
#     # 使用正则表达式找到所有的变量和标志
#     pattern = re.compile(r'(\bname\b|\bphone_number\b|\broom_size\b|\bbegin_time\b|\bnote\b)\s*=\s*([^,"\'\s][^,]*[^,"\'\s]|[\'"][^\'"]*[\'"])')
#     matches = pattern.findall(sql_query)
    
#     # 在变量周围添加双引号
#     for match in matches:
#         sql_query = sql_query.replace(match[0] + "=" + match[1], match[0] + "=" + '"' + match[1] + '"')

#     return sql_query
def add_quotes(query):
    variables = ['name', 'phone_number', 'room_size', 'begin_time', 'note']
    for var in variables:
        pattern = re.compile(rf'{var}\s*=\s*([^,"]+)', re.IGNORECASE)
        query = pattern.sub(rf'{var}="\1"', query)
    return query


directory = 'd:/ISS/Intelligent Systems/Intelligent Software Agents/project/project/ISY5005/server/database/booking.db'

def query_run_fun(message2):
    # adjust query word
    message2 = message2.replace("table", "booking_123")
    message2 = add_quotes(message2)
    print(message2)

    # connect db
    conn = sqlite3.connect(directory)
    c = conn.cursor()

    # read sql
    sql_query = message2

    # execute sql
    
    if sql_query.startswith('SELECT'):
        c.execute(sql_query)
        headers = [i[0] for i in c.description]
        results = c.fetchall()
        # result_list = [result[0] for result in results]
        c.close()
        conn.close()
        return {'headers': headers, 'results': results}
    
    elif sql_query.startswith('INSERT'):
        c.execute(sql_query)
        conn.commit()
        c.close()
        conn.close()
        return "Data has inserted"
    else:
        return "Not suitable"
def answer_type(answer):
        if answer=="Not suitable":
            return "Query not suitable, try another way to ask"
        elif answer=="Data has inserted":
            return "Book successfully"
        elif isinstance(answer, dict):
            print(answer["headers"],answer["results"])
            # return "Variable listed:{},values: {}".format(answer["headers"],answer["results"])
            if answer['headers'] and answer['results']:
                hea = answer['headers'][0].replace('_', ' ')
                res = answer['results'][0][0]
                return f"{hea} is {res}"
            else:
                return "No results found."

# sql_request = 'SELECT * FROM booking_123 WHERE name = "Jerry"'
# sql_insert='INSERT INTO booking_123 (name, phone_number, room_size, begin_time, note) VALUES ("Jerry8","83456789","large","03232023","000")'
# query_run_fun(sql_insert)
# sql_format='SELECT * FROM booking_123 WHERE name = Jerry2'
# print(add_quotes(sql_format))
# example=query_run_fun(sql_format)
# print(example)
# print(answer_type(example))
