/// <reference types="./SinkLike.satisfyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { addTo, onComplete, isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const SinkLike__satisfyMixin = (fromArray, defaultResult) => {
    const SatisfySink_private_predicate = Symbol("SatisfySink_private_predicate");
    return mix(include(DisposableLike__mixin), function SatisfySink(instance, delegate, predicate) {
        init(DisposableLike__mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[SatisfySink_private_predicate] = predicate;
        pipe(instance, addTo(delegate), onComplete(() => {
            if (!isDisposed(delegate)) {
                pipe([defaultResult], fromArray, sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [SatisfySink_private_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[SatisfySink_private_predicate](next)) {
                pipe(this[DelegatingSinkLike_delegate], notify(!defaultResult), dispose());
            }
        },
    });
};

export { SinkLike__satisfyMixin as default };
