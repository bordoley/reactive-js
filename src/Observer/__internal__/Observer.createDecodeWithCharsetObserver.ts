import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DecodeWithCharsetLike,
  DecodeWithCharsetLike_textDecoder,
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { invoke, newInstance, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObservableLike_observe,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createDecodeWithCharsetObserver = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(
        Disposable_mixin,
        Delegating_mixin(),
        Observer_mixin<ArrayBuffer>(),
      ),
      function DecodeWithCharsetObserver(
        instance: Pick<ObserverLike<ArrayBuffer>, typeof SinkLike_notify> &
          DecodeWithCharsetLike,
        delegate: ObserverLike<string>,
        charset: string,
      ): ObserverLike<ArrayBuffer> {
        init(Disposable_mixin, instance);
        init(Delegating_mixin(), instance, delegate);
        Observer_mixin_initFromDelegate<ArrayBuffer>(instance, delegate);

        const textDecoder = newInstance(TextDecoder, charset, {
          fatal: true,
        });
        instance[DecodeWithCharsetLike_textDecoder] = textDecoder;

        pipe(
          instance,
          Disposable_onComplete(() => {
            const data = textDecoder.decode();

            if (data.length > 0) {
              pipe(
                data,
                Optional_toObservable(),
                invoke(ObservableLike_observe, delegate),
              );
            } else {
              delegate[DisposableLike_dispose]();
            }
          }),
        );

        return instance;
      },
      props<DecodeWithCharsetLike>({
        [DecodeWithCharsetLike_textDecoder]: none,
      }),
      {
        [SinkLike_notify](
          this: DecodeWithCharsetLike &
            DelegatingLike<ObserverLike<string>> &
            ObserverLike<ArrayBuffer>,
          next: ArrayBuffer,
        ) {
          Observer_assertState(this);

          const data = this[DecodeWithCharsetLike_textDecoder].decode(next, {
            stream: true,
          });
          if (data.length > 0) {
            this[DelegatingLike_delegate][SinkLike_notify](data);
          }
        },
      },
    ),
  ))();

export default Observer_createDecodeWithCharsetObserver;
