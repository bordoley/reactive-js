/// <reference types="./SinkLike.reduceMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, error, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import ReactiveContainerLike__sinkInto from '../ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const SinkLike__reduceMixin = (fromArray) => {
    const ReduceSink_private_reducer = Symbol("ReduceSink_private_reducer");
    const ReduceSink_private_acc = Symbol("ReduceSink_private_acc");
    return mix(include(DisposableLike__mixin), function ReduceSink(instance, delegate, reducer, initialValue) {
        init(DisposableLike__mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ReduceSink_private_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceSink_private_acc] = acc;
        }
        catch (e) {
            pipe(instance, DisposableLike__dispose(error(e)));
        }
        pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
            pipe([instance[ReduceSink_private_acc]], fromArray, ReactiveContainerLike__sinkInto(delegate));
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

export { SinkLike__reduceMixin as default };
