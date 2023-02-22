/// <reference types="./Sink.satisfyMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Sink_notify from "./Sink.notify.js";
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
export default Sink_satisfyMixin;
