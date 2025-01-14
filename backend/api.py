import json
from flask import Flask, jsonify, request
app = Flask(__name__)

datas = [
 { 'id': 1, 'name': 'Ashley' },
 { 'id': 2, 'name': 'Kate' },
 { 'id': 3, 'name': 'Joe' }
]


nextdataId = 4
3
@app.route('/data', methods=['GET'])
def get_datas():
 return jsonify(datas)

@app.route('/data/<int:id>', methods=['GET'])
def get_data_by_id(id: int):
 data = get_data(id)
 if data is None:
   return jsonify({ 'error': 'data does not exist'}), 404
 return jsonify(data)

def get_data(id):
 return next((e for e in datas if e['id'] == id), None)

def data_is_valid(data):
    for key in data.keys():
        if key != 'name':
            return False
    return True

@app.route('/data', methods=['POST'])
def create_data():
 global nextdataId
 data = json.loads(request.data)
 if not data_is_valid(data):
   return jsonify({ 'error': 'Invalid data properties.' }), 400

 data['id'] = nextdataId
 nextdataId += 1
 datas.append(data)

 return '', 201, { 'location': f'/datas/{data["id"]}' }

@app.route('/data/<int:id>', methods=['PUT'])
def update_data(id: int):
 data = get_data(id)
 if data is None:
   return jsonify({ 'error': 'data does not exist.' }), 404

 updated_data = json.loads(request.data)
 if not data_is_valid(updated_data):
   return jsonify({ 'error': 'Invalid data properties.' }), 400

 data.update(updated_data)

 return jsonify(data)

@app.route('/data/<int:id>', methods=['DELETE'])
def delete_data(id: int):
 global datas
 data = get_data(id)
 if data is None:
   return jsonify({ 'error': 'data does not exist.' }), 404

 datas = [e for e in datas if e['id'] != id]
 return jsonify(data), 200

if __name__ == '__main__':
   app.run(port=5000)

