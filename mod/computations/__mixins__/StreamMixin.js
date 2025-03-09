/// <reference types="./StreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDispatcherMixin from "../../utils/__mixins__/DelegatingDispatcherMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import * as Observable from "../Observable.js";
import * as SingleUseObservable from "../__internal__/SingleUseObservable.js";
import { SingleUseObservableLike_observer } from "../__internal__/SingleUseObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin, DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function Stream(instance, op, scheduler, options) {
    const singleUseObservable = SingleUseObservable.create();
    const delegate = pipe(singleUseObservable, op, Observable.multicast(scheduler, options));
    const dispatcher = pipe(singleUseObservable[SingleUseObservableLike_observer], Disposable.add(delegate));
    init(DelegatingDisposableMixin, instance, dispatcher);
    init(DelegatingDispatcherMixin(), instance, dispatcher);
    init(DelegatingMulticastObservableMixin(), instance, delegate);
    return instance;
})))();
export default StreamMixin;
