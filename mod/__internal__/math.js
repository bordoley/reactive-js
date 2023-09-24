/// <reference types="./math.d.ts" />

import { MAX_SAFE_INTEGER } from "./constants.js";
export const { abs, floor, max, min, random } = Math;
export const clamp = (min, v, max) => v > max ? max : v < min ? min : v;
export const clampPositiveNonZeroInteger = (v) => floor(clamp(1, v, MAX_SAFE_INTEGER));
export const clampPositiveInteger = (v) => floor(clamp(0, v, MAX_SAFE_INTEGER));
