from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

datas = []
nextdataId = 1

@app.route('/data', methods=['POST'])
def create_data():
    try:
        print("Files in request:", request.files)
        print("Form data:", request.form)
        
        if 'file1' not in request.files or 'file2' not in request.files:
            return jsonify({
                'error': 'Missing files',
                'received': list(request.files.keys())
            }), 400

        file1 = request.files['file1']
        file2 = request.files['file2']

        file_info = {
            'file1': {
                'filename': file1.filename,
                'content_type': file1.content_type,
                'size': len(file1.read())
            },
            'file2': {
                'filename': file2.filename,
                'content_type': file2.content_type,
                'size': len(file2.read())
            }
        }
        file1.seek(0)
        file2.seek(0)

        global nextdataId
        data = {
            'id': nextdataId,
            'files': file_info
        }
        nextdataId += 1
        datas.append(data)
        return jsonify({
            'message': 'Files received successfully',
            'data': data
        })

    except Exception as e:
        print("Error:", str(e))
        return jsonify({
            'error': str(e),
            'type': 'server_error'
        }), 500

@app.route('/data', methods=['GET'])
def get_datas():
    return jsonify(datas)

@app.route('/data/<int:id>', methods=['GET'])
def get_data_by_id(id: int):
    data = next((e for e in datas if e['id'] == id), None)
    if data is None:
        return jsonify({'error': 'data does not exist'}), 404
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
