/// <reference types="./MergeAllConsumerMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { EventSourceLike_subscribe, } from "../../computations.js";
import { none, pipe, returns } from "../../functions.js";
import { clampPositiveNonZeroInteger } from "../../math.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingNonCompletingSinkMixin from "../../utils/__mixins__/DelegatingNonCompletingSinkMixin.js";
import FlowControlQueueMixin from "../../utils/__mixins__/FlowControlQueueMixin.js";
import { ConsumableEnumeratorLike_addOnDataAvailableListener, EnumeratorLike_current, EventListenerLike_notify, QueueableLike_enqueue, SinkLike_complete, SinkLike_isCompleted, SyncEnumeratorLike_moveNext, } from "../../utils.js";
const MergeAllConsumerMixin = /*@__PURE__*/ (() => {
    const MergeAllConsumer_createDelegatingNonCompleting = Symbol("MergeAllConsumer_createDelegatingNonCompleting");
    const MergeAllConsumer_activeCount = Symbol("MergeAllConsumer_activeCount");
    const subscribeToInner = (mergeAllConsumer, source) => {
        const delegate = mergeAllConsumer[DelegatingEventListenerLike_delegate];
        mergeAllConsumer[MergeAllConsumer_activeCount]++;
        const sourceDelegate = pipe(delegate, mergeAllConsumer[MergeAllConsumer_createDelegatingNonCompleting], DisposableContainer.onComplete(() => {
            mergeAllConsumer[MergeAllConsumer_activeCount]--;
            const activeCount = mergeAllConsumer[MergeAllConsumer_activeCount];
            if (mergeAllConsumer[SyncEnumeratorLike_moveNext]()) {
                const next = mergeAllConsumer[EnumeratorLike_current];
                subscribeToInner(mergeAllConsumer, next);
            }
            else if (activeCount <= 0 && mergeAllConsumer[SinkLike_isCompleted]) {
                delegate[SinkLike_complete]();
            }
        }));
        source[EventSourceLike_subscribe](sourceDelegate);
    };
    return returns(mix(include(FlowControlQueueMixin(), DelegatingNonCompletingSinkMixin()), function MergeAllConsumerMixin(delegate, config, createDelegatingNonCompleting) {
        init(FlowControlQueueMixin(), this, config);
        init(DelegatingNonCompletingSinkMixin(), this, delegate);
        const maxConcurrency = clampPositiveNonZeroInteger(config?.concurrency ?? MAX_SAFE_INTEGER);
        this[ConsumableEnumeratorLike_addOnDataAvailableListener](() => {
            const activeCount = this[MergeAllConsumer_activeCount];
            if (activeCount >= maxConcurrency) {
                return;
            }
            if (this[SyncEnumeratorLike_moveNext]()) {
                const next = this[EnumeratorLike_current];
                subscribeToInner(this, next);
            }
        });
        pipe(this, DisposableContainer.onComplete(() => {
            const activeCount = this[MergeAllConsumer_activeCount];
            if (activeCount <= 0) {
                delegate[SinkLike_complete]();
            }
        }));
        this[MergeAllConsumer_createDelegatingNonCompleting] =
            createDelegatingNonCompleting;
        return this;
    }, props({
        [MergeAllConsumer_createDelegatingNonCompleting]: none,
        [MergeAllConsumer_activeCount]: 0,
    }), proto({
        [EventListenerLike_notify](next) {
            this[QueueableLike_enqueue](next);
        },
    })));
})();
export default MergeAllConsumerMixin;
