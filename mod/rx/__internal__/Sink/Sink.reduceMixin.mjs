/// <reference types="./Sink.reduceMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, error, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink$reduceMixin = (fromArray) => {
    const ReduceSink_private_reducer = Symbol("ReduceSink_private_reducer");
    const ReduceSink_private_acc = Symbol("ReduceSink_private_acc");
    return mix(include(Disposable$mixin), function ReduceSink(instance, delegate, reducer, initialValue) {
        init(Disposable$mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ReduceSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceSink_private_acc] = acc;
        }
        catch (e) {
            pipe(instance, Disposable$dispose(error(e)));
        }
        pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
            pipe([instance[ReduceSink_private_acc]], fromArray, ReactiveContainer$sinkInto(delegate));
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ReduceSink_private_reducer]: none,
        [ReduceSink_private_acc]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ReduceSink_private_reducer](this[ReduceSink_private_acc], next);
            this[ReduceSink_private_acc] = nextAcc;
        },
    });
};

export { Sink$reduceMixin as default };
