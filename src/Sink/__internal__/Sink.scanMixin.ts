import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  ReducerAccumulatorLike,
  ReducerAccumulatorLike_acc,
  ReducerAccumulatorLike_reducer,
} from "../../__internal__/types.js";
import { Factory, Reducer, error, none, returns } from "../../functions.js";
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_notify,
} from "../../types.js";

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
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function ScanObserver(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          ReducerAccumulatorLike<T, TAcc>,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[ReducerAccumulatorLike_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ReducerAccumulatorLike_acc] = acc;
        } catch (e) {
          instance[DisposableLike_dispose](error(e));
        }

        return instance;
      },
      props<ReducerAccumulatorLike<T, TAcc>>({
        [ReducerAccumulatorLike_acc]: none,
        [ReducerAccumulatorLike_reducer]: none,
      }),
      {
        [SinkLike_notify](
          this: ReducerAccumulatorLike<T, TAcc> &
            DelegatingLike<SinkLike<TAcc>> &
            SinkLike<T>,
          next: T,
        ) {
          const nextAcc = this[ReducerAccumulatorLike_reducer](
            this[ReducerAccumulatorLike_acc],
            next,
          );
          this[ReducerAccumulatorLike_acc] = nextAcc;
          this[DelegatingLike_delegate][SinkLike_notify](nextAcc);
        },
      },
    ),
  ))();

export default Sink_scanMixin;
