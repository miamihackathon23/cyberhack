from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

from myapp import train as m

# load the trained model
m.model.fit(m.X_train, m.Y_train)

# create a Flask app
app = Flask(__name__)

# create an API endpoint
@app.route('/result', methods=['GET'])

def get_results(): 
    output = detect_fraud()
    return output

@app.route('/detect_fraud', methods=['POST'])
def detect_fraud():
    # get the input data from the request
    # input_data = request.json['input']
    input_data = pd.read_csv['input']
    
    # process the input data using the model
    input_arr = np.array(input_data).reshape(1, -1)
    output = m.model.predict(input_arr)[0]
    
    # return the output as a JSON response
    return jsonify({'output': output})

# start the Flask app
if __name__ == '__main__':
    app.run(debug=True)
