/// <reference types="./Sink.create.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
const Sink_create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin), function CreateSink(instance) {
    init(Disposable_mixin, instance);
    return instance;
}, {}, {
    [SinkLike_notify](_) { },
})))();
export default Sink_create;
