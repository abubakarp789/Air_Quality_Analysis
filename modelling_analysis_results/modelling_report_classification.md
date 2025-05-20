# Classification Analysis Report

Classification analysis performed using 100.0% of the data.

### Objective
The objective of this classification analysis is to predict high pollution events for CO(GT). A high pollution event is defined as CO(GT) concentration above its 75th percentile (calculated on the full dataset).

Defined target variable `CO_High_Pollution` (1 if CO(GT) > 2.80, 0 otherwise).
Class distribution in the used sample: 0.24 high pollution, 0.76 normal

### Feature Selection
* Target Variable: `CO_High_Pollution`
* Features: ['PT08.S1(CO)', 'C6H6(GT)', 'PT08.S2(NMHC)', 'NOx(GT)', 'PT08.S3(NOx)', 'NO2(GT)', 'PT08.S4(NO2)', 'PT08.S5(O3)', 'T', 'RH', 'AH']

Data split into 70% training and 30% testing sets (stratified).

### Model 1: Logistic Regression
**Logistic Regression Results:**
Accuracy: 0.9384
Classification Report:
```
              precision    recall  f1-score   support

           0       0.98      0.94      0.96      2131
           1       0.84      0.93      0.88       677

    accuracy                           0.94      2808
   macro avg       0.91      0.93      0.92      2808
weighted avg       0.94      0.94      0.94      2808

```
* Confusion matrix plot saved to: modelling_analysis_results\classification_lr_confusion_matrix.png

### Model 2: Random Forest Classifier
**Random Forest Classifier Results:**
Accuracy: 0.9526
Classification Report:
```
              precision    recall  f1-score   support

           0       0.96      0.98      0.97      2131
           1       0.93      0.86      0.90       677

    accuracy                           0.95      2808
   macro avg       0.95      0.92      0.93      2808
weighted avg       0.95      0.95      0.95      2808

```
* Confusion matrix plot saved to: modelling_analysis_results\classification_rf_confusion_matrix.png

### Classification Summary
Classification models were trained to predict high CO(GT) pollution events. Review the metrics to compare model performance. `class_weight="balanced"` was used to handle class imbalance.

