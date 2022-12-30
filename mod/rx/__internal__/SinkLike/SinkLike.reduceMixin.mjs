/// <reference types="./SinkLike.reduceMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { dispose, addTo, onComplete } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const reduceMixin = (fromArray) => {
    const ReduceSink_private_reducer = Symbol("ReduceSink_private_reducer");
    const ReduceSink_private_acc = Symbol("ReduceSink_private_acc");
    return mix(include(disposableMixin), function ReduceSink(instance, delegate, reducer, initialValue) {
        init(disposableMixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ReduceSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceSink_private_acc] = acc;
        }
        catch (cause) {
            pipe(instance, dispose({ cause }));
        }
        pipe(instance, addTo(delegate), onComplete(() => {
            pipe([instance[ReduceSink_private_acc]], fromArray, sinkInto(delegate));
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

export { reduceMixin as default };
