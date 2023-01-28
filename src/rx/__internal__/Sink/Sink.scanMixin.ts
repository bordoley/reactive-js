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

const Sink_scanMixin: <T, TAcc>() => Mixin3<
  SinkLike<T>,
  SinkLike<TAcc>,
  Reducer<T, TAcc>,
  Factory<TAcc>
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanSinkMixin_reducer = Symbol("ScanSinkMixin_reducer");
  const ScanSinkMixin_acc = Symbol("ScanSinkMixin_acc");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<TAcc>;
    readonly [ScanSinkMixin_reducer]: Reducer<T, TAcc>;
    [ScanSinkMixin_acc]: TAcc;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin),
      function ScanSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[ScanSinkMixin_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ScanSinkMixin_acc] = acc;
        } catch (e) {
          pipe(instance, Disposable_dispose(error(e)));
        }

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [ScanSinkMixin_reducer]: none,
        [ScanSinkMixin_acc]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const nextAcc = this[ScanSinkMixin_reducer](
            this[ScanSinkMixin_acc],
            next,
          );
          this[ScanSinkMixin_acc] = nextAcc;
          this[DelegatingSinkLike_delegate][SinkLike_notify](nextAcc);
        },
      },
    ),
  );
})();

export default Sink_scanMixin;
