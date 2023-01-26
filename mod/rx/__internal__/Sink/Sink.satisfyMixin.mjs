/// <reference types="./Sink.satisfyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink$notify from './Sink.notify.mjs';

const Sink$satisfyMixin = (fromArray, defaultResult) => {
    const SatisfySink_private_predicate = Symbol("SatisfySink_private_predicate");
    return mix(include(Disposable$mixin), function SatisfySink(instance, delegate, predicate) {
        init(Disposable$mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[SatisfySink_private_predicate] = predicate;
        pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
            if (!Disposable$isDisposed(delegate)) {
                pipe([defaultResult], fromArray, ReactiveContainer$sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [SatisfySink_private_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[SatisfySink_private_predicate](next)) {
                pipe(this[DelegatingSinkLike_delegate], Sink$notify(!defaultResult), Disposable$dispose());
            }
        },
    });
};

export { Sink$satisfyMixin as default };
