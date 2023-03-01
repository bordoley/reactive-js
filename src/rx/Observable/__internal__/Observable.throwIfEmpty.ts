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
import { ThrowIfEmpty } from "../../../containers.js";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.js";
import { Factory, Optional, error, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (<T>() => {
      const ThrowIfEmptySinkMixin_isEmpty = Symbol(
        "ThrowIfEmptySinkMixin_isEmpty",
      );

      type TProperties = {
        [ThrowIfEmptySinkMixin_isEmpty]: boolean;
      };

      return createInstanceFactory(
        mix(
          include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
          function ThrowIfEmptySinkMixin(
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
              delegate[ObserverLike_scheduler],
            );

            pipe(
              instance,
              Disposable_addTo(delegate),
              Disposable_onComplete(() => {
                let err: Optional<Error> = none;

                if (instance[ThrowIfEmptySinkMixin_isEmpty]) {
                  try {
                    err = error(factory());
                  } catch (e) {
                    err = error(e);
                  }
                }

                pipe(delegate, Disposable_dispose(err));
              }),
            );

            return instance;
          },
          props<TProperties>({
            [ThrowIfEmptySinkMixin_isEmpty]: true,
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

              this[ThrowIfEmptySinkMixin_isEmpty] = false;
              this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
          },
        ),
      );
    })();

    return pipe(
      createThrowIfEmptyObserver,
      StatefulContainer_throwIfEmpty(Observable_liftEnumerableOperator),
    );
  })();

export default Observable_throwIfEmpty;
