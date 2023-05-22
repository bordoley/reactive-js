/// <reference types="./Enumerable.toObservable.d.ts" />

import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { pipe } from "../../functions.js";
import Enumerable_observeWith from "./Enumerable.observeWith.js";
const Enumerable_toObservable = ((options) => (enumerable) => (options?.delay ?? 0 > 0)
    ? Runnable_create((observer) => pipe(enumerable, Enumerable_observeWith(observer, options)))
    : enumerable);
export default Enumerable_toObservable;
