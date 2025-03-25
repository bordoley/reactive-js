/// <reference types="./Broadcaster.createPauseable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { StoreLike_value, } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import { DelegatingDisposableContainerLike_delegate } from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../utils.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
export const Broadcaster_createPauseable = 
/*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin(), DelegatingBroadcasterMixin()), function PauseableBroadcaster(op, options) {
    const writableStore = WritableStore.create(true, options);
    const delegate = pipe(writableStore, op);
    init(DelegatingDisposableMixin(), this, writableStore);
    init(DelegatingBroadcasterMixin(), this, delegate);
    this[PauseableLike_resume]();
    return this;
}, props(), {
    get [PauseableLike_isPaused]() {
        unsafeCast(this);
        return this[DelegatingDisposableContainerLike_delegate];
    },
    [PauseableLike_pause]() {
        this[DelegatingDisposableContainerLike_delegate][StoreLike_value] =
            true;
    },
    [PauseableLike_resume]() {
        this[DelegatingDisposableContainerLike_delegate][StoreLike_value] =
            false;
    },
}))();
export default Broadcaster_createPauseable;
