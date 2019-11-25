# Microbenchmark Results

Run on a Macbook Pro(2017) 2.9 GHz Intel Core i7, running MacOS v10.14.6 and node.js v13.1.0.

```
$ NODE_ENV=production node ./packages/perf/dist/index.js
filter -> map -> fusion 1000000 integers
-----------------------------------------------
reactive-js   61.79 op/s ±  0.97%   (64 samples)
rx-js        20.13 op/s ±  2.75%   (38 samples)
callbags     24.26 op/s ±  1.88%   (44 samples)
-----------------------------------------------
filter -> map -> reduce 1000000 integers
-----------------------------------------------
reactive-js   84.77 op/s ±  0.86%   (73 samples)
rx-js        28.11 op/s ±  0.85%   (50 samples)
callbags     33.87 op/s ±  1.10%   (59 samples)
-----------------------------------------------
merge 1000 x 1000 streams
-----------------------------------------------
reactive-js   84.60 op/s ±  1.39%   (72 samples)
rx-js        30.14 op/s ±  1.09%   (54 samples)
callbags     37.82 op/s ±  2.10%   (51 samples)
-----------------------------------------------
scan -> scan 1000000 integers
-----------------------------------------------
reactive-js   45.06 op/s ±  0.74%   (59 samples)
rx-js        12.17 op/s ±  1.31%   (35 samples)
callbags     28.19 op/s ±  1.28%   (51 samples)
-----------------------------------------------
combine(add3) -> filter 500000 x 3 integers
-----------------------------------------------
reactive-js   20.38 op/s ±  2.55%   (38 samples)
rx-js        13.01 op/s ±  2.83%   (36 samples)
callbags     19.86 op/s ±  0.97%   (37 samples)
-----------------------------------------------
✨  Done in 84.86s.
```
