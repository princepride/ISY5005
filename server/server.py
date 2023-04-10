from flask import Flask,request,jsonify,send_file,url_for
from flask_cors import CORS
import json
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/api/login",methods = ["POST"])
def login():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"].lower()
    email = req["email"]
    password = req["password"]
    conn = sqlite3.connect('./database/'+str(userType)+'.db')
    # conn = sqlite3.connect(r'./database/customer.db')
    print('Connected to the database '+str(userType)+'.db')
    cursor = conn.cursor()
    res = cursor.execute("SELECT * FROM login_info WHERE email = ?",(email,))
    data = res.fetchall()
    cursor.close()
    conn.close()
    print(data)
    if len(data) == 0:
        return jsonify({'state':'000', 'message':'login failed, there is no such user'})
    elif len(data) >= 2:
        return jsonify({'state':'001', 'message':'login failed, system error, there are multiple users using the same email'})
    elif data[0][2] != password:
        return jsonify({'state':'002','message':'login failed, wrong password'})
    else:
        return jsonify({'state':'100','message':'login success'})

@app.route("/api/register",methods = ["POST"])
def register():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    email = req["email"]
    password = req["password"]

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)