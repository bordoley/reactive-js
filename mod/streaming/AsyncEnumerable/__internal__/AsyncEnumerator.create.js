/// <reference types="./AsyncEnumerator.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns } from "../../../functions.js";
import { DispatcherLike_scheduler } from "../../../rx.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { QueueableLike_capacity } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
const AsyncEnumerator_create = /*@__PURE__*/ (() => pipe(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin()), function AsyncEnumeratorDelegatingMixin(instance, delegate, operator) {
    const observable = pipe(delegate, operator, Observable_multicast(delegate[DispatcherLike_scheduler], {
        capacity: delegate[QueueableLike_capacity],
    }), Disposable_add(delegate));
    init(MulticastObservable_delegatingMixin(), instance, observable);
    init(Dispatcher_delegatingMixin(), instance, delegate);
    return instance;
}, props({}), {}), createInstanceFactory, returns))();
export default AsyncEnumerator_create;
