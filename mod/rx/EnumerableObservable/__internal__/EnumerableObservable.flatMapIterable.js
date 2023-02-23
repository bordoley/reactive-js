/// <reference types="./EnumerableObservable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toEnumerableObservable from "../../../containers/Iterable/__internal__/Iterable.toEnumerableObservable.js";
import EnumerableObservable_concatMap from "./EnumerableObservable.concatMap.js";
const EnumerableObservable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(EnumerableObservable_concatMap, Iterable_toEnumerableObservable);
export default EnumerableObservable_flatMapIterable;
