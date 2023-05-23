/// <reference types="./PauseableObservable.flatMapIterable.d.ts" />

import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import { compose } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
import PauseableObservable_map from "./PauseableObservable.map.js";
const PauseableObservable_mergeAll = /*@__PURE__*/ compose(Observer_createMergeAllObserverOperator, PauseableObservable_lift);
const PauseableObservable_concatAll = () => PauseableObservable_mergeAll({ concurrency: 1 });
const PauseableObservable_concatMap = (selector) => compose(PauseableObservable_map(selector), PauseableObservable_concatAll());
const PauseableObservable_flatMapIterable = ((selector) => PauseableObservable_concatMap(compose(selector, Iterable_toObservable())));
export default PauseableObservable_flatMapIterable;
