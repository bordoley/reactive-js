import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DispatcherLike_complete,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
  const DecodeWithCharsetObserver_delegate = Symbol(
    "DecodeWithCharsetObserver_delegate",
  );
  const DecodeWithCharsetObserver_textDecoder = Symbol(
    "DecodeWithCharsetObserver_textDecoder",
  );

  type TProperties = {
    [DecodeWithCharsetObserver_delegate]: ObserverLike<string>;
    [DecodeWithCharsetObserver_textDecoder]: TextDecoder;
  };

  return createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DisposableMixin, DelegatingObserverMixin<ArrayBuffer>()),
        function DecodeWithCharsetObserver(
          instance: Pick<
            ObserverLike<ArrayBuffer>,
            typeof ObserverLike_notify
          > &
            TProperties,
          delegate: ObserverLike<string>,
          charset: string,
          options?: {
            fatal?: boolean;
            ignoreBOM?: boolean;
          },
        ): ObserverLike<ArrayBuffer> {
          init(DisposableMixin, instance);
          instance[DecodeWithCharsetObserver_delegate] = delegate;

          init(DelegatingObserverMixin<ArrayBuffer>(), instance, delegate);

          const textDecoder = newInstance(TextDecoder, charset, options);
          instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;

          pipe(
            instance,
            Disposable.onComplete(() => {
              const data = textDecoder.decode(new Uint8Array([]), {
                stream: false,
              });

              if (data.length > 0) {
                delegate[QueueableLike_enqueue](data);
                delegate[DispatcherLike_complete]();
              } else {
                delegate[DisposableLike_dispose]();
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [DecodeWithCharsetObserver_delegate]: none,
          [DecodeWithCharsetObserver_textDecoder]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties & ObserverLike<ArrayBuffer>,
            next: ArrayBuffer,
          ) {
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(
              next,
              {
                stream: true,
              },
            );
            if (data.length > 0) {
              this[DecodeWithCharsetObserver_delegate][ObserverLike_notify](
                data,
              );
            }
          },
        },
      ),
    ),
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
