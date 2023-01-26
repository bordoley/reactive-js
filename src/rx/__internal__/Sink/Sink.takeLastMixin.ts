import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { getLength, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const TakeLastSink_last = Symbol("TakeLastSink_last");

const Sink$takeLastMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  fromArray: (v: readonly T[]) => C,
) => Mixin2<SinkLike<T>, TSink, number> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  fromArray: (v: readonly T[]) => C,
) => {
  const TakeLastSink_private_takeLastCount = Symbol(
    "TakeLastSink_private_takeLastCount",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    readonly [TakeLastSink_private_takeLastCount]: number;
    readonly [TakeLastSink_last]: T[];
  };

  return mix(
    include(Disposable$mixin),
    function TakeLastSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      takeLastCount: number,
    ): SinkLike<T> {
      init(Disposable$mixin, instance);

      instance[DelegatingSinkLike_delegate] = delegate;
      instance[TakeLastSink_private_takeLastCount] = takeLastCount;
      instance[TakeLastSink_last] = [];

      pipe(
        instance,
        Disposable$addTo(delegate),
        Disposable$onComplete(() => {
          pipe(
            instance[TakeLastSink_last],
            fromArray,
            ReactiveContainer$sinkInto(delegate),
          );
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [TakeLastSink_private_takeLastCount]: 0,
      [TakeLastSink_last]: none,
    }),
    {
      [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
        const { [TakeLastSink_last]: last } = this;

        last.push(next);

        if (getLength(last) > this[TakeLastSink_private_takeLastCount]) {
          last.shift();
        }
      },
    },
  );
};

export default Sink$takeLastMixin;
