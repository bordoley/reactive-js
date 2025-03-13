/// <reference types="./StreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";
import * as Observable from "../Observable.js";
import * as SingleUseObservable from "../__internal__/SingleUseObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin, DelegatingQueueableMixin(), DelegatingMulticastObservableMixin()), function Stream(op, scheduler, options) {
    const queue = SingleUseObservable.create(options);
    const delegate = pipe(queue, op, Observable.multicast(scheduler, options), Disposable.addTo(queue));
    init(DelegatingDisposableMixin, this, queue);
    init(DelegatingQueueableMixin(), this, queue);
    init(DelegatingMulticastObservableMixin(), this, delegate);
    return this;
})))();
export default StreamMixin;
