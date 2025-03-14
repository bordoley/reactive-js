/// <reference types="./DelegatingNonCompletingSink.d.ts" />

import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import AbstractDelegatingDisposableSink from "./AbstractDelegatingDisposableSink.js";
export const DelegatingNonCompletingSink_inner = Symbol("DelegatingNonCompletingSink_inner");
class DelegatingNonCompletingSink extends AbstractDelegatingDisposableSink {
    [DelegatingNonCompletingSink_inner];
    constructor(inner) {
        super(inner);
        this[DelegatingNonCompletingSink_inner] = inner;
    }
    get [SinkLike_isCompleted]() {
        return this[DelegatingNonCompletingSink_inner][SinkLike_isCompleted];
    }
    [EventListenerLike_notify](next) {
        this[DelegatingNonCompletingSink_inner][EventListenerLike_notify](next);
    }
    [SinkLike_complete]() {
        //ignore;
    }
}
export default DelegatingNonCompletingSink;
