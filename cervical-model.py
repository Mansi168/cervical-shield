import pandas as pd
import numpy as np

from sklearn.preprocessing import StandardScaler
import xgboost as xgb
import pickle
from sklearn.model_selection import train_test_split
import seaborn as sns

cancer_dataframe = pd.read_csv('cervical-cancer_csv.csv')
cancer_dataframe = cancer_dataframe.replace('?', np.nan)
cancer_dataframe  = cancer_dataframe.fillna(cancer_dataframe.mean())
input_df = cancer_dataframe.drop('Biopsy', axis = 1)
target_df = cancer_dataframe['Biopsy']
x = np.array(input_df).astype('float32')
y = np.array(target_df).astype('float32')
y.reshape(-1, 1)
scaler = StandardScaler()
x = scaler.fit_transform(x)
x_train, x_test, y_train, y_test = train_test_split(x,  y, test_size = 0.2)
x_train.shape, x_test.shape, y_train.shape, y_test.shape
x_test, x_val, y_test, y_val = train_test_split(x_test, y_test, test_size = 0.5)
x_test.shape, x_val.shape, y_test.shape, y_val.shape
model = xgb.XGBClassifier(learning_rate = 0.1, max_depth = 50)
model.fit(x_train, y_train)
y_pred = model.predict(x_test)
pickle.dump(model,open('model.pkl','wb'))
model=pickle.load(open('model.pkl','rb'))
