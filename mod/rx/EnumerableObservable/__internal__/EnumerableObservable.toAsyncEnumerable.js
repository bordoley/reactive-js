/// <reference types="./EnumerableObservable.toAsyncEnumerable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import EnumerableObservable_toEnumerable from "./EnumerableObservable.toEnumerable.js";
const EnumerableObservable_toAsyncEnumerable = 
/*@__PURE__*/ (() => returns(compose(EnumerableObservable_toEnumerable(), Enumerable_toAsyncEnumerable())))();
export default EnumerableObservable_toAsyncEnumerable;
