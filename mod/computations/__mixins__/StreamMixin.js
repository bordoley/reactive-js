/// <reference types="./StreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";
import * as Observable from "../Observable.js";
import * as QueueableObservable from "../__internal__/QueueableObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingQueueableMixin(), DelegatingMulticastObservableMixin()), function Stream(op, scheduler, options) {
    const queue = QueueableObservable.create(options);
    const delegate = pipe(queue, op, Observable.multicast(scheduler, options), Disposable.addTo(queue));
    init(DelegatingQueueableMixin(), this, queue);
    init(DelegatingMulticastObservableMixin(), this, delegate);
    return this;
})))();
export default StreamMixin;
