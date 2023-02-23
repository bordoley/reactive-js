/// <reference types="./RunnableObservable.flatMapIterable.d.ts" />

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_concatAll from "./RunnableObservable.concatAll.js";
const RunnableObservable_flatMapIterable = 
/*@__PURE__*/ Container_flatMapIterable(RunnableObservable_concatAll, Iterable_toRunnableObservable, Observable_map);
export default RunnableObservable_flatMapIterable;
