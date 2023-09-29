import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
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
} from "../../../__internal__/mixins.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";

import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";

const Observer_createSwitchAllObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<DeferredObservableBaseLike<T>> = /*@__PURE__*/ (<T>() => {
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
        Observer_mixin<DeferredObservableBaseLike<T>>(),
        Delegating_mixin(),
      ),
      function SwitchAllObserver(
        instance: Pick<
          ObserverLike<DeferredObservableBaseLike<T>>,
          typeof SinkLike_notify
        > &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
      ): ObserverLike<DeferredObservableBaseLike<T>> {
        init(Disposable_mixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        instance[__HigherOrderObservable_currentRef] = pipe(
          SerialDisposable_create(Disposable.disposed),
          Disposable.addTo(delegate),
        );

        pipe(instance, Disposable.onComplete(bind(onDispose, instance)));

        return instance;
      },
      props<TProperties>({
        [__HigherOrderObservable_currentRef]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            ObserverLike<DeferredObservableBaseLike<T>> &
            SerialDisposableLike &
            DelegatingLike<ObserverLike<T>> &
            DelegatingLike<ObserverLike>,
          next: DeferredObservableBaseLike<T>,
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
            Disposable.addTo(this[DelegatingLike_delegate]),
            Disposable.onComplete(() => {
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
