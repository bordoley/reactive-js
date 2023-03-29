import {
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  TakeWhileObserver_inclusive,
  TakeWhileObserver_predicate,
} from "../../../__internal__/symbols.js";
import { DelegatingDisposableLike } from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

type ObservableTakeWhile = <C extends ObservableLike, T>(
  predicate: Predicate<T>,
  options?: {
    readonly inclusive?: boolean | undefined;
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
        include(
          Disposable_delegatingMixin<ObserverLike<T>>(),
          Observer_mixin<T>(),
        ),
        function TakeWhileObserver(
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
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_capacity],
            delegate[QueueableLike_backpressureStrategy],
          );

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
              DelegatingDisposableLike<ObserverLike<T>> &
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
      Observable_liftEnumerableOperator,
    );
  };
})() as ObservableTakeWhile;

export default Observable_takeWhile;
