/// <reference types="./Runnable.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipeLazy, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegateSink$create from '../DelegatingSink/DelegatingSink.create.mjs';
import DelegateSink$mixin from '../DelegatingSink/DelegatingSink.mixin.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Runnable$lift from './Runnable.lift.mjs';

const Runnable$concatAll = 
/*@__PURE__*/ (() => {
    const typedDelegatingSinkMixin = DelegateSink$mixin();
    return pipeLazy(createInstanceFactory(mix(include(typedDelegatingSinkMixin), function RunnableConcatAll(instance, delegate) {
        init(typedDelegatingSinkMixin, instance, delegate);
        pipe(instance, Disposable$bindTo(delegate));
        return instance;
    }, {}, {
        [SinkLike_notify](next) {
            const { [DelegatingSinkLike_delegate]: delegate } = this;
            pipe(DelegateSink$create(delegate), Disposable$addTo(this), Sink$sourceFrom(next), Disposable$dispose());
        },
    })), Runnable$lift);
})();

export { Runnable$concatAll as default };
