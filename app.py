from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np

app = Flask(__name__)

model=pickle.load(open('model.pkl','rb'))


@app.route('/')
def hello_world():
    return render_template("\src\pages\Prediction\predict.jsx")


@app.route('/prediction',methods=['POST','GET'])
def predict():
    int_features=[int(x) for x in request.form.values()]
    final=[np.array(int_features)]
    print(int_features)
    print(final)
    predictionn=model.predict_proba(final)
    output='{0:.{1}f}'.format(predictionn[0][1], 2)

    if output>str(0.5):
        return render_template('\src\pages\Prediction\predict.jsx',pred='You may have Cervical Cancer.\nProbability of having it is {}'.format(output),bhai="Need to worry a bit?")
    else:
        return render_template('\src\pages\Prediction\predict.jsx',pred='Your are safe.\n Probability of Having Cervical Cancer is {}'.format(output),bhai="No worries")


if __name__ == '__main__':
    app.run(debug=True)