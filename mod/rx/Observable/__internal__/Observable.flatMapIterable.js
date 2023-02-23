/// <reference types="./Observable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";
const Observable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(Observable_concatAll, Iterable_toRunnableObservable, Observable_map);
export default Observable_flatMapIterable;
