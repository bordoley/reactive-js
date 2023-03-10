import { floor, max } from "../../__internal__/math.js";

export const getDelay = (options: { delay?: number } = {}): number =>
  floor(max(options.delay ?? 0, 0));
