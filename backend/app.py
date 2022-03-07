from flask import Flask, request, json, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from bson import ObjectId

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'SPEEC'
app.config['MONGO_URI'] = 'mongodb+srv://SPEEC:SpeecDb@speec.wyslm.mongodb.net/SPEEC?retryWrites=true&w=majority'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)


@app.route("/register", methods=['POST'])
def register():
    user = mongo.db.userdetails
    rollno = request.get_json()['rollno']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(
        request.get_json()['password']).decode('utf-8')

    rollno = rollno.lower()

    new_user = user.find_one({"rollno": rollno})

    if (new_user == None):
        user_id = user.insert_one({
            'email': email,
            'rollno': rollno,
            'password': password
        })
        return jsonify({"message": "The User is successfully registered"})

    else:
        return jsonify({"message": "The User is already registered."})


@app.route("/login", methods=["POST"])
def login():
    users = mongo.db.userdetails
    rollno = request.get_json()['rollno']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({"rollno": rollno})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity={
                'rollno': response['rollno']
            })
            result = jsonify(
                {"token": access_token, "rollno": rollno, "errorMessage": "No Error"})
        else:
            result = jsonify({"errorMessage": "Invalid Roll no or Password"})
    else:
        result = jsonify(
            {"errorMessage": "No results found... Please fill out the Correct Details."})
    return result


@app.route("/admin/register", methods=["POST"])
def registernominee():

    if request.method == "POST":
        img = request.get_json()['file']
        name = request.get_json()['name']
        rollno = request.get_json()['rollno']
        dept = request.get_json()['dept']
        batch = request.get_json()['batch']
        desc = request.get_json()['desc']
        post = request.get_json()['post']

        if(post == "President"):
            pusers = mongo.db.presidentdata
            response = pusers.find_one({"_id": rollno})

            if(response):
                return jsonify({"message": "This user is already nominated!!!"})
            else:
                user_id = pusers.insert_one(
                    {'_id': rollno, 'name': name, 'img': img, 'dept': dept, 'batch': batch, 'desc': desc, 'post': post})
                return jsonify({"message": "The user is registered successfully as President!!!"})

        elif (post == "Vice President"):
            vpusers = mongo.db.vicepresidentdata
            response = vpusers.find_one({"_id": rollno})

            if(response):
                return jsonify({"message": "This user is already nominated!!!"})

            else:
                user_id = vpusers.insert_one(
                    {'_id': rollno, 'name': name, 'img': img, 'dept': dept, 'batch': batch, 'desc': desc, 'post': post})
                return jsonify({"message": "The user is registered successfully as Vice President!!!"})

        elif (post == "Secretary"):
            susers = mongo.db.secretarydata
            response = susers.find_one({"_id": rollno})

            if(response):
                return jsonify({"message": "This user is already nominated!!!"})

            else:
                user_id = susers.insert_one(
                    {'_id': rollno, 'name': name, 'img': img, 'dept': dept, 'batch': batch, 'desc': desc, 'post': post})
                return jsonify({"message": "The user is registered successfully as Secretary!!!"})

        elif (post == "Class Representative"):
            crusers = mongo.db.crdata
            response = crusers.find_one({"_id": rollno})

            if(response):
                return jsonify({"message": "This user is already nominated!!!"})
            else:
                user_id = crusers.insert_one(
                    {'_id': rollno, 'name': name, 'img': img, 'dept': dept, 'batch': batch, 'desc': desc, 'post': post})
                return jsonify({"message": "The user is registered successfully as Class Representative!!!"})


@app.route("/admin/remove", methods=["POST"])
def removenominee():
    if request.method == "POST":
        drollno = request.get_json()['rollno']
        post = request.get_json()['post']

        if(post == "President"):
            pusers = mongo.db.presidentdata
            response = pusers.find_one({"_id": drollno})

            if(response == None):
                return jsonify({"message": "There is no such Nominee"})

            else:
                user_id = pusers.delete_one({"_id": drollno})
                return jsonify({"message": "President nominee deleted successfully!!!"})
        elif(post == "Vice President"):
            vpusers = mongo.db.vicepresidentdata
            response = vpusers.find_one({"_id": drollno})

            if(response == None):
                return jsonify({"message": "There is no such Nominee"})

            else:
                user_id = vpusers.delete_one({"_id": drollno})
                return jsonify({"message": "Vice President nominee deleted successfully!!!"})
        elif (post == "Secretary"):
            susers = mongo.db.secretarydata
            response = susers.find_one({"_id": drollno})
            if(response == None):
                return jsonify({"message": "There is no such Nominee"})

            else:
                user_id = susers.delete_one({"_id": drollno})
                return jsonify({"message": "Secretary nominee deleted successfully!!!"})
        elif (post == "Class Representative"):
            crusers = mongo.db.crdata
            response = crusers.find_one({"_id": drollno})

            if(response == None):
                return jsonify({"message": "There is no such Nominee"})

            else:
                user_id = crusers.delete_one({"_id": drollno})
                return jsonify({"message": "Nominee deleted successfully!!!"})


@app.route("/admin/presidentdata", methods=["GET"])
def presidentdata():
    if request.method == "GET":
        o = []

        pusers = mongo.db.presidentdata

        for i in pusers.find():
            o.append({"_id": i["_id"], "name": i["name"], "img": i["img"],
                     "dept": i["dept"], "batch": i["batch"], "desc": i["desc"], "post": i["post"]})

        return jsonify(o)


@app.route("/admin/vicepresidentdata", methods=["GET"])
def vicepresidentdata():
    if request.method == "GET":
        o = []

        vpusers = mongo.db.vicepresidentdata

        for i in vpusers.find():
            o.append({"_id": i["_id"], "name": i["name"], "img": i["img"],
                     "dept": i["dept"], "batch": i["batch"], "desc": i["desc"], "post": i["post"]})

        return jsonify(o)


@app.route("/admin/secretarydata", methods=["GET"])
def secretarydata():
    if request.method == "GET":
        o = []

        susers = mongo.db.secretarydata

        for i in susers.find():
            o.append({"_id": i["_id"], "name": i["name"], "img": i["img"],
                     "dept": i["dept"], "batch": i["batch"], "desc": i["desc"], "post": i["post"]})

        return jsonify(o)


@app.route("/admin/crdata", methods=["GET"])
def crdata():
    if request.method == "GET":
        o = []

        crusers = mongo.db.crdata

        for i in crusers.find():
            o.append({"_id": i["_id"], "name": i["name"], "img": i["img"],
                     "dept": i["dept"], "batch": i["batch"], "desc": i["desc"], "post": i["post"]})

        return jsonify(o)


@app.route("/presidentvote", methods=["POST"])
def setPVote():
    users = mongo.db.userdetails
    votes = mongo.db.pvotes
    pvote = request.get_json()['pvote']
    pname = request.get_json()['pname']
    prollno = request.get_json()['rollno']
    v = votes.insert_one({'pvote': pvote, 'pname': pname, 'rollno': prollno})
    return jsonify({'voted': True})


@app.route("/presidentvoted/<e>", methods=["GET"])
def getPVoted(e):
    v = mongo.db.pvotes
    r = v.find_one({'rollno': e})
    s = False
    if r:
        s = True
    return jsonify({'voted': s})


@app.route("/vicepresidentvote", methods=["POST"])
def setVPVote():
    users = mongo.db.userdetails
    votes = mongo.db.vpvotes
    pvote = request.get_json()['pvote']
    pname = request.get_json()['pname']
    prollno = request.get_json()['rollno']

    v = votes.insert_one({'pvote': pvote, 'pname': pname, 'rollno': prollno})
    return jsonify({'voted': True})


@app.route("/vicepresidentvoted/<e>", methods=["GET"])
def getVPVoted(e):
    v = mongo.db.vpvotes
    r = v.find_one({'rollno': e})
    s = False
    if r:
        s = True
    return jsonify({'voted': s})


@app.route("/secretaryvote", methods=["POST"])
def setSVote():
    users = mongo.db.userdetails
    votes = mongo.db.svotes
    pvote = request.get_json()['pvote']
    pname = request.get_json()['pname']
    prollno = request.get_json()['rollno']
    v = votes.insert_one({'pvote': pvote, 'pname': pname, 'rollno': prollno})
    return jsonify({'voted': True})


@app.route("/secretaryvoted/<e>", methods=["GET"])
def getSVoted(e):
    v = mongo.db.svotes
    r = v.find_one({'rollno': e})
    s = False
    if r:
        s = True
    return jsonify({'voted': s})


@app.route("/crvote", methods=["POST"])
def setCRVote():
    users = mongo.db.userdetails
    votes = mongo.db.crvotes
    pvote = request.get_json()['pvote']
    pname = request.get_json()['pname']
    prollno = request.get_json()['rollno']
    v = votes.insert_one({'pvote': pvote, 'pname': pname, 'rollno': prollno})
    return jsonify({'voted': True})


@app.route("/crvoted/<e>", methods=["GET"])
def getCRVoted(e):
    v = mongo.db.crvotes
    r = v.find_one({'rollno': e})
    s = False
    if r:
        s = True
    return jsonify({'voted': s})


@app.route("/getpvotecount", methods=["GET"])
def getPVoteCount():
    pusers = mongo.db.pvotes
    presidentcollection = mongo.db.presidentdata
    presidentvotes = dict({})
    for x in presidentcollection.find({}, {"_id": 0, "name": 1}):
        count = 0
        for y in pusers.find({}, {"_id": 0, "pname": 1, "pvote": 1, "rollno": 1}):
            if (x["name"] == y["pname"]):
                if (y["rollno"] == ""):
                    pass
                else:
                    count = count + y["pvote"]

            name = x["name"]
            presidentvotes[name] = count

    return presidentvotes


@app.route("/getvpvotecount", methods=["GET"])
def getVPVoteCount():
    vpusers = mongo.db.vpvotes
    vicepresidentcollection = mongo.db.vicepresidentdata
    vicepresidentvotes = dict({})
    for x in vicepresidentcollection.find({}, {"_id": 0, "name": 1}):
        count = 0
        for y in vpusers.find({}, {"_id": 0, "pname": 1, "pvote": 1, "rollno": 1}):
            if (x["name"] == y["pname"]):
                if (y["rollno"] == ""):
                    pass
                else:
                    count = count + y["pvote"]

            name = x["name"]
            vicepresidentvotes[name] = count

    return vicepresidentvotes


@app.route("/getsvotecount", methods=["GET"])
def getSVoteCount():
    susers = mongo.db.svotes
    secretarycollection = mongo.db.secretarydata
    secretaryvotes = dict({})
    for x in secretarycollection.find({}, {"_id": 0, "name": 1}):
        count = 0
        for y in susers.find({}, {"_id": 0, "pname": 1, "pvote": 1, "rollno": 1}):
            if (x["name"] == y["pname"]):
                if (y["rollno"] == ""):
                    pass
                else:
                    count = count + y["pvote"]

            name = x["name"]
            secretaryvotes[name] = count

    return secretaryvotes


@app.route("/getcrvotecount", methods=["GET"])
def getCRVoteCount():
    crusers = mongo.db.crvotes
    crcollection = mongo.db.crdata
    crvotes = dict({})
    for x in crcollection.find({}, {"_id": 0, "name": 1}):
        count = 0
        for y in crusers.find({}, {"_id": 0, "pname": 1, "pvote": 1, "rollno": 1}):
            if (x["name"] == y["pname"]):
                if (y["rollno"] == ""):
                    pass
                else:
                    count = count + y["pvote"]

            name = x["name"]
            crvotes[name] = count

    return crvotes


if __name__ == "__main__":
    app.run(debug=True)
