# Microbenchmark Results

Run on a Macbook Pro(2017) 2.9 GHz Intel Core i7, running MacOS v10.14.6 and node.js v13.1.0.

```
$ NODE_ENV=production node ./packages/perf/dist/index.js
filter -> map -> fusion 1000000 integers
-----------------------------------------------
reactive-js   39.42 op/s ±  1.00%   (53 samples)
rx-js        22.43 op/s ±  1.61%   (41 samples)
callbags     25.31 op/s ±  0.84%   (46 samples)
-----------------------------------------------
filter -> map -> reduce 1000000 integers
-----------------------------------------------
reactive-js   49.42 op/s ±  1.94%   (64 samples)
rx-js        30.91 op/s ±  0.72%   (55 samples)
callbags     35.22 op/s ±  1.01%   (62 samples)
-----------------------------------------------
merge 1000 x 1000 streams
-----------------------------------------------
reactive-js   62.33 op/s ±  0.84%   (65 samples)
rx-js        32.48 op/s ±  0.63%   (57 samples)
callbags     40.63 op/s ±  2.17%   (54 samples)
-----------------------------------------------
scan -> scan 1000000 integers
-----------------------------------------------
reactive-js   27.93 op/s ±  0.78%   (50 samples)
rx-js        12.37 op/s ±  1.03%   (35 samples)
callbags     29.53 op/s ±  1.05%   (52 samples)
-----------------------------------------------
```
