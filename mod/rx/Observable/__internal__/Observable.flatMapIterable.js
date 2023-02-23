/// <reference types="./Observable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import Observable_concatMap from "./Observable.concatMap.js";
const Observable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(Observable_concatMap, Iterable_toRunnableObservable);
export default Observable_flatMapIterable;
