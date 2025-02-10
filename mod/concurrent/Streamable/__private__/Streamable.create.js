/// <reference types="./Streamable.create.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import * as SingleUseObservable from "../../__internal__/SingleUseObservable.js";
import { SingleUseObservableLike_observer } from "../../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const Stream_create = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function StreamMixin(instance, op, scheduler, multicastOptions) {
    const singleUseObservable = SingleUseObservable.create();
    const delegate = pipe(singleUseObservable, op, Observable.multicast(scheduler, multicastOptions));
    init(DelegatingDispatcherMixin(), instance, singleUseObservable[SingleUseObservableLike_observer]);
    init(DelegatingMulticastObservableMixin(), instance, delegate);
    pipe(delegate, Disposable.addTo(instance));
    return instance;
}))();
const Streamable_create = (op) => ({
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
});
export default Streamable_create;
