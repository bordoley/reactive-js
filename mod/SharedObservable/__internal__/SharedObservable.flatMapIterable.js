/// <reference types="./SharedObservable.flatMapIterable.d.ts" />

import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import { compose } from "../../functions.js";
import SharedObservable_concatMap from "./SharedObservable.concatMap.js";
const SharedObservable_flatMapIterable = (selector) => SharedObservable_concatMap(compose(selector, Iterable_toRunnable()));
export default SharedObservable_flatMapIterable;
