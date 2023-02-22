/// <reference types="./Runnable.concatAll.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { pipe, pipeLazy } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Sink_createWithDelegate from "../../Sink/__internal__/Sink.createWithDelegate.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_concatAll = 
/*@__PURE__*/ (() => pipeLazy(createInstanceFactory(mix(include(Disposable_delegatingMixin()), function RunnableConcatAll(instance, delegate) {
    init(Disposable_delegatingMixin(), instance, delegate);
    return instance;
}, {}, {
    [SinkLike_notify](next) {
        const { [DelegatingLike_delegate]: delegate } = this;
        pipe(delegate, Sink_createWithDelegate, Disposable_addTo(this), Sink_sourceFrom(next), Disposable_dispose());
    },
})), Runnable_lift))();
export default Runnable_concatAll;
