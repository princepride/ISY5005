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
    conn = sqlite3.connect('./database/'+str(userType)+'.db')
    print('Connected to the database '+str(userType)+'.db')
    cursor = conn.cursor()
    res = cursor.execute("SELECT * FROM login_info WHERE email = ?",(email,))
    data = res.fetchall()
    if len(data) != 0:
        return jsonify({'state':'003', 'message':'registration failed, user already exists', 'userName':data[0][0], 'userEmail':data[0][1]})
    else:
        cursor.execute("INSERT INTO login_info (name, email, password) VALUES (?, ?, ?)", (email,email, password))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'state':'200','message':'registration success', 'userName':userType, 'userEmail':email})
# update email api
@app.route("/api/update_email",methods = ["POST"])
def update_email():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    old_email = req["old_email"]
    new_email = req["new_email"]
    password = req["password"]
    # check if the new email is already registered !

    # Connect to the database
    conn = sqlite3.connect('./database/'+str(userType)+'.db')
    print('Connected to the database '+str(userType)+'.db')
    cursor = conn.cursor()
    
    # Check if the new email is already registered
    res = cursor.execute("SELECT * FROM login_info WHERE email = ?", (new_email,))
    data = res.fetchall()
    if len(data) > 0:
        cursor.close()
        conn.close()
        return jsonify({'state': '001', 'message': 'Email already registered, please use a different email', 'userName': '', 'userEmail': ''})

    # Update email
    res = cursor.execute("SELECT * FROM login_info WHERE email = ?", (old_email,))
    data = res.fetchall()
    if len(data) == 0:
        return jsonify({'state': '000', 'message': 'Update failed, no such user', 'userName': '', 'userEmail': ''})
    elif len(data) >= 2:
        return jsonify({'state': '002', 'message': 'Update failed, system error, multiple users using the same email', 'userName': '', 'userEmail': ''})
    elif data[0][2] != password:
        return jsonify({'state': '003', 'message': 'Update failed, wrong password', 'userName': '', 'userEmail': ''})
    else:
        cursor.execute("UPDATE login_info SET email = ? WHERE email = ?", (new_email, old_email))
        conn.commit()
        return jsonify({'state': '100', 'message': 'Update success', 'userName': data[0][0], 'userEmail': new_email})

# update password api
@app.route("/api/update_password",methods = ["POST"])
def update_password():
    req = request.get_json(silent=False, force=True)
    userType = req["userType"]
    old_password = req["old_password"]
    new_password = req["new_password"]
    email = req["email"]

    # Connect to the database
    conn = sqlite3.connect('./database/'+str(userType)+'.db')
    print('Connected to the database '+str(userType)+'.db')
    cursor = conn.cursor()
    
    # Check if the email exists in the database
    res = cursor.execute("SELECT * FROM login_info WHERE email = ?",(email,))
    data = res.fetchall()
    
    if len(data) == 0:
        # Return error message if there is no such user
        return jsonify({'status':'000', 'message':'update password failed, there is no such user', 'userName':'', 'userEmail':''})
    elif len(data) >= 2:
        # Return error message if there are multiple users using the same email
        return jsonify({'status':'001', 'message':'update password failed, system error, there are multiple users using the same email', 'userName':'', 'userEmail':''})
    elif data[0][2] != old_password:
        # Return error message if the old password doesn't match
        return jsonify({'status':'002','message':'update password failed, old password is incorrect', 'userName':'', 'userEmail':''})
    else:
        # Update the password in the database
        cursor.execute("UPDATE login_info SET password = ? WHERE email = ?", (new_password, email))
        conn.commit()
        
        # Return success message
        return jsonify({'status':'100','message':'update password success', 'userName':data[0][0], 'userEmail':data[0][1]})

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)