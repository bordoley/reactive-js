import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, error, none, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike_dispose,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const ScanSinkMixin_acc = Symbol("ScanSinkMixin_acc");
const ScanSinkMixin_reducer = Symbol("ScanSinkMixin_reducer");

interface TProperties<T, TAcc> {
  [ScanSinkMixin_acc]: TAcc;
  [ScanSinkMixin_reducer]: Reducer<T, TAcc>;
}

const Sink_scanMixin: <T, TAcc>() => Mixin3<
  SinkLike<T>,
  SinkLike<TAcc>,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T, TAcc>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<TAcc>>()),
      function ScanSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          TProperties<T, TAcc>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<TAcc>>(), instance, delegate);
        instance[ScanSinkMixin_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ScanSinkMixin_acc] = acc;
        } catch (e) {
          instance[DisposableLike_dispose](error(e));
        }

        return instance;
      },
      props<TProperties<T, TAcc>>({
        [ScanSinkMixin_acc]: none,
        [ScanSinkMixin_reducer]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties<T, TAcc> &
            DelegatingDisposableLike<SinkLike<TAcc>> &
            SinkLike<T>,
          next: T,
        ) {
          const nextAcc = this[ScanSinkMixin_reducer](
            this[ScanSinkMixin_acc],
            next,
          );
          this[ScanSinkMixin_acc] = nextAcc;
          this[DelegatingDisposableLike_delegate][SinkLike_notify](nextAcc);
        },
      },
    ),
  ))();

export default Sink_scanMixin;
