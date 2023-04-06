import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DistinctUntilChangedObserver_equality,
  DistinctUntilChangedObserver_hasValue,
  DistinctUntilChangedObserver_prev,
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

import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "../../Observer/__internal__/Observer.mixin.js";

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
        readonly [DistinctUntilChangedObserver_equality]: Equality<T>;
        [DistinctUntilChangedObserver_prev]: T;
        [DistinctUntilChangedObserver_hasValue]: boolean;
      };

      return createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), Observer_mixin()),
          function DistinctUntilChangedObserver(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            equality: Equality<T>,
          ): ObserverLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);

            instance[DistinctUntilChangedObserver_equality] = equality;

            return instance;
          },
          props<TProperties>({
            [DistinctUntilChangedObserver_equality]: none,
            [DistinctUntilChangedObserver_prev]: none,
            [DistinctUntilChangedObserver_hasValue]: false,
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
                !this[DistinctUntilChangedObserver_hasValue] ||
                !this[DistinctUntilChangedObserver_equality](
                  this[DistinctUntilChangedObserver_prev],
                  next,
                );

              if (shouldEmit) {
                this[DistinctUntilChangedObserver_prev] = next;
                this[DistinctUntilChangedObserver_hasValue] = true;
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
