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
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_enqueue,
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
      delegate[DispatcherLike_complete]();
    } else {
      delegate[DisposableLike_dispose]();
    }
  }

  return mixInstanceFactory(
    include(
      DisposableMixin,
      DelegatingObserverMixin<ArrayBuffer>(),
      LiftedObserverMixin(),
    ),
    function DecodeWithCharsetObserver(
      this: ObserverMixinBaseLike<ArrayBuffer> & TProperties,
      delegate: ObserverLike<string>,
      charset: string,
      options?: {
        fatal?: boolean;
        ignoreBOM?: boolean;
      },
    ): ObserverLike<ArrayBuffer> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin<ArrayBuffer>(), this, delegate);
      init(LiftedObserverMixin(), this, delegate);

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
      [ObserverMixinBaseLike_notify](
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
            (delegate?.[ObserverMixinBaseLike_notify]?.(data) ??
              delegate[QueueableLike_enqueue](data))) ||
          !shouldEmit
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
