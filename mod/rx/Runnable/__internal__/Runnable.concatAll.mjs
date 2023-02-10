/// <reference types="./Runnable.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { pipeLazy, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Sink_createWithDelegate from '../../Sink/__internal__/Sink.createWithDelegate.mjs';
import Sink_sourceFrom from '../../Sink/__internal__/Sink.sourceFrom.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_concatAll = 
/*@__PURE__*/ (() => pipeLazy(createInstanceFactory(mix(include(Disposable_delegatingMixin()), function RunnableConcatAll(instance, delegate) {
    init(Disposable_delegatingMixin(), instance, delegate);
    return instance;
}, {}, {
    [SinkLike_notify](next) {
        const { [DelegatingLike_delegate]: delegate } = this;
        pipe(delegate, Sink_createWithDelegate, Disposable_addTo(this), Sink_sourceFrom(next), Disposable_dispose());
    },
})), Runnable_lift))();

export { Runnable_concatAll as default };
