import {
  createInstanceFactory,
  mix,
  include,
  init,
  props,
} from "../../../__internal__/mixins";
import { ObserverLike, ObservableLike_observe } from "../../../concurrent";
import { newInstance, pipe, invoke, none } from "../../../functions";
import { SinkLike_notify } from "../../../rx";
import { DisposableLike_dispose } from "../../../utils";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin";
import ObserverMixin from "../../__mixins__/ObserverMixin";
import Observer_assertState from "./Observer.assertState";

const Observer_createDecodeWithCharsetObserver = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(
        DisposableMixin,
        Delegating_mixin(),
        ObserverMixin<ArrayBuffer>(),
      ),
      function DecodeWithCharsetObserver(
        instance: Pick<ObserverLike<ArrayBuffer>, typeof SinkLike_notify> &
          DecodeWithCharsetLike,
        delegate: ObserverLike<string>,
        charset: string,
      ): ObserverLike<ArrayBuffer> {
        init(DisposableMixin, instance);
        init(Delegating_mixin(), instance, delegate);
        Observer_mixin_initFromDelegate<ArrayBuffer>(instance, delegate);

        const textDecoder = newInstance(TextDecoder, charset, {
          fatal: true,
        });
        instance[DecodeWithCharsetLike_textDecoder] = textDecoder;

        pipe(
          instance,
          Disposable.onComplete(() => {
            const data = textDecoder.decode();

            if (data.length > 0) {
              pipe(
                data,
                Observable_fromOptional(),
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
