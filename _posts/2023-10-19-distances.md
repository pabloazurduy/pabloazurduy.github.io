---
title: Matching and Some Efficient Search Algorithms
date: 2023-10-19 21:00:00 +/-0800
categories: [Machine Learning, Search]
tags: [causal_inference, search, ml, matching, notes]     # TAG names should always be lowercase
img_path: /assets/img/posts/2023-01-12/
comments: true
math: true
---
## Introduction 

The [matching methodology][1] is a well-known and widely used technique in [observational studies][13]. When implementing this methodology via ["approximated matching"][2] or ["nearest neighborhood matching"][3], finding the closest match between two sets of data becomes crucial.

In this context, efficient algorithms for exact matching are crucial for processing large datasets. Estimating all distances between all points can be increasingly time-consuming $n^{2}$, especially when dealing with large datasets. 

Fortunately, there are more efficient ways of doing this. To speed up nearest neighbor search, we can use data structures called [KD-Trees][4] and [Ball-Trees][5]. These structures allow us to quickly find the closest point(s) to a query point, without having to compute the distance to every point in the dataset.

##  KD-Tree and Ball-Tree

[KD-Tree][4] and [Ball-Tree][5] are data structures used for nearest neighbor search. KD-Tree partitions the dataset into smaller regions or hyperplanes, while Ball-Tree partitions the dataset into smaller regions or nested hyperspheres. These structures allow us to quickly find the closest point(s) to a query point, without having to compute the distance to every point in the dataset.

Depending on the implementation, we usually use find these methods: 

1. find the k-closest neighbors of a query-point [`sklearn.neighbors.KDTree.query`][6]
2. finding all the neighbors in a $R$ radio from a query-point [`sklearn.neighbors.KDTree.query_radius`][7]

You have similar methods on both [`sklearn.KDTree`][8] and in [`sklearn.BallTree`][9]. Including [`scipy` implementations][10] 

## Implementation 

To test this methods we will use `sklearn.BallTree` and `scipy.cKDTree` and compare their speeds. we generate a random dataset with two sets of points and then we will find the nearest nehibor from one set to the other 

```python
# this script compares two tree structures on the search of the k-closest neighboors, a very traditional problem on approximated matching 

import numpy as np
from scipy.spatial import cKDTree
from sklearn.neighbors import BallTree
import time

# Generate random points for users_1 (7 million points)
users_1 = np.random.uniform(low=-1, high=1, size=(7_000_000, 2))  
users_1[:, 1] = np.random.uniform(low=-2, high=2, size=7_000_000)  

# Generate random points for users_2 (10,000 points)
users_2 = np.random.uniform(low=-1, high=1, size=(10_000, 2))  
users_2[:, 1] = np.random.uniform(low=-2, high=2, size=10_000)  


# Measure time taken by BallTree
start_time = time.time()
tree = BallTree(users_1, leaf_size=15, metric='haversine')
indices_balltree = tree.query(users_2, k=1, return_distance=False)
end_time = time.time()
balltree_time = end_time - start_time
print(f"BallTree took {balltree_time} seconds")

# Measure time taken by cKDTree
start_time = time.time()
tree = cKDTree(users_1)
indices_ckdtree = tree.query(users_2, k=1)
end_time = time.time()
ckdtree_time = end_time - start_time
print(f"cKDTree took {ckdtree_time} seconds")

# Compare the results
print(f"Time difference: {abs(balltree_time - ckdtree_time)} seconds")
```

this outputs (Apple M1 pro)

    BallTree took 10.020148992538452 seconds
    cKDTree took 3.3549211025238037 seconds
    Time difference: 6.665227890014648 seconds


## Conclusion

In summary, [KD-Trees][4] and [Ball-Trees][5] are powerful data structures that can be used to speed up nearest neighbor search. These structures allow us to quickly find the closest point(s) to a query point, without having to compute the distance to every point in the dataset. Efficient algorithms like this are crucial when we do [approximate-matching][2], [bias correction][11], and even when doing [synthetic control][12].  

[1]:<https://mixtape.scunning.com/05-matching_and_subclassification#exact-matching>
[2]: <https://mixtape.scunning.com/05-matching_and_subclassification#approximate-matching>
[3]: <https://mixtape.scunning.com/05-matching_and_subclassification#nearest-neighbor-covariate-matching>
[4]: <https://en.wikipedia.org/wiki/K-d_tree>
[5]: <https://en.wikipedia.org/wiki/Ball_tree>
[6]: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree.query>
[7]: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree.query_radius>
[8]:<https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree>
[9]:<https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree>
[10]:<https://docs.scipy.org/doc/scipy/reference/spatial.html#nearest-neighbor-queries>
[11]:<https://mixtape.scunning.com/05-matching_and_subclassification#5-3-2-bias-correction>
[12]:<https://pabloazurduy.github.io/posts/synthetic_control/>
[13]:<https://en.wikipedia.org/wiki/Observational_study>