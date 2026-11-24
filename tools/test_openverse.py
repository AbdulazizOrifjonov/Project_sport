import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'Mozilla/5.0'}

def search_openverse(query, limit=5):
    url = f"https://api.openverse.org/v1/images/?q={urllib.parse.quote(query)}&page_size={limit}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('results', [])
            print(f"Openverse '{query}' found {len(results)} images")
            for r in results:
                print(r.get('title'), "->", r.get('url'))
    except Exception as e:
        print("Openverse error:", e)

search_openverse("traffic cone")
search_openverse("circular saw")
