import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Predicate, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import ReactiveContainerLike__sinkInto from "../ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import SinkLike__notify from "./SinkLike.notify";

const SinkLike__satisfyMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromArray: (v: readonly boolean[]) => C,
  defaultResult: boolean,
) => Mixin2<SinkLike<T>, TSink, Predicate<T>> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromArray: (v: readonly boolean[]) => C,
  defaultResult: boolean,
) => {
  const SatisfySink_private_predicate = Symbol("SatisfySink_private_predicate");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<boolean>;
    readonly [SatisfySink_private_predicate]: Predicate<T>;
  };

  return mix(
    include(DisposableLike__mixin),
    function SatisfySink(
      instance: Mutable<TProperties> &
        Pick<SinkLike<T>, typeof SinkLike_notify>,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(DisposableLike__mixin, instance);
      instance[DelegatingSinkLike_delegate] = delegate;
      instance[SatisfySink_private_predicate] = predicate;

      pipe(
        instance,
        DisposableLike__addTo(delegate),
        DisposableLike__onComplete(() => {
          if (!DisposableLike__isDisposed(delegate)) {
            pipe(
              [defaultResult],
              fromArray,
              ReactiveContainerLike__sinkInto(delegate),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [SatisfySink_private_predicate]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        if (this[SatisfySink_private_predicate](next)) {
          pipe(
            this[DelegatingSinkLike_delegate],
            SinkLike__notify(!defaultResult),
            DisposableLike__dispose(),
          );
        }
      },
    },
  );
};

export default SinkLike__satisfyMixin;
