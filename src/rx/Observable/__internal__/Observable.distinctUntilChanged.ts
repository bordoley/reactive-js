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
import { DistinctUntilChanged } from "../../../containers.js";
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

const Observable_distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      const DistinctUntilChangedObserverMixin_equality = Symbol(
        "DistinctUntilChangedObserverMixin_equality",
      );
      const DistinctUntilChangedObserverMixin_prev = Symbol(
        "DistinctUntilChangedObserverMixin_prev",
      );
      const DistinctUntilChangedObserverMixin_hasValue = Symbol(
        "DistinctUntilChangedObserverMixin_hasValue",
      );

      type TProperties = {
        readonly [DistinctUntilChangedObserverMixin_equality]: Equality<T>;
        [DistinctUntilChangedObserverMixin_prev]: T;
        [DistinctUntilChangedObserverMixin_hasValue]: boolean;
      };

      return createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), Observer_mixin()),
          function DistinctUntilChangedObserverMixin(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            equality: Equality<T>,
          ): ObserverLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(
              Observer_mixin(),
              instance,
              delegate[DispatcherLike_scheduler],
            );

            instance[DistinctUntilChangedObserverMixin_equality] = equality;

            return instance;
          },
          props<TProperties>({
            [DistinctUntilChangedObserverMixin_equality]: none,
            [DistinctUntilChangedObserverMixin_prev]: none,
            [DistinctUntilChangedObserverMixin_hasValue]: false,
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
                !this[DistinctUntilChangedObserverMixin_hasValue] ||
                !this[DistinctUntilChangedObserverMixin_equality](
                  this[DistinctUntilChangedObserverMixin_prev],
                  next,
                );

              if (shouldEmit) {
                this[DistinctUntilChangedObserverMixin_prev] = next;
                this[DistinctUntilChangedObserverMixin_hasValue] = true;
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
        Observable_liftEnumerableOperator,
      );
    }) as DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
  })();

export default Observable_distinctUntilChanged;
