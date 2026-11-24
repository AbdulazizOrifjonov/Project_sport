import urllib.request
import urllib.parse
import json
import re

def search_ddg_images(query, max_results=5):
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for image URLs or results
            print(f"Got HTML length: {len(html)}")
            # print links
            links = re.findall(r'href="([^"]+)"', html)
            print(f"Found {len(links)} links")
    except Exception as e:
        print("Error:", e)

search_ddg_images("makita angle grinder 125mm white background")
