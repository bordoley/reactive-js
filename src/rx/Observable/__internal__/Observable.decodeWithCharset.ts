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
import { DecodeWithCharsetObserver_textDecoder } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import {
  invoke,
  newInstance,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  BufferLike_capacity,
  DisposableLike_dispose,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

type ObservableDecodeWithCharset = <C extends ObservableLike>(options?: {
  readonly charset?: string;
}) => ContainerOperator<C, ArrayBuffer, string>;

const Observable_decodeWithCharset: ObservableDecodeWithCharset =
  /*@__PURE__*/ (() => {
    type TProperties = {
      readonly [DecodeWithCharsetObserver_textDecoder]: TextDecoder;
    };

    const createDecodeWithCharsetObserver = createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          delegatingMixin(),
          Observer_mixin<ArrayBuffer>(),
        ),
        function DecodeWithCharsetObserver(
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
            delegate[BufferLike_capacity],
            delegate[QueueableLike_backpressureStrategy],
          );

          const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
          });
          instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;

          pipe(
            instance,
            Disposable_addTo(delegate),
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
        props<TProperties>({
          [DecodeWithCharsetObserver_textDecoder]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<string>> &
              ObserverLike<ArrayBuffer>,
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
        Enumerable_lift,
      );
    };
  })() as ObservableDecodeWithCharset;

export default Observable_decodeWithCharset;
