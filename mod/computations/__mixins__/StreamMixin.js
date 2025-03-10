/// <reference types="./StreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDispatcherMixin from "../../utils/__mixins__/DelegatingDispatcherMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import * as Observable from "../Observable.js";
import * as SingleUseObservable from "../__internal__/SingleUseObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin, DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function Stream(op, scheduler, options) {
    const dispatcher = SingleUseObservable.create(options);
    const delegate = pipe(dispatcher, op, Observable.multicast(scheduler, options), Disposable.addTo(dispatcher));
    init(DelegatingDisposableMixin, this, dispatcher);
    init(DelegatingDispatcherMixin(), this, dispatcher);
    init(DelegatingMulticastObservableMixin(), this, delegate);
    return this;
})))();
export default StreamMixin;
