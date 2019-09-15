import requests
import json

# for i in range(0,4):
#     post_url = "http://127.0.0.1:5000/todo/api/v1.0/tasks/"
#     data = {'name':'egg'+str(i+1), 'price':'1.03'}
#     r = requests.post(post_url, json=data)
#
# post_url = "http://127.0.0.1:5000/todo/api/v1.0/tasks/"
# data = {'name':'Tax', 'price':'4.00'}
# r = requests.post(post_url, json=data)
# post_url = "http://127.0.0.1:5000/todo/api/v1.0/tasks/"
# data = {'name':'Subtotal', 'price':'20.00'}
# r = requests.post(post_url, json=data)



# sample = {"statusCode": 200, "headers": {"Content-Type": "application/json"}, "body": "[[\"Brother Roll\", \"10.95\"], [\"Sashimi Dinner\", \"22.95\"], [\"Subtotal:\", \"54.55\"], [\"fotal:\", \"58.37\"]]"}
#
# post_url = "http://127.0.0.1:5000/todo/api/v1.0/tasks/"
# data = {'name':'Total', 'price':'20.20'}
# r = requests.post(post_url, json=data)
# print(r.text)

# t = requests.delete("http://127.0.0.1:5000/todo/api/v1.0/tasks/4")
# print(t.text)

#
data = {'friends':'David Bauer'}
y = requests.put("http://127.0.0.1:5000/todo/api/v1.0/tasks/1", json=data)
print(y.text)
