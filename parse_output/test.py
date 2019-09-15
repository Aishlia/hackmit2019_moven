import requests
import json

post_url = "http://127.0.0.1:5000/todo/api/v1.0/tasks/"
# data = {'name':'Rice', 'price':'3.49', 'friends':['David Bauer', 'Matt Oakley']}
# r = requests.post(post_url, json=data)
# print(r.text)

t = requests.head("http://127.0.0.1:5000/todo/api/v1.0/tasks")
print(t.text)
