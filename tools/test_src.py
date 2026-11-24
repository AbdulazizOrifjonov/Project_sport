import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0'}

def test_source(q):
    url = f"https://api.unsplash.com/search/photos?query={urllib.parse.quote(q)}&client_id=your_id"
    # Or test duckduckgo image api
    print("Testing image sources...")

test_source("traffic cone")
