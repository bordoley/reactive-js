/// <reference types="./SinkLike.satisfyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import ReactiveContainerLike__sinkInto from '../ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import SinkLike__notify from './SinkLike.notify.mjs';

const SinkLike__satisfyMixin = (fromArray, defaultResult) => {
    const SatisfySink_private_predicate = Symbol("SatisfySink_private_predicate");
    return mix(include(DisposableLike__mixin), function SatisfySink(instance, delegate, predicate) {
        init(DisposableLike__mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[SatisfySink_private_predicate] = predicate;
        pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
            if (!DisposableLike__isDisposed(delegate)) {
                pipe([defaultResult], fromArray, ReactiveContainerLike__sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [SatisfySink_private_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[SatisfySink_private_predicate](next)) {
                pipe(this[DelegatingSinkLike_delegate], SinkLike__notify(!defaultResult), DisposableLike__dispose());
            }
        },
    });
};

export { SinkLike__satisfyMixin as default };
