import {
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeWhile } from "../../../containers.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import { DelegatingDisposableLike } from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

const Observable_takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const createTakeWhileObserver: (
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => ObserverLike<T> = (<T>() => {
      const TakeWhileObserverMixin_predicate = Symbol(
        "TakeWhileObserverMixin_predicate",
      );
      const TakeWhileObserverMixin_inclusive = Symbol(
        "TakeWhileObserverMixin_inclusive",
      );

      type TProperties = {
        readonly [TakeWhileObserverMixin_predicate]: Predicate<T>;
        readonly [TakeWhileObserverMixin_inclusive]: boolean;
      };

      return createInstanceFactory(
        mix(
          include(
            Disposable_delegatingMixin<ObserverLike<T>>(),
            Observer_mixin<T>(),
          ),
          function TakeWhileObserverMixin(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): ObserverLike<T> {
            init(
              Disposable_delegatingMixin<ObserverLike<T>>(),
              instance,
              delegate,
            );
            init(
              Observer_mixin<T>(),
              instance,
              delegate[ObserverLike_scheduler],
            );

            instance[TakeWhileObserverMixin_predicate] = predicate;
            instance[TakeWhileObserverMixin_inclusive] = inclusive;

            return instance;
          },
          props<TProperties>({
            [TakeWhileObserverMixin_predicate]: none,
            [TakeWhileObserverMixin_inclusive]: none,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                DelegatingDisposableLike<ObserverLike<T>> &
                ObserverLike<T>,
              next: T,
            ) {
              Observer_assertState(this);

              const satisfiesPredicate =
                this[TakeWhileObserverMixin_predicate](next);

              if (
                satisfiesPredicate ||
                this[TakeWhileObserverMixin_inclusive]
              ) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
              }

              if (!satisfiesPredicate) {
                pipe(this, Disposable_dispose());
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
        Observable_liftEnumerableOperator,
      );
    };
  })();

export default Observable_takeWhile;
