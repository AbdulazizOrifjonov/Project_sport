import urllib.request
import urllib.parse
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'application/json'
}

def search_uzum(query):
    url = f"https://api.uzum.uz/api/v2/catalog/search?text={urllib.parse.quote(query)}&size=3"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            items = data.get('payload', {}).get('products', [])
            print(f"Uzum '{query}' found {len(items)} products")
            results = []
            for item in items:
                title = item.get('title')
                photos = item.get('photos', [])
                img_urls = [p.get('photo', {}).get('800', {}).get('high') for p in photos if p.get('photo')]
                results.append((title, img_urls))
            return results
    except Exception as e:
        print("Uzum error:", e)
        return []

print(search_uzum("4&1 akkumulyator"))
print(search_uzum("trimmer maysa"))
