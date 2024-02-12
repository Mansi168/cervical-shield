from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np

app = Flask(__name__, template_folder='.', static_folder='./src')

model=pickle.load(open('model.pkl','rb'))


@app.route('/')
def hello_world():
    return render_template('predict.html')


@app.route('/prediction',methods=['POST','GET'])
def predict():
    int_features = [int(x) if x else 0 for x in request.form.values()]
    final=[np.array(int_features)]
    print(int_features)
    print(final)
    predictionn=model.predict_proba(final)
    output='{0:.{1}f}'.format(predictionn[0][1], 2)

    if output > str(0.5):
        result_text = 'You may have Cervical Cancer.\nProbability of having it is {}'.format(output)
    else:
        result_text = 'You are safe.\nProbability of Having Cervical Cancer is {}'.format(output)

    # Render result.html and pass the output text as a variable
    return render_template('result.html', output_text=result_text)

if __name__ == '__main__':
    app.run(debug=True)