/// <reference types="./Store.toObservable.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import { StoreLike_value } from "../../../util.js";
import EventSource_toObservable from "../../EventSource/__internal__/EventSource.toObservable.js";
const Store_toObservable = () => (store) => pipe(store, EventSource_toObservable(), Observable_startWith(store[StoreLike_value]));
export default Store_toObservable;
