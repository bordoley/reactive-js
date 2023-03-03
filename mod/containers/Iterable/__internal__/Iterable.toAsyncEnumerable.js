/// <reference types="./Iterable.toAsyncEnumerable.d.ts" />

import { compose } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Iterable_toObservable from "./Iterable.toObservable.js";
const Iterable_toAsyncEnumerable = (options) => compose(Iterable_toObservable(), Enumerable_toAsyncEnumerable(options));
export default Iterable_toAsyncEnumerable;
