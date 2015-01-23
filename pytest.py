import requests
import httplib

httplib.HTTPConnection.debuglevel = 1

# python encodes this as a bunch of url encoded K=V pairs
# in the body
data = { "a" : 10, "b" : 20 }
url = "http://localhost:9000/"
r = requests.post(url,data)
print r
