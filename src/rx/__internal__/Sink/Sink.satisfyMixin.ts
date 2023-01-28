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
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink_notify from "./Sink.notify";

const Sink_satisfyMixin: <
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
  const SatisfySinkMixin_predicate = Symbol("SatisfySinkMixin_predicate");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<boolean>;
    readonly [SatisfySinkMixin_predicate]: Predicate<T>;
  };

  return mix(
    include(Disposable_mixin),
    function SatisfySinkMixin(
      instance: Mutable<TProperties> &
        Pick<SinkLike<T>, typeof SinkLike_notify>,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(Disposable_mixin, instance);
      instance[DelegatingSinkLike_delegate] = delegate;
      instance[SatisfySinkMixin_predicate] = predicate;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          if (!Disposable_isDisposed(delegate)) {
            pipe(
              [defaultResult],
              fromArray,
              ReactiveContainer_sinkInto(delegate),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [SatisfySinkMixin_predicate]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        if (this[SatisfySinkMixin_predicate](next)) {
          pipe(
            this[DelegatingSinkLike_delegate],
            Sink_notify(!defaultResult),
            Disposable_dispose(),
          );
        }
      },
    },
  );
};

export default Sink_satisfyMixin;
