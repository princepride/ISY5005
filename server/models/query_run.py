import sqlite3


def db_run(message2):
    # connect db
    conn = sqlite3.connect('database/booking.db')
    c = conn.cursor()

    # read sql
    sql_query = message2

    # execute sql
    c.execute(sql_query)
    results = c.fetchall()

    # print result
    for row in results:
        print(row)

    # close connection
    conn.close()
    return row
print(db_run("select *"))
