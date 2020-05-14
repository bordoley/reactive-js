import { latest } from "./latest.js";
export function combineLatest(observables, selector) {
    return latest(observables, 1, selector);
}
export const combineLatestWith = (snd, selector) => fst => combineLatest([fst, snd], selector);
