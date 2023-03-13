import { __DEV__ } from "../../../__internal__/constants.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DecodeWithCharset } from "../../../containers.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";

const Observable_decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const DecodeWithCharsetObserverMixin_textDecoder = Symbol(
      "DecodeWithCharsetObserverMixin_textDecoder",
    );

    type TProperties = {
      readonly [DecodeWithCharsetObserverMixin_textDecoder]: TextDecoder;
    };

    const createDecodeWithCharsetObserver = createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          delegatingMixin(),
          Observer_mixin<ArrayBuffer>(),
        ),
        function DecodeWithCharsetObserverMixin(
          instance: Pick<
            ObserverLike<ArrayBuffer>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<string>,
          charset: string,
        ): ObserverLike<ArrayBuffer> {
          init(Disposable_mixin, instance);
          init(delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<ArrayBuffer>(),
            instance,
            delegate[DispatcherLike_scheduler],
          );

          const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
          });
          instance[DecodeWithCharsetObserverMixin_textDecoder] = textDecoder;

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              const data = textDecoder.decode();

              if (data.length > 0) {
                pipe(
                  data,
                  Optional_toObservable(),
                  Observable_observeWith(delegate),
                );
              } else {
                delegate[DisposableLike_dispose]();
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [DecodeWithCharsetObserverMixin_textDecoder]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<string>> &
              ObserverLike<ArrayBuffer>,
            next: ArrayBuffer,
          ) {
            Observer_assertState(this);

            const data = this[
              DecodeWithCharsetObserverMixin_textDecoder
            ].decode(next, {
              stream: true,
            });
            if (data.length > 0) {
              this[DelegatingLike_delegate][ObserverLike_notify](data);
            }
          },
        },
      ),
    );

    return options => {
      const charset = options?.charset ?? "utf-8";
      return pipe(
        createDecodeWithCharsetObserver,
        partial(charset),
        Observable_liftEnumerableOperator,
      );
    };
  })();

export default Observable_decodeWithCharset;
function Optional_toObservable(): import("../../../functions.js").Function1<
  string,
  ObservableLike<unknown>
> {
  throw new Error("Function not implemented.");
}
