/// <reference types="./PauseableObservable.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import * as EventSource from "../computations/EventSource.js";
import { ObservableLike_observe, StoreLike_value, } from "../computations.js";
import { bindMethod, invoke, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_isReady, QueueableLike_onReady, SinkLike_next, } from "../utils.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin()), function PauseableObservable(op) {
        const writableStore = (this[PauseableLike_isPaused] =
            WritableStore.create(true));
        const observableDelegate = pipe(writableStore, op);
        pipe(writableStore, Disposable.addToContainer(observableDelegate));
        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingMulticastObservableMixin(), this, observableDelegate);
        return this;
    }, props({
        [PauseableLike_isPaused]: none,
    }), {
        [PauseableLike_pause]() {
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[PauseableLike_isPaused][StoreLike_value] = false;
        },
    });
})();
export const enqueue = (queue) => (src) => Observable_create(observer => {
    pipe(queue[QueueableLike_onReady], EventSource.addEventHandler(bindMethod(src, PauseableLike_resume)), Disposable.addTo(observer));
    pipe(src, Observable_forEach(v => {
        queue[SinkLike_next](v);
        if (!queue[QueueableLike_isReady]) {
            src[PauseableLike_pause]();
        }
    }), invoke(ObservableLike_observe, observer));
    src[PauseableLike_resume]();
});
