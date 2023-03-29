import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ThrowIfEmptyObserver_isEmpty } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Factory,
  Optional,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

type ObservableThrowIfEmpty = <C extends ObservableLike, T>(
  factory: Factory<unknown>,
  options?: undefined,
) => ContainerOperator<C, T, T>;
const Observable_throwIfEmpty: ObservableThrowIfEmpty = /*@__PURE__*/ (() => {
  const createThrowIfEmptyObserver = (<T>() => {
    type TProperties = {
      [ThrowIfEmptyObserver_isEmpty]: boolean;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
        function ThrowIfEmptyObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          factory: Factory<unknown>,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
          init(delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<T>(),
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_capacity],
            delegate[QueueableLike_backpressureStrategy],
          );

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              let err: Optional<Error> = none;

              if (instance[ThrowIfEmptyObserver_isEmpty]) {
                try {
                  err = error(factory());
                } catch (e) {
                  err = error(e);
                }
              }
              delegate[DisposableLike_dispose](err);
            }),
          );

          return instance;
        },
        props<TProperties>({
          [ThrowIfEmptyObserver_isEmpty]: true,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DisposableLike &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          },
        },
      ),
    );
  })();

  return (factory: Factory<unknown>) =>
    pipe(
      createThrowIfEmptyObserver,
      partial(factory),
      Observable_liftEnumerableOperator,
    );
})() as ObservableThrowIfEmpty;

export default Observable_throwIfEmpty;
