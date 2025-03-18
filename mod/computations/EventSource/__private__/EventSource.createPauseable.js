/// <reference types="./EventSource.createPauseable.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { StoreLike_value, } from "../../../computations.js";
import { none, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../utils.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
export const EventSource_createPauseable = 
/*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingEventSourceMixin()), function PauseableEventSource(op) {
        const writableStore = (this[PauseableLike_isPaused] =
            WritableStore.create(true));
        const delegate = pipe(writableStore, op);
        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingEventSourceMixin(), this, delegate);
        this[PauseableLike_resume]();
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
export default EventSource_createPauseable;
