/// <reference types="./StreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Observable from "../Observable.js";
import * as SingleUseObservable from "../__internal__/SingleUseObservable.js";
import { SingleUseObservableLike_observer } from "../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function Stream(instance, op, scheduler, options) {
    const singleUseObservable = SingleUseObservable.create();
    const delegate = pipe(singleUseObservable, op, Observable.multicast(scheduler, options));
    init(DelegatingDispatcherMixin(), instance, singleUseObservable[SingleUseObservableLike_observer]);
    init(DelegatingMulticastObservableMixin(), instance, delegate);
    pipe(delegate, Disposable.addTo(instance));
    return instance;
})))();
export default StreamMixin;
