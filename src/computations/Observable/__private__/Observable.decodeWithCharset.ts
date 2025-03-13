import { Array_length } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
  QueueableLike_isReady,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
  const DecodeWithCharsetObserver_textDecoder = Symbol(
    "DecodeWithCharsetObserver_textDecoder",
  );

  type TProperties = {
    [DecodeWithCharsetObserver_textDecoder]: TextDecoder;
  };

  function onDecodeWithCharsetObserverComplete(
    this: TProperties & LiftedObserverLike<ArrayBuffer, string>,
  ) {
    const delegate = this[LiftedObserverLike_delegate];
    const data = this[DecodeWithCharsetObserver_textDecoder].decode(
      newInstance(Uint8Array, []),
      {
        stream: false,
      },
    );

    if (data[Array_length] > 0) {
      delegate[QueueableLike_enqueue](data);
      delegate[QueueableLike_complete]();
    } else {
      delegate[DisposableLike_dispose]();
    }
  }

  return mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin<ArrayBuffer>()),
    function DecodeWithCharsetObserver(
      this: Pick<
        LiftedObserverLike<ArrayBuffer, string>,
        typeof LiftedObserverLike_notify
      > &
        TProperties,
      delegate: ObserverLike<string>,
      charset: string,
      options?: {
        fatal?: boolean;
        ignoreBOM?: boolean;
      },
    ): ObserverLike<ArrayBuffer> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin<ArrayBuffer, string>(), this, delegate);

      const textDecoder = newInstance(TextDecoder, charset, options);
      this[DecodeWithCharsetObserver_textDecoder] = textDecoder;

      pipe(
        this,
        DisposableContainer.onComplete(onDecodeWithCharsetObserverComplete),
      );

      return this;
    },
    props<TProperties>({
      [DecodeWithCharsetObserver_textDecoder]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<ArrayBuffer, string>,
        next: ArrayBuffer,
      ) {
        const delegate = this[LiftedObserverLike_delegate];

        const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
          stream: true,
        });

        const shouldEmit = data[Array_length] > 0;

        return (
          (shouldEmit &&
            (delegate?.[LiftedObserverLike_notify]?.(data) ??
              delegate[QueueableLike_enqueue](data))) ||
          delegate[QueueableLike_isReady]
        );
      },
    }),
  );
})();

const Observable_decodeWithCharset: Observable.Signature["decodeWithCharset"] =
  options =>
    pipe(
      createDecodeWithCharsetObserver,
      partial(options?.charset ?? "utf-8", options),
      Observable_liftPureDeferred,
    );

export default Observable_decodeWithCharset;
