/// <reference types="./EventSource.create.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../../../computations.js";
import { error, none } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Publisher from "../../Publisher.js";
const EventSource_create = /*@__PURE__*/ (() => {
    const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");
    return mixInstanceFactory(include(DelegatingDisposableMixin), function CreateEventSource(instance, setup) {
        const delegate = (instance[CreateEventSource_delegate] =
            Publisher.create());
        init(DelegatingDisposableMixin, instance, delegate);
        try {
            setup(delegate);
        }
        catch (e) {
            delegate[DisposableLike_dispose](error(e));
        }
        return instance;
    }, props({
        [CreateEventSource_delegate]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_addEventListener](listener) {
            this[CreateEventSource_delegate][EventSourceLike_addEventListener](listener);
        },
    });
})();
export default EventSource_create;
