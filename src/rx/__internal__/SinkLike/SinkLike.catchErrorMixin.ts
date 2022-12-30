import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Function1, isSome, none, pipe, returns } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import { Exception } from "../../../util";
import {
  addToIgnoringChildErrors,
  dispose,
  onComplete,
  onError,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { sinkInto } from "../../ReactiveContainerLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const catchErrorMixin: <
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
        include(DisposableLike__mixin),
        function CatchErrorSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          errorHandler: Function1<unknown, C | void>,
        ): SinkLike<T> {
          init(DisposableLike__mixin, instance);

          instance[DelegatingSinkLike_delegate] = delegate;

          pipe(
            instance,
            addToIgnoringChildErrors(delegate),
            onComplete(() => {
              pipe(delegate, dispose());
            }),
            onError((e: Exception) => {
              try {
                const result = errorHandler(e.cause) || none;
                if (isSome(result)) {
                  pipe(result, sinkInto(delegate));
                } else {
                  pipe(delegate, dispose());
                }
              } catch (cause) {
                pipe(delegate, dispose({ cause: { parent: e.cause, cause } }));
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

export default catchErrorMixin;
