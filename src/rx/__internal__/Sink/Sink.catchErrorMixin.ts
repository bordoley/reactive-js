import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  Function1,
  error,
  isSome,
  none,
  pipe,
  returns,
} from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addToIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Disposable_onError from "../../../util/__internal__/Disposable/Disposable.onError";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_catchErrorMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>() => Mixin2<SinkLike<T>, SinkLike<T>, Function1<unknown, C | void>> =
  /*@__PURE__*/ (<
    C extends ReactiveContainerLike<TSink>,
    TSink extends SinkLike<T>,
    T,
  >() => {
    type TProperties = {
      readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    };

    return returns(
      mix(
        include(Disposable_mixin),
        function CatchErrorSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          errorHandler: Function1<unknown, C | void>,
        ): SinkLike<T> {
          init(Disposable_mixin, instance);

          instance[DelegatingSinkLike_delegate] = delegate;

          pipe(
            instance,
            Disposable_addToIgnoringChildErrors(delegate),
            Disposable_onComplete(() => {
              pipe(delegate, Disposable_dispose());
            }),
            Disposable_onError((err: Error) => {
              try {
                const result = errorHandler(err) || none;
                if (isSome(result)) {
                  pipe(result, ReactiveContainer_sinkInto(delegate));
                } else {
                  pipe(delegate, Disposable_dispose());
                }
              } catch (e) {
                pipe(delegate, Disposable_dispose(error([e, err])));
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [DelegatingSinkLike_delegate]: none,
        }),
        {
          [SinkLike_notify](this: TProperties, next: T) {
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
          },
        },
      ),
    );
  })();

export default Sink_catchErrorMixin;
