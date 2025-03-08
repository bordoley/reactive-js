/// <reference types="./PauseableObservable.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { StoreLike_value, } from "../computations.js";
import { none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
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
