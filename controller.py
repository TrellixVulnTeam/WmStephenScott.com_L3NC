import os
from flask import Flask, render_template, request, flash

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    print('launching app.run')
    app.run(debug=True, port=os.environ.get('PORT', 5000), use_reloader=False)