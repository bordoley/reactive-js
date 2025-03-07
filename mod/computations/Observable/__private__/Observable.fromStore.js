/// <reference types="./Observable.fromStore.d.ts" />

import * as EventSource from "../../../computations/EventSource.js";
import { DispatcherLike_complete, StoreLike_value, } from "../../../computations.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
const Observable_fromStore = () => (store) => Observable_createMulticast(observer => {
    observer[QueueableLike_enqueue](store[StoreLike_value]);
    pipe(store, EventSource.addEventHandler(bindMethod(observer, QueueableLike_enqueue)), DisposableContainer.onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable.addTo(observer));
});
export default Observable_fromStore;
