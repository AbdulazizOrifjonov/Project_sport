import urllib.request

url = "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10) as resp:
        print("Status:", resp.status)
        data = resp.read()
        print("Read bytes:", len(data))
except Exception as e:
    print("Error:", e)
