/// <reference types="./AsyncEnumerator.lift.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike_scheduler } from "../../../streaming.js";
import { BufferLike_capacity } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const AsyncEnumerator_lift = /*@__PURE__*/ (() => {
    const createLiftedAsyncEnumerator = createInstanceFactory(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin(), Disposable_delegatingMixin), function AsyncEnumerator(instance, delegate, operator) {
        const observable = pipe(delegate, operator, Observable_multicast(delegate[StreamLike_scheduler], {
            capacity: delegate[BufferLike_capacity],
        }), Disposable_addIgnoringChildErrors(delegate));
        init(Disposable_delegatingMixin, instance, observable);
        init(MulticastObservable_delegatingMixin(), instance, observable);
        init(Dispatcher_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[StreamLike_scheduler] = delegate[StreamLike_scheduler];
        return instance;
    }, props({
        [StreamLike_scheduler]: none,
    }), {}));
    return (op) => (stream) => createLiftedAsyncEnumerator(stream, op);
})();
export default AsyncEnumerator_lift;
