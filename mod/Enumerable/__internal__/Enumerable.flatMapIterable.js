/// <reference types="./Enumerable.flatMapIterable.d.ts" />

import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import { compose } from "../../functions.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";
const Enumerable_flatMapIterable = (selector) => Enumerable_concatMap(compose(selector, Iterable_toRunnable()));
export default Enumerable_flatMapIterable;
