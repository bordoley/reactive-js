/// <reference types="./PauseableObservable.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import * as EventSource from "../computations/EventSource.js";
import { ObservableLike_observe, StoreLike_value, } from "../computations.js";
import { invoke, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { DispatcherLike_state, DispatcherState_capacityExceeded, DispatcherState_completed, DispatcherState_ready, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_dispatchTo from "./Observable/__private__/Observable.dispatchTo.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin()), function PauseableObservable(instance, op) {
        const writableStore = (instance[PauseableLike_isPaused] =
            WritableStore.create(true));
        const observableDelegate = pipe(writableStore, op);
        pipe(writableStore, Disposable.addToContainer(observableDelegate));
        init(DelegatingDisposableMixin, instance, writableStore);
        init(DelegatingMulticastObservableMixin(), instance, observableDelegate);
        return instance;
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
export const dispatchTo = (dispatcher) => (src) => Observable_create(observer => {
    pipe(dispatcher[DispatcherLike_state], EventSource.addEventHandler(ev => {
        if (ev === DispatcherState_capacityExceeded ||
            ev === DispatcherState_completed) {
            src[PauseableLike_pause]();
        }
        else if (ev === DispatcherState_ready) {
            src[PauseableLike_resume]();
        }
    }), Disposable.addTo(observer));
    pipe(src, Observable_dispatchTo(dispatcher), invoke(ObservableLike_observe, observer));
    src[PauseableLike_resume]();
});
