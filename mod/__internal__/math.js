/// <reference types="./math.d.ts" />

import { MAX_SAFE_INTEGER, Math } from "./constants.js";
export const abs = Math.abs;
export const floor = Math.floor;
export const max = Math.max;
export const min = Math.min;
export const random = Math.random;
export const clamp = (min, v, max) => v > max ? max : v < min ? min : v;
export const clampPositiveNonZeroInteger = (v) => floor(clamp(1, v, MAX_SAFE_INTEGER));
export const clampPositiveInteger = (v) => floor(clamp(0, v, MAX_SAFE_INTEGER));
