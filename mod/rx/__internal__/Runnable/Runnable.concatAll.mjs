/// <reference types="./Runnable.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipeLazy, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegateSink_create from '../DelegatingSink/DelegatingSink.create.mjs';
import DelegateSink_mixin from '../DelegatingSink/DelegatingSink.mixin.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_concatAll = 
/*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = DelegateSink_mixin();
    return pipeLazy(createInstanceFactory(mix(include(typedDelegatingSinkMixin), function RunnableConcatAll(instance, delegate) {
        init(typedDelegatingSinkMixin, instance, delegate);
        pipe(instance, Disposable_bindTo(delegate));
        return instance;
    }, {}, {
        [SinkLike_notify](next) {
            const { [DelegatingSinkLike_delegate]: delegate } = this;
            pipe(DelegateSink_create(delegate), Disposable_addTo(this), Sink_sourceFrom(next), Disposable_dispose());
        },
    })), Runnable_lift);
})();

export { Runnable_concatAll as default };
