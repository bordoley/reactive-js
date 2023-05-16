import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import {
  createInstanceFactory,
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
import { Factory, Reducer, error, none } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createScanObserver: <T, TAcc>(
  delegate: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  return createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function ScanObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          ReducerAccumulatorLike<T, TAcc>,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
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
            DelegatingLike<ObserverLike<TAcc>> &
            ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          const nextAcc = this[ReducerAccumulatorLike_reducer](
            this[ReducerAccumulatorLike_acc],
            next,
          );
          this[ReducerAccumulatorLike_acc] = nextAcc;
          this[DelegatingLike_delegate][SinkLike_notify](nextAcc);
        },
      },
    ),
  );
})();

export default Observer_createScanObserver;
