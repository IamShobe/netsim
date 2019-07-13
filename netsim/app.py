from flask import Flask, render_template, request


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def main(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
    print("App exited!")
