import { pipe } from "../../functions.js";
import { flatten } from "./flatten.js";
import { fromArray } from "./fromArray.js";
export function concat(...observables) {
    return pipe(observables, fromArray, flatten());
}
