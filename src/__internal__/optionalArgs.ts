import { floor, max } from "../util/functions";

export const getDelay = (options: { delay?: number } = {}): number =>
  floor(max(options.delay ?? 0, 0));

export const hasDelay = (options: { delay?: number } = {}): boolean =>
  getDelay(options) > 0;
