import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { SideEffect1, none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink$notify from "./Sink.notify";

export const Sink$forEachMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  SideEffect1<T>
> = /*@__PURE__*/ (<T>() => {
  const ForEachSink_private_effect = Symbol("ForEachSink_private_effect");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    readonly [ForEachSink_private_effect]: SideEffect1<T>;
  };

  return returns(
    mix(
      include(Disposable$delegatingMixin),
      function ForEachSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        effect: SideEffect1<T>,
      ): SinkLike<T> {
        init(Disposable$delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ForEachSink_private_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [ForEachSink_private_effect]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          this[ForEachSink_private_effect](next);
          pipe(this[DelegatingSinkLike_delegate], Sink$notify(next));
        },
      },
    ),
  );
})();

export default Sink$forEachMixin;
