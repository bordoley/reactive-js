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
import {
  __DistinctUntilChangedObserver_equality,
  __DistinctUntilChangedObserver_hasValue,
  __DistinctUntilChangedObserver_prev,
} from "../../../__internal__/symbols.js";
import {
  ContainerOperator,
  DistinctUntilChanged,
} from "../../../containers.js";
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableDistinctUntilChanged = <C extends ObservableLike, T>(options?: {
  readonly equality?: Equality<T>;
}) => ContainerOperator<C, T, T>;

const Observable_distinctUntilChanged: ObservableDistinctUntilChanged =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      type TProperties = {
        readonly [__DistinctUntilChangedObserver_equality]: Equality<T>;
        [__DistinctUntilChangedObserver_prev]: T;
        [__DistinctUntilChangedObserver_hasValue]: boolean;
      };

      return createInstanceFactory(
        mix(
          include(Observer_delegatingMixin(), delegatingMixin()),
          function DistinctUntilChangedObserver(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            equality: Equality<T>,
          ): ObserverLike<T> {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[__DistinctUntilChangedObserver_equality] =
              equality;

            return instance;
          },
          props<TProperties>({
            [__DistinctUntilChangedObserver_equality]: none,
            [__DistinctUntilChangedObserver_prev]: none,
            [__DistinctUntilChangedObserver_hasValue]: false,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                DelegatingLike<ObserverLike<T>> &
                ObserverLike<T>,
              next: T,
            ) {
              Observer_assertState(this);

              const shouldEmit =
                !this[__DistinctUntilChangedObserver_hasValue] ||
                !this[__DistinctUntilChangedObserver_equality](
                  this[__DistinctUntilChangedObserver_prev],
                  next,
                );

              if (shouldEmit) {
                this[__DistinctUntilChangedObserver_prev] = next;
                this[__DistinctUntilChangedObserver_hasValue] = true;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
              }
            },
          },
        ),
      );
    })();

    return ((options?: { readonly equality?: Equality<T> }) => {
      const { equality = strictEquality } = options ?? {};
      return pipe(
        createDistinctUntilChangedObserver,
        partial(equality),
        Enumerable_lift,
      );
    }) as DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
  })() as ObservableDistinctUntilChanged;

export default Observable_distinctUntilChanged;
