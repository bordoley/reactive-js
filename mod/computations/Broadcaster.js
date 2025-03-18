/// <reference types="./Broadcaster.d.ts" />

import { BroadcasterLike_connect, ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../computations.js";
import { isSome, newInstance, pipe, returns, } from "../functions.js";
import AbstractDelegatingDisposableContainer, { AbstractDelegatingDisposableContainer_delegate, } from "../utils/DisposableContainer/__internal__/AbstractDelegatingDisposableContainer.js";
import * as EventListener from "../utils/EventListener.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "./Broadcaster/__private__/Broadcaster.createPauseable.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
export const create = Broadcaster_create;
export const createPauseable = Broadcaster_createPauseable;
class BroadcasterToEventSource extends AbstractDelegatingDisposableContainer {
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = false;
    [EventSourceLike_addEventListener](listener) {
        const sink = pipe(listener, EventListener.toSink());
        this[AbstractDelegatingDisposableContainer_delegate][BroadcasterLike_connect](sink);
    }
}
class BroadcasterToPauseableEventSource extends BroadcasterToEventSource {
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = false;
    get [PauseableLike_isPaused]() {
        return this[AbstractDelegatingDisposableContainer_delegate][PauseableLike_isPaused];
    }
    [PauseableLike_pause]() {
        return this[AbstractDelegatingDisposableContainer_delegate][PauseableLike_pause]();
    }
    [PauseableLike_resume]() {
        return this[AbstractDelegatingDisposableContainer_delegate][PauseableLike_resume]();
    }
}
export const toEventSource = /*@__PURE__*/ returns(broadcaster => isSome(broadcaster[PauseableLike_isPaused])
    ? newInstance(BroadcasterToPauseableEventSource, broadcaster)
    : newInstance(BroadcasterToEventSource, broadcaster));
export const toObservable = /*@__PURE__*/ (() => returns((broadcaster) => Observable_create(observer => {
    broadcaster[BroadcasterLike_connect](observer);
})))();
