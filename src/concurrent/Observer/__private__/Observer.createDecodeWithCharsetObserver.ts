import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { newInstance, none, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";

const Observer_createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
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
    mix(
      include(DisposableMixin, ObserverMixin<ArrayBuffer>()),
      function DecodeWithCharsetObserver(
        instance: Pick<ObserverLike<ArrayBuffer>, typeof SinkLike_notify> &
          TProperties,
        delegate: ObserverLike<string>,
        charset: string,
      ): ObserverLike<ArrayBuffer> {
        init(DisposableMixin, instance);
        instance[DecodeWithCharsetObserver_delegate] = delegate;

        Observer_mixin_initFromDelegate<ArrayBuffer>(instance, delegate);

        const textDecoder = newInstance(TextDecoder, charset, {
          fatal: true,
        });
        instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;

        pipe(
          instance,
          Disposable.onComplete(() => {
            const data = textDecoder.decode();

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
        [SinkLike_notify](
          this: TProperties & ObserverLike<ArrayBuffer>,
          next: ArrayBuffer,
        ) {
          Observer_assertState(this);

          const data = this[DecodeWithCharsetObserver_textDecoder].decode(
            next,
            {
              stream: true,
            },
          );
          if (data.length > 0) {
            this[DecodeWithCharsetObserver_delegate][SinkLike_notify](data);
          }
        },
      },
    ),
  );
})();

export default Observer_createDecodeWithCharsetObserver;
