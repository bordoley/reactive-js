import { MAX_SAFE_INTEGER } from "./constants.js";

export const { abs, floor, max, min, random } = Math;

export const clamp = (min: number, v: number, max: number): number =>
  v > max ? max : v < min ? min : v;

export const clampPositiveNonZeroInteger = (v: number) =>
  floor(clamp(1, v, MAX_SAFE_INTEGER));

export const clampPositiveInteger = (v: number) =>
  floor(clamp(0, v, MAX_SAFE_INTEGER));
