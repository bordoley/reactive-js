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
} from "../../../__internal__/mixins";
import { Predicate, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto";
import Sink_notify from "./Sink.notify";

const Sink_satisfyMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
  defaultResult: boolean,
) => Mixin2<SinkLike<T>, TSink, Predicate<T>> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
  defaultResult: boolean,
) => {
  const SatisfySinkMixin_predicate = Symbol("SatisfySinkMixin_predicate");

  type TProperties = {
    readonly [SatisfySinkMixin_predicate]: Predicate<T>;
  };

  return mix(
    include(Disposable_mixin, delegatingMixin()),
    function SatisfySinkMixin(
      instance: Mutable<TProperties> &
        Pick<SinkLike<T>, typeof SinkLike_notify>,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(Disposable_mixin, instance);
      init(delegatingMixin(), instance, delegate);

      instance[SatisfySinkMixin_predicate] = predicate;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          if (!Disposable_isDisposed(delegate)) {
            pipe(
              [defaultResult],
              fromReadonlyArray,
              ReactiveContainer_sinkInto(delegate),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [SatisfySinkMixin_predicate]: none,
    }),
    {
      [SinkLike_notify](this: TProperties & DelegatingLike<TSink>, next: T) {
        if (this[SatisfySinkMixin_predicate](next)) {
          pipe(
            this[DelegatingLike_delegate],
            Sink_notify(!defaultResult),
            Disposable_dispose(),
          );
        }
      },
    },
  );
};

export default Sink_satisfyMixin;
