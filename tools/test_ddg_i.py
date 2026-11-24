import urllib.request
import urllib.parse
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://duckduckgo.com/'
}

def get_ddg_images(query, count=5):
    # Step 1: get vqd
    url = f"https://duckduckgo.com/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            m = re.search(r'vqd=([0-9-]+)&', html) or re.search(r'vqd="([0-9-]+)"', html)
            if not m:
                print("Could not find vqd")
                return []
            vqd = m.group(1)
            print("Found vqd:", vqd)
            
            # Step 2: request i.js
            img_url = f"https://duckduckgo.com/i.js?l=us-en&o=json&q={urllib.parse.quote(query)}&vqd={vqd}&f=,,,&p=1"
            req2 = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req2, timeout=10) as resp2:
                data = json.loads(resp2.read().decode('utf-8'))
                results = data.get('results', [])
                print(f"Got {len(results)} results from DDG i.js")
                return [r.get('image') for r in results[:count] if r.get('image')]
    except Exception as e:
        print("DDG error:", e)
        return []

urls = get_ddg_images("traffic cone white background isolated", 3)
print("URLs:", urls)
