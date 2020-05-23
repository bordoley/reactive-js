import { latest } from "./latest.js";
export function zipLatest(...observables) {
    return latest(observables, 2);
}
export const zipLatestWith = (snd) => fst => zipLatest(fst, snd);
