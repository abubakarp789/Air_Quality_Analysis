# Clustering Analysis Report

Clustering analysis performed using 100.0% of the data.

### Objective
The objective of clustering analysis is to identify distinct groups or patterns in the air quality data based on pollutant concentrations and environmental factors.

### Feature Selection
* Features for Clustering: `['CO(GT)', 'NOx(GT)', 'NO2(GT)', 'C6H6(GT)', 'T', 'RH', 'AH']`

### Determining Optimal Number of Clusters
* Elbow method and Silhouette score plots saved to: modelling_analysis_results\clustering_k_selection.png
Selected optimal k = 4 (default, user should verify from plots).

### K-Means Clustering Results (k=4)
Cluster distribution:
|   Cluster |   count |
|----------:|--------:|
|         0 |    2375 |
|         1 |    1975 |
|         2 |    2230 |
|         3 |    2777 |

* Cluster pairplot saved to: modelling_analysis_results\clustering_pairplot.png

**Cluster Centroids (Mean Values):**
|   Cluster |   CO(GT) |   NOx(GT) |   NO2(GT) |   C6H6(GT) |        T |      RH |       AH |
|----------:|---------:|----------:|----------:|-----------:|---------:|--------:|---------:|
|         0 |  2.01298 |   168.471 |   104.069 |   11.1217  | 28.7079  | 31.2204 | 1.18138  |
|         1 |  3.99792 |   478.904 |   155.83  |   19.8814  | 16.2806  | 54.5483 | 1.02137  |
|         2 |  1.5356  |   216.308 |   122.754 |    6.06887 |  9.42248 | 49.193  | 0.579885 |
|         3 |  1.12738 |   118.892 |    72.726 |    5.16705 | 17.9121  | 59.7013 | 1.22564  |

* Cluster centroids heatmap saved to: modelling_analysis_results\clustering_centroids_heatmap.png

### Clustering Summary
K-Means clustering with k=4 was performed. The clusters represent different typical air quality and environmental conditions. Detailed interpretation of centroids helps understand these profiles.

