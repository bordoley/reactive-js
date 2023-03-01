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
import { __DEV__ } from "../../../constants.js";
import { DecodeWithCharset } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_decodeWithCharset from "../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset.js";
import { newInstance, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
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
            delegate[ObserverLike_scheduler],
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
                  [data],
                  ReadonlyArray_toRunnable(),
                  Observable_observeWith(delegate),
                );
              } else {
                pipe(delegate, Disposable_dispose());
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

    return pipe(
      createDecodeWithCharsetObserver,
      StatefulContainer_decodeWithCharset<ObservableLike>(
        Observable_liftEnumerableOperator,
      ),
    );
  })();

export default Observable_decodeWithCharset;
