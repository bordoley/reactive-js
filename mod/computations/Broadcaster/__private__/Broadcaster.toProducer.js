/// <reference types="./Broadcaster.toProducer.d.ts" />

import { bindMethod, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
const Broadcaster_toProducer = 
/*@__PURE__*/ returns((src) => DeferredEventSource.create((consumer) => {
    pipe(src, Broadcaster_addEventHandler(bindMethod(consumer, EventListenerLike_notify)), DisposableContainer.onComplete(bindMethod(consumer, SinkLike_complete)), Disposable.addTo(consumer));
}));
export default Broadcaster_toProducer;
