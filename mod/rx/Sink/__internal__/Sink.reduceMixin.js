/// <reference types="./Sink.reduceMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
const Sink_reduceMixin = (fromReadonlyArray) => {
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
            pipe([instance[ReduceSinkMixin_acc]], fromReadonlyArray, ReactiveContainer_sinkInto(delegate));
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
export default Sink_reduceMixin;
