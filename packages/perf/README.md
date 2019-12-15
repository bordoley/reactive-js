# Microbenchmark Results

Run on a Macbook Pro(2017) 2.9 GHz Intel Core i7, running MacOS v10.14.6 and node.js v13.1.0.

```
$ NODE_ENV=production node ./packages/perf/dist/index.js
filter -> map -> fusion 1000000 integers
-----------------------------------------------
reactive-js   50.84 op/s ±  0.72%   (65 samples)
rx-js        18.70 op/s ±  1.11%   (50 samples)
callbags     20.84 op/s ±  1.05%   (38 samples)
-----------------------------------------------
filter -> map -> reduce 1000000 integers
-----------------------------------------------
reactive-js   71.77 op/s ±  0.83%   (73 samples)
rx-js        36.03 op/s ±  0.68%   (62 samples)
callbags     29.07 op/s ±  0.85%   (52 samples)
-----------------------------------------------
merge 1000 x 1000 streams
-----------------------------------------------
reactive-js   87.74 op/s ±  0.65%   (74 samples)
rx-js        51.81 op/s ±  0.82%   (66 samples)
callbags     35.37 op/s ±  0.33%   (61 samples)
-----------------------------------------------
scan -> scan 1000000 integers
-----------------------------------------------
reactive-js   51.53 op/s ±  0.33%   (66 samples)
rx-js        14.17 op/s ±  0.63%   (39 samples)
callbags     23.72 op/s ±  0.84%   (43 samples)
-----------------------------------------------
combine(add3) -> filter 500000 x 3 integers
-----------------------------------------------
reactive-js   24.86 op/s ±  1.29%   (45 samples)
rx-js         9.51 op/s ±  1.17%   (28 samples)
callbags     17.30 op/s ±  1.12%   (47 samples)
-----------------------------------------------
✨  Done in 84.29s.
```
