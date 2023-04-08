/// <reference types="./AsyncEnumerator.create.d.ts" />

import { createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate } from "../../../__internal__/symbols.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike_scheduler } from "../../../streaming.js";
import { BufferLike_capacity } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const AsyncEnumerator_create = /*@__PURE__*/ (() => pipe(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin(), Disposable_delegatingMixin, delegatingMixin()), function AsyncEnumerator(instance, delegate, operator) {
    const observable = pipe(delegate, operator, Observable_multicast(delegate[StreamLike_scheduler], {
        capacity: delegate[BufferLike_capacity],
    }), Disposable_addIgnoringChildErrors(delegate));
    init(Disposable_delegatingMixin, instance, observable);
    init(MulticastObservable_delegatingMixin(), instance, observable);
    init(Dispatcher_delegatingMixin(), instance, delegate);
    init(delegatingMixin(), instance, delegate);
    return instance;
}, props({}), {
    get [StreamLike_scheduler]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][StreamLike_scheduler];
    },
}), createInstanceFactory, returns))();
export default AsyncEnumerator_create;
