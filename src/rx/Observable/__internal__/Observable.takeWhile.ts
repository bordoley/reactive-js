import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike_delegate,
  TakeWhileObserver_inclusive,
  TakeWhileObserver_predicate,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableTakeWhile = <C extends ObservableLike, T>(
  predicate: Predicate<T>,
  options?: {
    readonly inclusive?: boolean;
  },
) => ContainerOperator<C, T, T>;

const Observable_takeWhile: ObservableTakeWhile = /*@__PURE__*/ (<T>() => {
  const createTakeWhileObserver: (
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [TakeWhileObserver_predicate]: Predicate<T>;
      readonly [TakeWhileObserver_inclusive]: boolean;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), delegatingMixin()),
        function TakeWhileObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(delegatingMixin(), instance, delegate);
          instance[TakeWhileObserver_predicate] = predicate;
          instance[TakeWhileObserver_inclusive] = inclusive;

          return instance;
        },
        props<TProperties>({
          [TakeWhileObserver_predicate]: none,
          [TakeWhileObserver_inclusive]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const satisfiesPredicate = this[TakeWhileObserver_predicate](next);

            if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
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
