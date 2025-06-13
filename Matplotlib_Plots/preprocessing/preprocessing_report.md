# Data Preprocessing Report

## Initial Dataset Overview
* Number of observations: 9357
* Number of variables: 15

## Duplicate Records
* Number of duplicate rows: 0

* No duplicate records found.

## Missing Values
### Missing Values Before Treatment

### Missing Values Treatment Strategy
* CO(GT): 17.99% missing - Will use forward fill with rolling mean imputation
* PT08.S1(CO): 3.91% missing - Will use forward fill with rolling mean imputation
* NMHC(GT): 90.23% missing - Column will be dropped due to excessive missing data
* C6H6(GT): 3.91% missing - Will use forward fill with rolling mean imputation
* PT08.S2(NMHC): 3.91% missing - Will use forward fill with rolling mean imputation
* NOx(GT): 17.52% missing - Will use forward fill with rolling mean imputation
* PT08.S3(NOx): 3.91% missing - Will use forward fill with rolling mean imputation
* NO2(GT): 17.55% missing - Will use forward fill with rolling mean imputation
* PT08.S4(NO2): 3.91% missing - Will use forward fill with rolling mean imputation
* PT08.S5(O3): 3.91% missing - Will use forward fill with rolling mean imputation
* T: 3.91% missing - Will use forward fill with rolling mean imputation
* RH: 3.91% missing - Will use forward fill with rolling mean imputation
* AH: 3.91% missing - Will use forward fill with rolling mean imputation

* Dropping NMHC(GT) column due to excessive missing values (>80%)

### Imputation Methods Applied
* Correlation between CO(GT) and PT08.S1(CO): 0.8793
* Used regression model based on PT08.S1(CO) to impute 1647 values in CO(GT)
* Correlation between NOx(GT) and PT08.S3(NOx): -0.6557
* Used regression model based on PT08.S3(NOx) to impute 1595 values in NOx(GT)
* Correlation between NO2(GT) and PT08.S4(NO2): 0.1577
* CO(GT): Imputed 36 missing values using rolling mean and fill methods
* PT08.S1(CO): Imputed 366 missing values using rolling mean and fill methods
* C6H6(GT): Imputed 366 missing values using rolling mean and fill methods
* PT08.S2(NMHC): Imputed 366 missing values using rolling mean and fill methods
* NOx(GT): Imputed 44 missing values using rolling mean and fill methods
* PT08.S3(NOx): Imputed 366 missing values using rolling mean and fill methods
* NO2(GT): Imputed 1642 missing values using rolling mean and fill methods
* PT08.S4(NO2): Imputed 366 missing values using rolling mean and fill methods
* PT08.S5(O3): Imputed 366 missing values using rolling mean and fill methods
* T: Imputed 366 missing values using rolling mean and fill methods
* RH: Imputed 366 missing values using rolling mean and fill methods
* AH: Imputed 366 missing values using rolling mean and fill methods

* Remaining missing values after imputation: 0

## Outlier Detection and Handling
* CO(GT): 275 outliers detected (2.94%)
  - Outliers in CO(GT) have been capped at [-1.57, 5.42]
* PT08.S1(CO): 109 outliers detected (1.16%)
  - Outliers in PT08.S1(CO) have been capped at [494.88, 1677.88]
* C6H6(GT): 229 outliers detected (2.45%)
  - Outliers in C6H6(GT) have been capped at [-9.93, 28.39]
* PT08.S2(NMHC): 63 outliers detected (0.67%)
  - Outliers in PT08.S2(NMHC) have been capped at [159.88, 1690.88]
* NOx(GT): 506 outliers detected (5.41%)
  - Outliers in NOx(GT) have been capped at [-222.00, 642.00]
* PT08.S3(NOx): 248 outliers detected (2.65%)
  - Outliers in PT08.S3(NOx) have been capped at [195.38, 1426.38]
* NO2(GT): 151 outliers detected (1.61%)
  - Outliers in NO2(GT) have been capped at [-15.50, 228.50]
* PT08.S4(NO2): 94 outliers detected (1.00%)
  - Outliers in PT08.S4(NO2) have been capped at [549.12, 2348.12]
* PT08.S5(O3): 78 outliers detected (0.83%)
  - Outliers in PT08.S5(O3) have been capped at [-99.62, 2109.38]
* T: 3 outliers detected (0.03%)
  - Outliers in T have been capped at [-7.09, 43.21]
* RH: 0 outliers detected (0.00%)
* AH: 1 outliers detected (0.01%)
  - Outliers in AH have been capped at [-0.15, 2.19]

## Data Transformation
### Standardization
* Standardizing numeric features to have zero mean and unit variance

## Final Preprocessed Dataset
* Shape of preprocessed dataset: (9357, 14)
* Columns in preprocessed dataset: ['Date', 'Time', 'CO(GT)', 'PT08.S1(CO)', 'C6H6(GT)', 'PT08.S2(NMHC)', 'NOx(GT)', 'PT08.S3(NOx)', 'NO2(GT)', 'PT08.S4(NO2)', 'PT08.S5(O3)', 'T', 'RH', 'AH']

* Preprocessed data saved to: preprocessing/preprocessed_data.csv
* Standardized data saved to: preprocessing/standardized_data.csv
