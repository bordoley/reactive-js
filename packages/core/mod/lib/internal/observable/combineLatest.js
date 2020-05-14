import { latest } from "./latest.js";
export function combineLatest(...observables) {
    return latest(observables, 1);
}
export const combineLatestWith = (snd) => fst => combineLatest(fst, snd);
