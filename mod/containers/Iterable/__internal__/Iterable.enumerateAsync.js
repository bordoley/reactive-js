/// <reference types="./Iterable.enumerateAsync.d.ts" />

import { compose } from "../../../functions.js";
import Enumerable_enumerateAsync from "../../../rx/Enumerable/__internal__/Enumerable.enumerateAsync.js";
import Iterable_toObservable from "./Iterable.toObservable.js";
const Iterable_enumerateAsync = (scheduler, options) => compose(Iterable_toObservable(), Enumerable_enumerateAsync(scheduler, options));
export default Iterable_enumerateAsync;
