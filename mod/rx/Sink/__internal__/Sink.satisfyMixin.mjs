/// <reference types="./Sink.satisfyMixin.d.ts" />
import { mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Sink_notify from './Sink.notify.mjs';

const Sink_satisfyMixin = (fromReadonlyArray, defaultResult) => {
    const SatisfySinkMixin_predicate = Symbol("SatisfySinkMixin_predicate");
    return mix(include(Disposable_mixin, delegatingMixin()), function SatisfySinkMixin(instance, delegate, predicate) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        instance[SatisfySinkMixin_predicate] = predicate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            if (!Disposable_isDisposed(delegate)) {
                pipe([defaultResult], fromReadonlyArray, ReactiveContainer_sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        [SatisfySinkMixin_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[SatisfySinkMixin_predicate](next)) {
                pipe(this[DelegatingLike_delegate], Sink_notify(!defaultResult), Disposable_dispose());
            }
        },
    });
};

export { Sink_satisfyMixin as default };
