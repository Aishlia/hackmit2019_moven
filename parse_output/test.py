import requests
import json

post_url = "http://127.0.0.1:5000/todo/api/v1.0/tasks"
data = json.dumps({'title':'Read a book'})
r = requests.post(post_url, params=data)
print(r.text)

# r = requests.get('http://127.0.0.1:5000/todo/api/v1.0/tasks')
# print(r.text)

# curl -i -H "Content-Type: application/json" -X POST -d '{"title":"Read a book"}' http://127.0.0.1:5000/todo/api/v1.0/tasks
