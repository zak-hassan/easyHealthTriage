from flask import Flask
from os import environ
from flask import render_template

app = Flask(__name__)


@app.route("/")
@app.route("/listView")
@app.route("/emptyState")
def home():
    return render_template('index.html')

if __name__ == "__main__":
    port = int(environ.get("PORT", 8081))
    app.run(host='0.0.0.0', port=port)