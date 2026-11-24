import urllib.request
import urllib.parse
import json
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

def search_images(query, count=3):
    # Search Bing or Wikimedia or DDG for direct image URLs
    url = f"https://www.bing.com/images/search?q={urllib.parse.quote(query)}&qft=+filterui:photo-photo+filterui:aspect-square&form=HDRSC2&first=1"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract murl from Bing images: murl&quot;:&quot;(url)&quot;
            murls = re.findall(r'murl&quot;:&quot;([^&]+)&quot;', html)
            print(f"Query: '{query}' -> Found {len(murls)} direct image URLs")
            return murls[:count]
    except Exception as e:
        print("Search error:", e)
        return []

print(search_images("traffic cone isolated white background", 3))
