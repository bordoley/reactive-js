/// <reference types="./Sink.reduceMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, error, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';

const Sink_reduceMixin = (fromArray) => {
    const ReduceSinkMixin_reducer = Symbol("ReduceSinkMixin_reducer");
    const ReduceSinkMixin_acc = Symbol("ReduceSinkMixin_acc");
    return mix(include(Disposable_mixin), function ReduceSinkMixin(instance, delegate, reducer, initialValue) {
        init(Disposable_mixin, instance);
        instance[ReduceSinkMixin_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceSinkMixin_acc] = acc;
        }
        catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
        }
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe([instance[ReduceSinkMixin_acc]], fromArray, ReactiveContainer_sinkInto(delegate));
        }));
        return instance;
    }, props({
        [ReduceSinkMixin_reducer]: none,
        [ReduceSinkMixin_acc]: none,
    }), {
        [SinkLike_notify](next) {
            const nextAcc = this[ReduceSinkMixin_reducer](this[ReduceSinkMixin_acc], next);
            this[ReduceSinkMixin_acc] = nextAcc;
        },
    });
};

export { Sink_reduceMixin as default };
