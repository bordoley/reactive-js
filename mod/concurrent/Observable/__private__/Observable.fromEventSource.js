/// <reference types="./Observable.fromEventSource.d.ts" />

import { DispatcherLike_complete } from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
const Observable_fromEventSource = () => (eventSource) => Observable_createMulticast(observer => {
    pipe(eventSource, EventSource.addEventHandler(bindMethod(observer, QueueableLike_enqueue)), DisposableContainer.onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable.addTo(observer));
});
export default Observable_fromEventSource;
