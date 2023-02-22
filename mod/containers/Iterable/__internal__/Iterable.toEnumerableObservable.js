/// <reference types="./Iterable.toEnumerableObservable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toEnumerableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";
const Iterable_toEnumerableObservable = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toEnumerableObservable()));
export default Iterable_toEnumerableObservable;
