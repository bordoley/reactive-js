import { latest } from "./latest.js";
export function zipLatest(observables, selector) {
    return latest(observables, 2, selector);
}
export const zipLatestWith = (snd, selector) => fst => zipLatest([fst, snd], selector);
