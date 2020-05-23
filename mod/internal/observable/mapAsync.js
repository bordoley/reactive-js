import { fromPromise } from "./fromPromise.js";
import { switchMap } from "./switchAll.js";
export const mapAsync = (f) => switchMap(a => fromPromise(() => f(a)));
