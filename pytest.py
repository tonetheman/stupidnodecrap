import requests
import httplib

httplib.HTTPConnection.debuglevel = 1

data = { "a" : 10, "b" : 20 }
url = "http://localhost:9000/"
r = requests.post(url,data)
print r
