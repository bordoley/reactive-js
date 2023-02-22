/// <reference types="./EnumerableObservable.toIterable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import EnumerableObservable_toEnumerable from "./EnumerableObservable.toEnumerable.js";
const EnumerableObservable_toIterable = 
/*@__PURE__*/ (() => returns(compose(EnumerableObservable_toEnumerable(), Enumerable_toIterable())))();
export default EnumerableObservable_toIterable;
