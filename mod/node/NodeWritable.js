/// <reference types="./NodeWritable.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import * as Publisher from "../computations/Publisher.js";
import { bindMethod, newInstance, none, pipe, raise, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import { BackPressureError, DisposableLike_dispose, EventListenerLike_notify, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../utils.js";
import * as NodeStream from "./NodeStream.js";
export const toConsumer = /*@__PURE__*/ (() => {
    const WritableConsumer_autoDispose = Symbol("WritableConsumer_autoDispose");
    const WritableConsumer_writable = Symbol("WritableConsumer_writable");
    const WritableConsumer_onReadyPublisher = Symbol("WritableConsumer_onReadyPublisher");
    const createNodeWritableConsumer = mixInstanceFactory(include(DisposableMixin), function WritableConsumer(writable, options) {
        init(DisposableMixin, this);
        this[WritableConsumer_writable] = writable;
        this[WritableConsumer_autoDispose] = options?.autoDispose ?? false;
        writable.on("finish", () => {
            this[SinkLike_isCompleted] = true;
            if (this[WritableConsumer_autoDispose]) {
                this[DisposableLike_dispose]();
            }
        });
        pipe(this, NodeStream.addToNodeStream(writable), DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)));
        return this;
    }, props({
        [WritableConsumer_autoDispose]: false,
        [WritableConsumer_writable]: none,
        [SinkLike_isCompleted]: false,
        [WritableConsumer_onReadyPublisher]: none,
    }), proto({
        [QueueableLike_backpressureStrategy]: ThrowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            const writable = this[WritableConsumer_writable];
            const needsDrain = writable.writableNeedDrain;
            const result = !this[SinkLike_isCompleted] && !needsDrain;
            return result;
        },
        [QueueableLike_addOnReadyListener](callback) {
            const publisher = this[WritableConsumer_onReadyPublisher] ??
                (() => {
                    const writable = this[WritableConsumer_writable];
                    const publisher = pipe(Publisher.create(), Disposable.addTo(this));
                    const onDrain = bindMethod(publisher, EventListenerLike_notify);
                    writable.on("drain", onDrain);
                    this[WritableConsumer_onReadyPublisher] = publisher;
                    return publisher;
                })();
            return pipe(publisher, Broadcaster.addEventHandler(callback), Disposable.addTo(this));
        },
        [EventListenerLike_notify](data) {
            if (this[QueueableLike_isReady]) {
                const writable = this[WritableConsumer_writable];
                writable.write(Buffer.from(data));
            }
            else {
                raise(newInstance(BackPressureError, this));
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            const writable = this[WritableConsumer_writable];
            const ended = writable.writableEnded;
            this[SinkLike_isCompleted] = true;
            if (isCompleted || ended) {
                return;
            }
            writable.end();
        },
    }));
    return options => writable => createNodeWritableConsumer(writable, options);
})();
