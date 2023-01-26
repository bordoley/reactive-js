import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Predicate, none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink$notify from "./Sink.notify";

const Sink$keepMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>> =
  /*@__PURE__*/ (<T>() => {
    const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");

    type TProperties = {
      readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
      readonly [KeepSink_private_predicate]: Predicate<T>;
    };

    return returns(
      mix(
        include(Disposable$delegatingMixin),
        function KeepSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          predicate: Predicate<T>,
        ): SinkLike<T> {
          init(Disposable$delegatingMixin, instance, delegate);

          instance[DelegatingSinkLike_delegate] = delegate;
          instance[KeepSink_private_predicate] = predicate;

          return instance;
        },
        props<TProperties>({
          [DelegatingSinkLike_delegate]: none,
          [KeepSink_private_predicate]: none,
        }),
        {
          [SinkLike_notify](this: TProperties, next: T) {
            if (this[KeepSink_private_predicate](next)) {
              pipe(this[DelegatingSinkLike_delegate], Sink$notify(next));
            }
          },
        },
      ),
    );
  })();

export default Sink$keepMixin;
