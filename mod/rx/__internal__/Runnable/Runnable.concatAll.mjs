/// <reference types="./Runnable.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { pipeLazy, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegateSink_create from '../DelegatingSink/DelegatingSink.create.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_concatAll = 
/*@__PURE__*/ (() => pipeLazy(createInstanceFactory(mix(include(Disposable_delegatingMixin()), function RunnableConcatAll(instance, delegate) {
    init(Disposable_delegatingMixin(), instance, delegate);
    return instance;
}, {}, {
    [SinkLike_notify](next) {
        const { [DelegatingLike_delegate]: delegate } = this;
        pipe(DelegateSink_create(delegate), Disposable_addTo(this), Sink_sourceFrom(next), Disposable_dispose());
    },
})), Runnable_lift))();

export { Runnable_concatAll as default };
