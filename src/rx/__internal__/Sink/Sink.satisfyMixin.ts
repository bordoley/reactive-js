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
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink$notify from "./Sink.notify";

const Sink$satisfyMixin: <
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
    include(Disposable$mixin),
    function SatisfySink(
      instance: Mutable<TProperties> &
        Pick<SinkLike<T>, typeof SinkLike_notify>,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(Disposable$mixin, instance);
      instance[DelegatingSinkLike_delegate] = delegate;
      instance[SatisfySink_private_predicate] = predicate;

      pipe(
        instance,
        Disposable$addTo(delegate),
        Disposable$onComplete(() => {
          if (!Disposable$isDisposed(delegate)) {
            pipe(
              [defaultResult],
              fromArray,
              ReactiveContainer$sinkInto(delegate),
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
            Sink$notify(!defaultResult),
            Disposable$dispose(),
          );
        }
      },
    },
  );
};

export default Sink$satisfyMixin;
