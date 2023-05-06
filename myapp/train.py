import numpy as np 
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

#load data set to data frame 
cc_data = pd.read_csv("C:\\Users\\pinak\\Documents\\Projects\\CyberVigilante\\TrainingData2.2.csv")

print(cc_data.head())\

#seperating data 
not_fraud = cc_data[cc_data.fraud_bool == 0]
fraud = cc_data[cc_data.fraud_bool == 1]
print(fraud.shape)

#data stats 
#print(fraud.Amount.describe())

#splitting data into features and targets 

x = cc_data.drop(columns='fraud_bool', axis=1)
y = cc_data['fraud_bool']
print(x)

#build sample dataset containing normal dist for fraud and not fraud
#generate randomsample of non fraud data 
real_sample = not_fraud.sample(n= 43000)
#combine both sets
new_dataset = pd.concat((real_sample, fraud), axis=0 )
newX = new_dataset.drop(columns='fraud_bool', axis=1)
newY = new_dataset['fraud_bool']

#split training and testing data 
X_train, X_test, Y_train, Y_test = train_test_split(newX, newY, test_size=0.2, stratify=newY, random_state=2)

#train model 
model = LogisticRegression(max_iter=1000000)
model.fit(X_train, Y_train)
#print(newX.shape, X_test.shape, X_train.shape)

#evaluate model 
Xtrain_prediction = model.predict(X_train)
training_accuracy = accuracy_score(Xtrain_prediction, Y_train)

print("Accuracy score:", training_accuracy)

