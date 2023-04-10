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
    print(str(userType))
    conn = sqlite3.connect('./database/'+str(userType)+'.db')
    print('Connected to the database '+str(userType)+'.db')
    cursor = conn.cursor()
    res = cursor.execute("SELECT * FROM login_info WHERE email = ? AND password = ?",(email, password))
    data = res.fetchall()
    cursor.close()
    conn.close()
    if len(data) == 0:
        return jsonify({'result':0})
    else:
        return jsonify({'result':1})

@app.route("/api/register",methods = ["POST"])
def register():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    email = req["email"]
    password = req["password"]

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)