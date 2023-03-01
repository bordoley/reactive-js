/// <reference types="./Enumerable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnable from "../../../containers/Iterable/__internal__/Iterable.toRunnable.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";
const Enumerable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(Enumerable_concatMap, Iterable_toRunnable);
export default Enumerable_flatMapIterable;
