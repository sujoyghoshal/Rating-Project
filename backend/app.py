from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, 'data', 'dummy.json')

def load_data():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def matches_q(item, q, fields):
    if not q:
        return True
    q = q.lower()
    for field in fields:
        value = item.get(field, "")
        if isinstance(value, (int, float)):
            value = str(value)
        if q in str(value).lower():
            return True
    return False

@app.route('/')
def home():
    return jsonify({
        "message": "Backend API running",
        "routes": ["/api/categories", "/api/reviews"]
    })

@app.route('/api/categories')
def get_categories():
    q = request.args.get('q', '').strip()
    data = load_data()
    categories = data.get("categories", [])
    result = [c for c in categories if matches_q(c, q, ['name'])]
    return jsonify({"results": result})

@app.route('/api/reviews')
def get_reviews():
    q = request.args.get('q', '').strip()
    data = load_data()
    reviews = data.get("reviews", [])
    result = [r for r in reviews if matches_q(r, q, ['review', 'company', 'name'])]
    return jsonify({"results": result})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
