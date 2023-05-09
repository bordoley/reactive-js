import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __ThrowIfEmptyObserver_isEmpty } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Container, ObservableContainer } from "../../containers.js";
import {
  Factory,
  Optional,
  error,
  none,
  partial,
  pipe,
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";

type ObservableThrowIfEmpty = <C extends ObservableContainer.Type, T>(
  factory: Factory<unknown>,
  options?: undefined,
) => Container.Operator<C, T, T>;
const Observable_throwIfEmpty: ObservableThrowIfEmpty = /*@__PURE__*/ (() => {
  const createThrowIfEmptyObserver = (<T>() => {
    type TProperties = {
      [__ThrowIfEmptyObserver_isEmpty]: boolean;
    };

    return createInstanceFactory(
      mix(
        include(Delegating_mixin(), Observer_mixin<T>()),
        function ThrowIfEmptyObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          factory: Factory<unknown>,
        ): ObserverLike<T> {
          Observer_mixin_initFromDelegate(instance, delegate);
          init(Delegating_mixin(), instance, delegate);

          pipe(
            instance,
            Disposable_onComplete(() => {
              let err: Optional<Error> = none;

              if (instance[__ThrowIfEmptyObserver_isEmpty]) {
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
          [__ThrowIfEmptyObserver_isEmpty]: true,
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

            this[__ThrowIfEmptyObserver_isEmpty] = false;
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          },
        },
      ),
    );
  })();

  return (factory: Factory<unknown>) =>
    pipe(createThrowIfEmptyObserver, partial(factory), Enumerable_lift);
})() as ObservableThrowIfEmpty;

export default Observable_throwIfEmpty;
