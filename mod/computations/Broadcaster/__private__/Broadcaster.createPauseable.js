/// <reference types="./Broadcaster.createPauseable.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { StoreLike_value, } from "../../../computations.js";
import { none, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../utils.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
export const Broadcaster_createPauseable = 
/*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingBroadcasterMixin()), function PauseableBroadcaster(op, options) {
        const writableStore = WritableStore.create(true, options);
        this[PauseableLike_isPaused] = writableStore;
        const delegate = pipe(writableStore, op);
        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingBroadcasterMixin(), this, delegate);
        this[PauseableLike_resume]();
        return this;
    }, props({
        [PauseableLike_isPaused]: none,
    }), proto({
        [PauseableLike_pause]() {
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[PauseableLike_isPaused][StoreLike_value] = false;
        },
    }));
})();
export default Broadcaster_createPauseable;
