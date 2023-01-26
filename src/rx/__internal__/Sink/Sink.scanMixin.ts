import {
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  Factory,
  Reducer,
  error,
  none,
  pipe,
  returns,
} from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink_notify from "./Sink.notify";

const Sink_scanMixin: <T, TAcc>() => Mixin3<
  SinkLike<T>,
  SinkLike<TAcc>,
  Reducer<T, TAcc>,
  Factory<TAcc>
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
  const ScanSink_private_acc = Symbol("ScanSink_private_acc");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<TAcc>;
    readonly [ScanSink_private_reducer]: Reducer<T, TAcc>;
    [ScanSink_private_acc]: TAcc;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin),
      function ScanSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ScanSink_private_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ScanSink_private_acc] = acc;
        } catch (e) {
          pipe(instance, Disposable_dispose(error(e)));
        }

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const nextAcc = this[ScanSink_private_reducer](
            this[ScanSink_private_acc],
            next,
          );
          this[ScanSink_private_acc] = nextAcc;
          pipe(this[DelegatingSinkLike_delegate], Sink_notify(nextAcc));
        },
      },
    ),
  );
})();

export default Sink_scanMixin;
