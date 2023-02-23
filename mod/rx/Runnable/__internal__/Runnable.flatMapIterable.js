/// <reference types="./Runnable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnable from "../../../containers/Iterable/__internal__/Iterable.toRunnable.js";
import Runnable_concatMap from "./Runnable.concatMap.js";
const Runnable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(Runnable_concatMap, Iterable_toRunnable);
export default Runnable_flatMapIterable;
