import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { newInstance, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
  SinkLike_notify,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const Sink_decodeWithCharsetMixin: <C extends ObservableLike>(
  fromReadonlyArray: (v: readonly string[]) => C,
) => Mixin2<
  ObserverLike<ArrayBuffer>,
  ObserverLike<string>,
  string,
  Pick<ObserverLike<ArrayBuffer>, typeof SinkLike_notify>
> = <C extends ObservableLike>(
  fromReadonlyArray: (v: readonly string[]) => C,
) => {
  const DecodeWithCharsetSinkMixin_textDecoder = Symbol(
    "DecodeWithCharsetSinkMixin_textDecoder",
  );

  type TProperties = {
    readonly [DecodeWithCharsetSinkMixin_textDecoder]: TextDecoder;
  };

  return mix(
    include(Disposable_mixin, delegatingMixin(), Observer_mixin<ArrayBuffer>()),
    function DecodeWithCharsetSinkMixin(
      instance: Pick<ObserverLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<string>,
      charset: string,
    ): ObserverLike<ArrayBuffer> {
      init(Disposable_mixin, instance);
      init(delegatingMixin(), instance, delegate);
      init(
        Observer_mixin<ArrayBuffer>(),
        instance,
        delegate[ObserverLike_scheduler],
      );

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          const data = textDecoder.decode();

          if (data.length > 0) {
            pipe([data], fromReadonlyArray, Observable_observeWith(delegate));
          } else {
            pipe(delegate, Disposable_dispose());
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DecodeWithCharsetSinkMixin_textDecoder]: none,
    }),
    {
      [SinkLike_notify](
        this: TProperties & DelegatingLike<ObserverLike<string>>,
        next: ArrayBuffer,
      ) {
        const data = this[DecodeWithCharsetSinkMixin_textDecoder].decode(next, {
          stream: true,
        });
        if (data.length > 0) {
          this[DelegatingLike_delegate][SinkLike_notify](data);
        }
      },
    },
  );
};

export default Sink_decodeWithCharsetMixin;
