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
import DisposableLike__addToIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import DisposableLike__onError from "../../../util/__internal__/DisposableLike/DisposableLike.onError";
import { sinkInto } from "../../ReactiveContainerLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const SinkLike__catchErrorMixin: <
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
            DisposableLike__addToIgnoringChildErrors(delegate),
            DisposableLike__onComplete(() => {
              pipe(delegate, DisposableLike__dispose());
            }),
            DisposableLike__onError((e: Exception) => {
              try {
                const result = errorHandler(e.cause) || none;
                if (isSome(result)) {
                  pipe(result, sinkInto(delegate));
                } else {
                  pipe(delegate, DisposableLike__dispose());
                }
              } catch (cause) {
                pipe(
                  delegate,
                  DisposableLike__dispose({
                    cause: { parent: e.cause, cause },
                  }),
                );
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

export default SinkLike__catchErrorMixin;
