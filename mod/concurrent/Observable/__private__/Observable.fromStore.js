/// <reference types="./Observable.fromStore.d.ts" />

import { StoreLike_value } from "../../../events.js";
import { pipe } from "../../../functions.js";
import Observable_fromEventSource from "./Observable.fromEventSource.js";
import Observable_fromFactory from "./Observable.fromFactory.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
const Observable_fromStore = () => (store) => pipe(() => store[StoreLike_value], Observable_fromFactory(), Observable_mergeWith(pipe(store, Observable_fromEventSource())));
export default Observable_fromStore;
