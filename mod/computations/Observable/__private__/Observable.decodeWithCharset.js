/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DispatcherLike_complete, DisposableLike_dispose, ObserverLike_notify, QueueableLike_enqueue, } from "../../../utils.js";
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
            delegate[DispatcherLike_complete]();
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()), function DecodeWithCharsetObserver(delegate, charset, options) {
        init(DisposableMixin, this);
        init(DelegatingObserverMixin(), this, delegate);
        init(LiftedObserverMixin(), this, delegate);
        const textDecoder = newInstance(TextDecoder, charset, options);
        this[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(this, DisposableContainer.onComplete(onDecodeWithCharsetObserverComplete));
        return this;
    }, props({
        [DecodeWithCharsetObserver_textDecoder]: none,
    }), proto({
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            if (data[Array_length] > 0) {
                this[LiftedObserverLike_delegate][ObserverLike_notify](data);
            }
        }),
    }));
})();
const Observable_decodeWithCharset = options => pipe(createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8", options), Observable_liftPureDeferred);
export default Observable_decodeWithCharset;
