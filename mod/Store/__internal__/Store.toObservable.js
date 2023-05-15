/// <reference types="./Store.toObservable.d.ts" />

import EventSource_toObservable from "../../EventSource/__internal__/EventSource.toObservable.js";
import Observable_fromFactory from "../../Observable/__internal__/Observable.fromFactory.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import { pipe } from "../../functions.js";
import { StoreLike_value } from "../../types.js";
const Store_toObservable = () => (store) => pipe(() => store[StoreLike_value], Observable_fromFactory(), Observable_mergeWith(pipe(store, EventSource_toObservable())));
export default Store_toObservable;
