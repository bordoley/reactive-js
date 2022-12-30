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
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { sinkInto } from "../../ReactiveContainerLike";
import { notify } from "../../SinkLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const satisfyMixin: <
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
        addTo(delegate),
        onComplete(() => {
          if (!isDisposed(delegate)) {
            pipe([defaultResult], fromArray, sinkInto(delegate));
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
            notify(!defaultResult),
            dispose(),
          );
        }
      },
    },
  );
};

export default satisfyMixin;
