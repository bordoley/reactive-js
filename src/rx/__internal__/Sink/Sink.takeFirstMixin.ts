import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink_notify from "./Sink.notify";

const Sink_takeFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number> =
  /*@__PURE__*/ (<T>() => {
    const TakeFirstSink_private_takeCount = Symbol(
      "TakeFirstSink_private_takeCount",
    );

    const TakeFirstSink_private_count = Symbol("TakeFirstSink_private_count");

    type TProperties = {
      readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
      readonly [TakeFirstSink_private_takeCount]: number;
      [TakeFirstSink_private_count]: number;
    };

    return returns(
      mix(
        include(Disposable_delegatingMixin),
        function TakeFirstSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          takeCount: number,
        ): SinkLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);

          instance[DelegatingSinkLike_delegate] = delegate;
          instance[TakeFirstSink_private_takeCount] = takeCount;

          if (takeCount === 0) {
            pipe(instance, Disposable_dispose());
          }

          return instance;
        },
        props<TProperties>({
          [DelegatingSinkLike_delegate]: none,
          [TakeFirstSink_private_takeCount]: 0,
          [TakeFirstSink_private_count]: 0,
        }),
        {
          [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
            this[TakeFirstSink_private_count]++;
            pipe(this[DelegatingSinkLike_delegate], Sink_notify(next));
            if (
              this[TakeFirstSink_private_count] >=
              this[TakeFirstSink_private_takeCount]
            ) {
              pipe(this, Disposable_dispose());
            }
          },
        },
      ),
    );
  })();

export default Sink_takeFirstMixin;
