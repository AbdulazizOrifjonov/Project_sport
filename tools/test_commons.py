import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'NSBStoreBot/1.0 (test@example.com)'}

def search_commons(query, limit=5):
    endpoint = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": query,
        "gsrnamespace": 6, # File namespace
        "gsrlimit": limit,
        "prop": "imageinfo",
        "iiprop": "url|dimensions|mime",
        "format": "json"
    }
    url = f"{endpoint}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get("query", {}).get("pages", {})
            results = []
            for k, v in pages.items():
                title = v.get("title")
                infos = v.get("imageinfo", [])
                if infos:
                    img_url = infos[0].get("url")
                    results.append((title, img_url))
            return results
    except Exception as e:
        print("Commons API error:", e)
        return []

print(search_commons("traffic cone white background", 5))
