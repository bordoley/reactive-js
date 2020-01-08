# Microbenchmark Results

Run on a Macbook Pro(2017) 2.9 GHz Intel Core i7, running MacOS v10.14.6 and node.js v13.1.0.

```
yarn run v1.21.1
$ NODE_ENV=production node ./packages/perf/dist/index.js
filter -> map -> fusion 1000000 integers
-----------------------------------------------
reactive-js   58.73 op/s ±  4.01%   (60 samples)
rx-js        20.22 op/s ±  2.32%   (38 samples)
callbags     22.16 op/s ±  0.64%   (41 samples)
-----------------------------------------------
filter -> map -> reduce 1000000 integers
-----------------------------------------------
reactive-js   93.95 op/s ±  0.56%   (79 samples)
rx-js        38.79 op/s ±  0.53%   (57 samples)
callbags     31.95 op/s ±  0.61%   (56 samples)
-----------------------------------------------
merge 1000 x 1000 streams
-----------------------------------------------
reactive-js  123.77 op/s ±  0.63%   (79 samples)
rx-js        55.86 op/s ±  0.80%   (72 samples)
callbags     38.35 op/s ±  0.56%   (51 samples)
-----------------------------------------------
scan -> scan 1000000 integers
-----------------------------------------------
reactive-js   62.30 op/s ±  0.32%   (65 samples)
rx-js        14.62 op/s ±  0.44%   (40 samples)
callbags     26.79 op/s ±  0.76%   (48 samples)
-----------------------------------------------
combine(add3) -> filter 500000 x 3 integers
-----------------------------------------------
reactive-js   48.81 op/s ±  0.49%   (64 samples)
rx-js        22.38 op/s ±  0.81%   (41 samples)
callbags     25.22 op/s ±  0.40%   (45 samples)
-----------------------------------------------
✨  Done in 84.26s.
```
