/// <reference types="./AbstractSink.d.ts" />

import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import AbstractDelegatingDisposableSink from "./AbstractDelegatingDisposableSink.js";
export const AbstractSink_delegate = Symbol("AbstractSink_delegate");
class AbstractSink extends AbstractDelegatingDisposableSink {
    [SinkLike_isCompleted] = false;
    [AbstractSink_delegate];
    constructor(sink) {
        super(sink);
        this[AbstractSink_delegate] = sink;
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isCompleted]) {
            this[SinkLike_isCompleted] = true;
            this[AbstractSink_delegate][SinkLike_complete]();
        }
    }
}
export default AbstractSink;
