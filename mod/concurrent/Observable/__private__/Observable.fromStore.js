/// <reference types="./Observable.fromStore.d.ts" />

import { DispatcherLike_complete } from "../../../concurrent.js";
import { StoreLike_value } from "../../../events.js";
import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, pipe } from "../../../functions.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
const Observable_fromStore = () => (store) => Observable_createMulticast(observer => {
    observer[QueueableLike_enqueue](store[StoreLike_value]);
    pipe(store, EventSource.addEventHandler(bindMethod(observer, QueueableLike_enqueue)), Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable.addTo(observer));
});
export default Observable_fromStore;
