#!flask/bin/python
from flask import Flask, jsonify, make_response, abort, request

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'name': u'Null',
        'price': u'Null',
        'friends': u'Null'
    }
]

# Return JSON for error
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

# Post an element
@app.route('/todo/api/v1.0/tasks/', methods=['POST'])
def create_task():
    # return (request)
    if not request.json or not 'name' in request.json:
        abort(400)
    task = {
        'id': tasks[-1]['id'] + 1,
        'name': request.json['name'],
        'price': request.json['price'],
        'friends': request.json.get('friends', "")
    }
    tasks.append(task)
    return jsonify({'task': task}), 201

# Get one element
@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

# Print out all elements
@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

if __name__ == '__main__':
    app.run(debug=True)

# # Deleting
# @app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['PUT'])
# def update_task(task_id):
#     task = [task for task in tasks if task['id'] == task_id]
#     if len(task) == 0:
#         abort(404)
#     if not request.json:
#         abort(400)
#     if 'name' in request.json and type(request.json['name']) != unicode:
#         abort(400)
#     if 'price' in request.json and type(request.json['price']) is not unicode:
#         abort(400)
#     # if 'done' in request.json and type(request.json['done']) is not bool:
#     #     abort(400)
#     task[0]['name'] = request.json.get('name', task[0]['name'])
#     task[0]['price'] = request.json.get('price', task[0]['price'])
#     return jsonify({'task': task[0]})

@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    tasks.remove(task[0])
    return jsonify({'result': True})

#
# #!flask/bin/python
# from flask import Flask, jsonify, make_response, abort, request
#
# app = Flask(__name__)
#
# tasks = [
#     {
#         'id': 1,
#         'name': u'Buy groceries',
#         'price': u'Milk, Cheese, Pizza, Fruit, Tylenol',
#         'friends': u'Hello',
#         'tax': False
#     }
# ]
#
# # Return JSON for error
# @app.errorhandler(404)
# def not_found(error):
#     return make_response(jsonify({'error': 'Not found'}), 404)
#
# # Post an element
# @app.route('/todo/api/v1.0/tasks/', methods=['POST'])
# def create_task():
#     # return (request)
#     if not request.json or not 'title' in request.json:
#         abort(400)
#     task = {
#         'id': tasks[-1]['id'] + 1,
#         'title': request.json['title'],
#         'description': request.json.get('description', ""),
#         'done': False
#     }
#     tasks.append(task)
#     return jsonify({'task': task}), 201
#
# # Get one element
# @app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
# def get_task(task_id):
#     task = [task for task in tasks if task['id'] == task_id]
#     if len(task) == 0:
#         abort(404)
#     return jsonify({'task': task[0]})
#
# # Print out all elements
# @app.route('/todo/api/v1.0/tasks', methods=['GET'])
# def get_tasks():
#     return jsonify({'tasks': tasks})
#
# if __name__ == '__main__':
#     app.run(debug=True)
#
# # Deleting
# @app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['PUT'])
# def update_task(task_id):
#     task = [task for task in tasks if task['id'] == task_id]
#     if len(task) == 0:
#         abort(404)
#     if not request.json:
#         abort(400)
#     if 'title' in request.json and type(request.json['title']) != unicode:
#         abort(400)
#     if 'description' in request.json and type(request.json['description']) is not unicode:
#         abort(400)
#     if 'done' in request.json and type(request.json['done']) is not bool:
#         abort(400)
#     task[0]['title'] = request.json.get('title', task[0]['title'])
#     task[0]['description'] = request.json.get('description', task[0]['description'])
#     task[0]['done'] = request.json.get('done', task[0]['done'])
#     return jsonify({'task': task[0]})
#
# @app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['DELETE'])
# def delete_task(task_id):
#     task = [task for task in tasks if task['id'] == task_id]
#     if len(task) == 0:
#         abort(404)
#     tasks.remove(task[0])
#     return jsonify({'result': True})
