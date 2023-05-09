import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __TakeWhileObserver_inclusive } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import { Predicate, none, partial, pipe } from "../../functions.js";
import {
  Containers,
  DisposableLike_dispose,
  ObservableContainer,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";

type ObservableTakeWhile = <C extends ObservableContainer, T>(
  predicate: Predicate<T>,
  options?: {
    readonly inclusive?: boolean;
  },
) => Containers.Operator<C, T, T>;

const Observable_takeWhile: ObservableTakeWhile = /*@__PURE__*/ (<T>() => {
  const createTakeWhileObserver: (
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = PredicatedLike<T> & {
      readonly [__TakeWhileObserver_inclusive]: boolean;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), Delegating_mixin()),
        function TakeWhileObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);
          instance[PredicatedLike_predicate] = predicate;
          instance[__TakeWhileObserver_inclusive] = inclusive;

          return instance;
        },
        props<TProperties>({
          [PredicatedLike_predicate]: none,
          [__TakeWhileObserver_inclusive]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const satisfiesPredicate = this[PredicatedLike_predicate](next);

            if (satisfiesPredicate || this[__TakeWhileObserver_inclusive]) {
              this[DelegatingLike_delegate][ObserverLike_notify](next);
            }

            if (!satisfiesPredicate) {
              this[DisposableLike_dispose]();
            }
          },
        },
      ),
    );
  })();

  return (
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ) => {
    const { inclusive = false } = options;
    return pipe(
      createTakeWhileObserver,
      partial(predicate, inclusive),
      Enumerable_lift,
    );
  };
})() as ObservableTakeWhile;

export default Observable_takeWhile;
