import urllib.request
import json

headers = {'User-Agent': 'NSBStore/1.0 (info@example.com)'}

def get_wiki_media(page_title):
    url = f"https://en.wikipedia.org/api/rest_v1/page/media-list/{page_title}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            items = data.get('items', [])
            print(f"Page '{page_title}' has {len(items)} media items")
            results = []
            for item in items:
                src = item.get('srcset', [])
                title = item.get('title')
                if src:
                    # pick largest
                    largest = src[-1].get('src')
                    if not largest.startswith('http'):
                        largest = 'https:' + largest
                    results.append((title, largest))
            return results
    except Exception as e:
        print("Wiki error:", e)
        return []

print(get_wiki_media("Traffic_cone")[:3])
print(get_wiki_media("Circular_saw")[:3])
print(get_wiki_media("Heat_gun")[:3])
