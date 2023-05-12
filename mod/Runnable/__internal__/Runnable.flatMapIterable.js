/// <reference types="./Runnable.flatMapIterable.d.ts" />

import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import { compose } from "../../functions.js";
import Runnable_concatMap from "./Runnable.concatMap.js";
const Runnable_flatMapIterable = (selector) => Runnable_concatMap(compose(selector, Iterable_toRunnable()));
export default Runnable_flatMapIterable;
