/// <reference types="./DelegatingNonCompletingSink.d.ts" />

import { SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../../utils.js";
export const DelegatingNonCompletingSink_inner = Symbol("DelegatingNonCompletingSink_inner");
class DelegatingNonCompletingSink {
    [DelegatingNonCompletingSink_inner];
    constructor(inner) {
        this[DelegatingNonCompletingSink_inner] = inner;
    }
    get [SinkLike_isCompleted]() {
        return this[DelegatingNonCompletingSink_inner][SinkLike_isCompleted];
    }
    [SinkLike_next](next) {
        this[DelegatingNonCompletingSink_inner][SinkLike_next](next);
    }
    [SinkLike_complete]() {
        //ignore;
    }
}
export default DelegatingNonCompletingSink;
