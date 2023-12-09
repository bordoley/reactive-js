/// <reference types="./Subject.createRefCounted.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, SubjectLike_observerCount, } from "../../../concurrent.js";
import { EventListenerLike_isErrorSafe } from "../../../events.js";
import { pipe } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingReplayObservableMixin from "../../__mixins__/DelegatingReplayObservableMixin.js";
import Subject_create from "./Subject.create.js";
const Subject_createRefCounted = 
/*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(DelegatingDisposableMixin(), DelegatingReplayObservableMixin()), function RefCountedPublisher(instance, delegate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(DelegatingReplayObservableMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [SubjectLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingDisposableLike_delegate][SubjectLike_observerCount];
        },
        [EventListenerLike_isErrorSafe]: true,
        [SinkLike_notify](next) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
        [ObservableLike_observe](observer) {
            this[DelegatingDisposableLike_delegate][ObservableLike_observe](observer);
            pipe(observer, Disposable.onDisposed(() => {
                if (this[SubjectLike_observerCount] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
    return (options) => {
        const delegate = Subject_create(options);
        return createRefCountedPublisherInstance(delegate);
    };
})();
export default Subject_createRefCounted;
