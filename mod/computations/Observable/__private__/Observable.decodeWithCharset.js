/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, QueueableLike_complete, QueueableLike_enqueue, QueueableLike_isReady, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
    const DecodeWithCharsetObserver_textDecoder = Symbol("DecodeWithCharsetObserver_textDecoder");
    function onDecodeWithCharsetObserverComplete() {
        const delegate = this[LiftedObserverLike_delegate];
        const data = this[DecodeWithCharsetObserver_textDecoder].decode(newInstance(Uint8Array, []), {
            stream: false,
        });
        if (data[Array_length] > 0) {
            delegate[QueueableLike_enqueue](data);
            delegate[QueueableLike_complete]();
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }
    return mixInstanceFactory(include(DisposableMixin, LiftedObserverMixin()), function DecodeWithCharsetObserver(delegate, charset, options) {
        init(DisposableMixin, this);
        init(LiftedObserverMixin(), this, delegate, none);
        pipe(this, Disposable.addTo(delegate));
        const textDecoder = newInstance(TextDecoder, charset, options);
        this[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(this, DisposableContainer.onComplete(onDecodeWithCharsetObserverComplete));
        return this;
    }, props({
        [DecodeWithCharsetObserver_textDecoder]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            const shouldEmit = data[Array_length] > 0;
            return ((shouldEmit &&
                (delegate?.[LiftedObserverLike_notify]?.(data) ??
                    delegate[QueueableLike_enqueue](data))) ||
                delegate[QueueableLike_isReady]);
        },
    }));
})();
const Observable_decodeWithCharset = options => pipe(createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8", options), Observable_liftPureDeferred);
export default Observable_decodeWithCharset;
