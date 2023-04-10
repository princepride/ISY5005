from flask import Flask,request,jsonify
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
    print('Connected to the database '+str(userType)+'.db')
    cursor = conn.cursor()
    res = cursor.execute("SELECT * FROM login_info WHERE email = ?",(email,))
    data = res.fetchall()
    cursor.close()
    conn.close()
    print(data)
    if len(data) == 0:
        return jsonify({'state':'000', 'message':'login failed, there is no such user', 'userName':'', 'userEmail':''})
    elif len(data) >= 2:
        return jsonify({'state':'001', 'message':'login failed, system error, there are multiple users using the same email', 'userName':'', 'userEmail':''})
    elif data[0][2] != password:
        return jsonify({'state':'002','message':'login failed, wrong password', 'userName':'', 'userEmail':''})
    else:
        return jsonify({'state':'100','message':'login success', 'userName':data[0][0], 'userEmail':data[0][1]})

# register api
@app.route("/api/register",methods = ["POST"])
def register():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    email = req["email"]
    password = req["password"]
    # 1. check if user is already registered
    # 2. if user is already registered, return new error type
    # 3. else, insert new user information

# update email api
@app.route("/api/update_email",methods = ["POST"])
def update_email():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    old_email = req["old_email"]
    new_email = req["new_email"]
    password = req["password"]
    # check if the new email is already registered !

# update password api
@app.route("/api/update_email",methods = ["POST"])
def update_email():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    old_password = req["old_password"]
    new_password = req["new_password"]
    email = req["email"]

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)