/// <reference types="./Enumerable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../../containers/Iterable/__internal__/Iterable.toObservable.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";
const Enumerable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(Enumerable_concatMap, Iterable_toObservable);
export default Enumerable_flatMapIterable;
