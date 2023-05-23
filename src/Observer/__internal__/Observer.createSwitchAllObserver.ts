import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __HigherOrderObservable_currentRef } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../__internal__/types.js";
import { bind, bindMethod, none, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createSwitchAllObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<DeferredObservableLike<T>> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__HigherOrderObservable_currentRef]: SerialDisposableLike;
  };

  function onDispose(
    this: TProperties & DisposableLike & DelegatingLike<ObserverLike<T>>,
  ) {
    if (
      this[__HigherOrderObservable_currentRef][SerialDisposableLike_current][
        DisposableLike_isDisposed
      ]
    ) {
      this[DelegatingLike_delegate][DisposableLike_dispose]();
    }
  }

  return createInstanceFactory(
    mix(
      include(
        Disposable_mixin,
        Observer_mixin<DeferredObservableLike<T>>(),
        Delegating_mixin(),
      ),
      function SwitchAllObserver(
        instance: Pick<
          ObserverLike<DeferredObservableLike<T>>,
          typeof SinkLike_notify
        > &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
      ): ObserverLike<DeferredObservableLike<T>> {
        init(Disposable_mixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        instance[__HigherOrderObservable_currentRef] = pipe(
          SerialDisposable_create(Disposable_disposed),
          Disposable_addTo(delegate),
        );

        pipe(instance, Disposable_onComplete(bind(onDispose, instance)));

        return instance;
      },
      props<TProperties>({
        [__HigherOrderObservable_currentRef]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            ObserverLike<DeferredObservableLike<T>> &
            SerialDisposableLike &
            DelegatingLike<ObserverLike<T>> &
            DelegatingLike<ObserverLike>,
          next: DeferredObservableLike<T>,
        ) {
          Observer_assertState(this);
          this[__HigherOrderObservable_currentRef][
            SerialDisposableLike_current
          ] = pipe(
            next,
            Observable_forEach(
              bindMethod(this[DelegatingLike_delegate], SinkLike_notify),
            ),
            Observable_subscribeWithConfig(this[DelegatingLike_delegate], this),
            Disposable_addTo(this[DelegatingLike_delegate]),
            Disposable_onComplete(() => {
              if (this[DisposableLike_isDisposed]) {
                this[DelegatingLike_delegate][DisposableLike_dispose]();
              }
            }),
          );
        },
      },
    ),
  );
})();

export default Observer_createSwitchAllObserver;
