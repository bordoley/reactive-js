import { pipe } from "../../functions.js";
import { fromArray } from "./fromArray.js";
import { flatten } from "./flatten.js";
export function concat(...observables) {
    return pipe(observables, fromArray, flatten());
}
