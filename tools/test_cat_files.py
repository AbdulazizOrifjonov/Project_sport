import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'Mozilla/5.0'}

def get_category_files(cat_name, limit=10):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({
        "action": "query",
        "generator": "categorymembers",
        "gcmtitle": f"Category:{cat_name}",
        "gcmnamespace": 6,
        "gcmlimit": limit,
        "prop": "imageinfo",
        "iiprop": "url|mime",
        "format": "json"
    })
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get("query", {}).get("pages", {})
            files = []
            for k, v in pages.items():
                title = v.get("title")
                infos = v.get("imageinfo", [])
                if infos:
                    files.append((title, infos[0].get("url")))
            return files
    except Exception as e:
        print("Error:", e)
        return []

print("Cordless drills:", get_category_files("Cordless drills", 5))
print("Traffic cones:", get_category_files("Traffic cones", 5))
