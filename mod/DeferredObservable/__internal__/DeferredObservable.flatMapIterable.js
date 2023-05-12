/// <reference types="./DeferredObservable.flatMapIterable.d.ts" />

import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import { compose } from "../../functions.js";
import DeferredObservable_concatMap from "./DeferredObservable.concatMap.js";
const DeferredObservable_flatMapIterable = (selector) => DeferredObservable_concatMap(compose(selector, Iterable_toRunnable()));
export default DeferredObservable_flatMapIterable;
