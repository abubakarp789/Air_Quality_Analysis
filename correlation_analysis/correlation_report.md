# Correlation Analysis Report

## Correlation Matrix
The correlation matrix has been calculated for all numeric variables in the dataset.
* Full correlation matrix saved to: correlation_analysis/correlation_matrix.csv

## Correlation Heatmap
A heatmap visualization of the correlation matrix has been created to better visualize the relationships between variables.
* Correlation heatmap saved to: correlation_analysis/correlation_heatmap.png

## Significant Correlations
### Strong Positive Correlations (r > 0.7)
* C6H6(GT) and PT08.S2(NMHC): r = 0.9880
* PT08.S2(NMHC) and C6H6(GT): r = 0.9880
* CO(GT) and C6H6(GT): r = 0.9039
* C6H6(GT) and CO(GT): r = 0.9039
* PT08.S1(CO) and PT08.S5(O3): r = 0.9021
* PT08.S5(O3) and PT08.S1(CO): r = 0.9021
* CO(GT) and PT08.S2(NMHC): r = 0.8986
* PT08.S2(NMHC) and CO(GT): r = 0.8986
* PT08.S1(CO) and PT08.S2(NMHC): r = 0.8959
* PT08.S2(NMHC) and PT08.S1(CO): r = 0.8959
* PT08.S1(CO) and C6H6(GT): r = 0.8917
* C6H6(GT) and PT08.S1(CO): r = 0.8917
* CO(GT) and PT08.S1(CO): r = 0.8802
* PT08.S1(CO) and CO(GT): r = 0.8802
* PT08.S2(NMHC) and PT08.S5(O3): r = 0.8783
* PT08.S5(O3) and PT08.S2(NMHC): r = 0.8783
* C6H6(GT) and PT08.S5(O3): r = 0.8718
* PT08.S5(O3) and C6H6(GT): r = 0.8718
* CO(GT) and PT08.S5(O3): r = 0.8407
* PT08.S5(O3) and CO(GT): r = 0.8407
* CO(GT) and NOx(GT): r = 0.7866
* NOx(GT) and CO(GT): r = 0.7866
* NOx(GT) and PT08.S5(O3): r = 0.7817
* PT08.S5(O3) and NOx(GT): r = 0.7817
* PT08.S2(NMHC) and PT08.S4(NO2): r = 0.7691
* PT08.S4(NO2) and PT08.S2(NMHC): r = 0.7691
* C6H6(GT) and PT08.S4(NO2): r = 0.7590
* PT08.S4(NO2) and C6H6(GT): r = 0.7590
* NOx(GT) and NO2(GT): r = 0.7190
* NO2(GT) and NOx(GT): r = 0.7190
* PT08.S1(CO) and NOx(GT): r = 0.7185
* NOx(GT) and PT08.S1(CO): r = 0.7185
* PT08.S2(NMHC) and NOx(GT): r = 0.7099
* NOx(GT) and PT08.S2(NMHC): r = 0.7099
* C6H6(GT) and NOx(GT): r = 0.7071
* NOx(GT) and C6H6(GT): r = 0.7071

### Strong Negative Correlations (r < -0.7)
* PT08.S2(NMHC) and PT08.S3(NOx): r = -0.8294
* PT08.S3(NOx) and PT08.S2(NMHC): r = -0.8294
* PT08.S3(NOx) and PT08.S5(O3): r = -0.8290
* PT08.S5(O3) and PT08.S3(NOx): r = -0.8290
* PT08.S1(CO) and PT08.S3(NOx): r = -0.8112
* PT08.S3(NOx) and PT08.S1(CO): r = -0.8112
* C6H6(GT) and PT08.S3(NOx): r = -0.7895
* PT08.S3(NOx) and C6H6(GT): r = -0.7895
* CO(GT) and PT08.S3(NOx): r = -0.7579
* PT08.S3(NOx) and CO(GT): r = -0.7579
* NOx(GT) and PT08.S3(NOx): r = -0.7519
* PT08.S3(NOx) and NOx(GT): r = -0.7519

## Scatter Plots of Key Correlations
* Scatter plot for C6H6(GT) vs PT08.S2(NMHC) (r = 0.9880) saved to: correlation_analysis/scatter_C6H6(GT)_PT08.S2(NMHC).png
* Scatter plot for PT08.S2(NMHC) vs C6H6(GT) (r = 0.9880) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_C6H6(GT).png
* Scatter plot for CO(GT) vs C6H6(GT) (r = 0.9039) saved to: correlation_analysis/scatter_CO(GT)_C6H6(GT).png
* Scatter plot for C6H6(GT) vs CO(GT) (r = 0.9039) saved to: correlation_analysis/scatter_C6H6(GT)_CO(GT).png
* Scatter plot for PT08.S1(CO) vs PT08.S5(O3) (r = 0.9021) saved to: correlation_analysis/scatter_PT08.S1(CO)_PT08.S5(O3).png
* Scatter plot for PT08.S5(O3) vs PT08.S1(CO) (r = 0.9021) saved to: correlation_analysis/scatter_PT08.S5(O3)_PT08.S1(CO).png
* Scatter plot for CO(GT) vs PT08.S2(NMHC) (r = 0.8986) saved to: correlation_analysis/scatter_CO(GT)_PT08.S2(NMHC).png
* Scatter plot for PT08.S2(NMHC) vs CO(GT) (r = 0.8986) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_CO(GT).png
* Scatter plot for PT08.S1(CO) vs PT08.S2(NMHC) (r = 0.8959) saved to: correlation_analysis/scatter_PT08.S1(CO)_PT08.S2(NMHC).png
* Scatter plot for PT08.S2(NMHC) vs PT08.S1(CO) (r = 0.8959) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_PT08.S1(CO).png
* Scatter plot for PT08.S1(CO) vs C6H6(GT) (r = 0.8917) saved to: correlation_analysis/scatter_PT08.S1(CO)_C6H6(GT).png
* Scatter plot for C6H6(GT) vs PT08.S1(CO) (r = 0.8917) saved to: correlation_analysis/scatter_C6H6(GT)_PT08.S1(CO).png
* Scatter plot for CO(GT) vs PT08.S1(CO) (r = 0.8802) saved to: correlation_analysis/scatter_CO(GT)_PT08.S1(CO).png
* Scatter plot for PT08.S1(CO) vs CO(GT) (r = 0.8802) saved to: correlation_analysis/scatter_PT08.S1(CO)_CO(GT).png
* Scatter plot for PT08.S2(NMHC) vs PT08.S5(O3) (r = 0.8783) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_PT08.S5(O3).png
* Scatter plot for PT08.S5(O3) vs PT08.S2(NMHC) (r = 0.8783) saved to: correlation_analysis/scatter_PT08.S5(O3)_PT08.S2(NMHC).png
* Scatter plot for C6H6(GT) vs PT08.S5(O3) (r = 0.8718) saved to: correlation_analysis/scatter_C6H6(GT)_PT08.S5(O3).png
* Scatter plot for PT08.S5(O3) vs C6H6(GT) (r = 0.8718) saved to: correlation_analysis/scatter_PT08.S5(O3)_C6H6(GT).png
* Scatter plot for CO(GT) vs PT08.S5(O3) (r = 0.8407) saved to: correlation_analysis/scatter_CO(GT)_PT08.S5(O3).png
* Scatter plot for PT08.S5(O3) vs CO(GT) (r = 0.8407) saved to: correlation_analysis/scatter_PT08.S5(O3)_CO(GT).png
* Scatter plot for PT08.S2(NMHC) vs PT08.S3(NOx) (r = -0.8294) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_PT08.S3(NOx).png
* Scatter plot for PT08.S3(NOx) vs PT08.S2(NMHC) (r = -0.8294) saved to: correlation_analysis/scatter_PT08.S3(NOx)_PT08.S2(NMHC).png
* Scatter plot for PT08.S3(NOx) vs PT08.S5(O3) (r = -0.8290) saved to: correlation_analysis/scatter_PT08.S3(NOx)_PT08.S5(O3).png
* Scatter plot for PT08.S5(O3) vs PT08.S3(NOx) (r = -0.8290) saved to: correlation_analysis/scatter_PT08.S5(O3)_PT08.S3(NOx).png
* Scatter plot for PT08.S1(CO) vs PT08.S3(NOx) (r = -0.8112) saved to: correlation_analysis/scatter_PT08.S1(CO)_PT08.S3(NOx).png
* Scatter plot for PT08.S3(NOx) vs PT08.S1(CO) (r = -0.8112) saved to: correlation_analysis/scatter_PT08.S3(NOx)_PT08.S1(CO).png
* Scatter plot for C6H6(GT) vs PT08.S3(NOx) (r = -0.7895) saved to: correlation_analysis/scatter_C6H6(GT)_PT08.S3(NOx).png
* Scatter plot for PT08.S3(NOx) vs C6H6(GT) (r = -0.7895) saved to: correlation_analysis/scatter_PT08.S3(NOx)_C6H6(GT).png
* Scatter plot for CO(GT) vs NOx(GT) (r = 0.7866) saved to: correlation_analysis/scatter_CO(GT)_NOx(GT).png
* Scatter plot for NOx(GT) vs CO(GT) (r = 0.7866) saved to: correlation_analysis/scatter_NOx(GT)_CO(GT).png
* Scatter plot for NOx(GT) vs PT08.S5(O3) (r = 0.7817) saved to: correlation_analysis/scatter_NOx(GT)_PT08.S5(O3).png
* Scatter plot for PT08.S5(O3) vs NOx(GT) (r = 0.7817) saved to: correlation_analysis/scatter_PT08.S5(O3)_NOx(GT).png
* Scatter plot for PT08.S2(NMHC) vs PT08.S4(NO2) (r = 0.7691) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_PT08.S4(NO2).png
* Scatter plot for PT08.S4(NO2) vs PT08.S2(NMHC) (r = 0.7691) saved to: correlation_analysis/scatter_PT08.S4(NO2)_PT08.S2(NMHC).png
* Scatter plot for C6H6(GT) vs PT08.S4(NO2) (r = 0.7590) saved to: correlation_analysis/scatter_C6H6(GT)_PT08.S4(NO2).png
* Scatter plot for PT08.S4(NO2) vs C6H6(GT) (r = 0.7590) saved to: correlation_analysis/scatter_PT08.S4(NO2)_C6H6(GT).png
* Scatter plot for CO(GT) vs PT08.S3(NOx) (r = -0.7579) saved to: correlation_analysis/scatter_CO(GT)_PT08.S3(NOx).png
* Scatter plot for PT08.S3(NOx) vs CO(GT) (r = -0.7579) saved to: correlation_analysis/scatter_PT08.S3(NOx)_CO(GT).png
* Scatter plot for NOx(GT) vs PT08.S3(NOx) (r = -0.7519) saved to: correlation_analysis/scatter_NOx(GT)_PT08.S3(NOx).png
* Scatter plot for PT08.S3(NOx) vs NOx(GT) (r = -0.7519) saved to: correlation_analysis/scatter_PT08.S3(NOx)_NOx(GT).png
* Scatter plot for NOx(GT) vs NO2(GT) (r = 0.7190) saved to: correlation_analysis/scatter_NOx(GT)_NO2(GT).png
* Scatter plot for NO2(GT) vs NOx(GT) (r = 0.7190) saved to: correlation_analysis/scatter_NO2(GT)_NOx(GT).png
* Scatter plot for PT08.S1(CO) vs NOx(GT) (r = 0.7185) saved to: correlation_analysis/scatter_PT08.S1(CO)_NOx(GT).png
* Scatter plot for NOx(GT) vs PT08.S1(CO) (r = 0.7185) saved to: correlation_analysis/scatter_NOx(GT)_PT08.S1(CO).png
* Scatter plot for PT08.S2(NMHC) vs NOx(GT) (r = 0.7099) saved to: correlation_analysis/scatter_PT08.S2(NMHC)_NOx(GT).png
* Scatter plot for NOx(GT) vs PT08.S2(NMHC) (r = 0.7099) saved to: correlation_analysis/scatter_NOx(GT)_PT08.S2(NMHC).png
* Scatter plot for C6H6(GT) vs NOx(GT) (r = 0.7071) saved to: correlation_analysis/scatter_C6H6(GT)_NOx(GT).png
* Scatter plot for NOx(GT) vs C6H6(GT) (r = 0.7071) saved to: correlation_analysis/scatter_NOx(GT)_C6H6(GT).png

## Pollutant and Environmental Factor Correlations
A correlation analysis between pollutants and environmental factors has been performed to understand how environmental conditions affect pollution levels.
* Pollutant-Environment correlation heatmap saved to: correlation_analysis/pollutant_env_correlation.png

## Sensor Performance Analysis
Correlation between ground truth measurements and corresponding sensor readings:
* CO(GT) and PT08.S1(CO): r = 0.8802
* NOx(GT) and PT08.S3(NOx): r = -0.7519
* NO2(GT) and PT08.S4(NO2): r = 0.0985

* Sensor correlation scatter plots saved to correlation_analysis directory

## Summary of Correlation Analysis Findings
1. The strongest correlations in the dataset are between:
   * C6H6(GT) and PT08.S2(NMHC) (r = 0.9880)
   * PT08.S2(NMHC) and C6H6(GT) (r = 0.9880)
   * CO(GT) and C6H6(GT) (r = 0.9039)

2. Regarding pollutant and environmental factors:
   * NO2(GT) and AH: r = -0.3361

3. Sensor performance analysis shows:
   * PT08.S1(CO) shows strong correlation (r = 0.8802) with CO(GT)
   * PT08.S3(NOx) shows weak correlation (r = -0.7519) with NOx(GT)
   * PT08.S4(NO2) shows weak correlation (r = 0.0985) with NO2(GT)
