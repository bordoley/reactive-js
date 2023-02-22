import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { getLength, none, pipe } from "../../../functions.js";
import {
  ReactiveContainerLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";

const Sink_takeLastMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  fromReadonlyArray: (v: readonly T[]) => C,
) => Mixin2<SinkLike<T>, TSink, number> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  fromReadonlyArray: (v: readonly T[]) => C,
) => {
  const TakeLastSinkMixin_last = Symbol("TakeLastSinkMixin_last");
  const TakeLastSinkMixin_takeLastCount = Symbol(
    "TakeLastSinkMixin_takeLastCount",
  );

  type TProperties = {
    readonly [TakeLastSinkMixin_takeLastCount]: number;
    readonly [TakeLastSinkMixin_last]: T[];
  };

  return mix(
    include(Disposable_mixin),
    function TakeLastSinkMixin(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      takeLastCount: number,
    ): SinkLike<T> {
      init(Disposable_mixin, instance);

      instance[TakeLastSinkMixin_takeLastCount] = takeLastCount;
      instance[TakeLastSinkMixin_last] = [];

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          pipe(
            instance[TakeLastSinkMixin_last],
            fromReadonlyArray,
            ReactiveContainer_sinkInto(delegate),
          );
        }),
      );

      return instance;
    },
    props<TProperties>({
      [TakeLastSinkMixin_takeLastCount]: 0,
      [TakeLastSinkMixin_last]: none,
    }),
    {
      [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
        const { [TakeLastSinkMixin_last]: last } = this;

        last.push(next);

        if (getLength(last) > this[TakeLastSinkMixin_takeLastCount]) {
          last.shift();
        }
      },
    },
  );
};

export default Sink_takeLastMixin;
