/// <reference types="./Broadcaster.merge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
const Broadcaster_merge = /*@__PURE__*/ (() => {
    const MergeBroadcaster_broadcasters = Symbol("MergeBroadcaster_broadcasters");
    const isMergeBroadcaster = (broadcaster) => isSome(broadcaster[MergeBroadcaster_broadcasters]);
    const flattenbroadcasters = (broadcasters) => broadcasters.some(isMergeBroadcaster)
        ? broadcasters.flatMap(broadcaster => isMergeBroadcaster(broadcaster)
            ? flattenbroadcasters(broadcaster[MergeBroadcaster_broadcasters])
            : broadcaster)
        : broadcasters;
    return mixInstanceFactory(include(DelegatingDisposableContainerMixin()), function MergeBroadcaster(...broadcasters) {
        broadcasters = flattenbroadcasters(broadcasters);
        this[MergeBroadcaster_broadcasters] = broadcasters;
        const disposable = Disposable.create();
        init(DelegatingDisposableContainerMixin(), this, disposable);
        const count = broadcasters[Array_length];
        let completed = 0;
        for (const broadcaster of broadcasters) {
            pipe(broadcaster, DisposableContainer.onDisposed(e => {
                completed++;
                if (completed >= count || isSome(e)) {
                    disposable[DisposableLike_dispose](e);
                }
            }));
        }
        return this;
    }, props({
        [MergeBroadcaster_broadcasters]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: true,
        [ReactiveSourceLike_subscribe](listener) {
            const broadcasters = this[MergeBroadcaster_broadcasters];
            const count = broadcasters[Array_length];
            let completed = 0;
            const eventHandler = bindMethod(listener, EventListenerLike_notify);
            const onEventHandlerCompleted = () => {
                completed++;
                if (completed >= count) {
                    listener[DisposableLike_dispose]();
                }
            };
            for (const broadcaster of broadcasters) {
                pipe(broadcaster, Broadcaster_addEventHandler(eventHandler), Disposable.addTo(listener), DisposableContainer.onComplete(onEventHandlerCompleted));
            }
        },
    });
})();
export default Broadcaster_merge;
