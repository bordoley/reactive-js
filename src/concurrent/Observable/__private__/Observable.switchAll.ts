import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const createSwitchAllObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<ObservableLike<T>> = /*@__PURE__*/ (<T>() => {
  const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");
  const SwitchAllObserver_delegate = Symbol("SwitchAllObserver_delegate");

  type TProperties = {
    readonly [SwitchAllObserver_currentRef]: SerialDisposableLike;
    readonly [SwitchAllObserver_delegate]: ObserverLike<T>;
  };

  function onDispose(this: TProperties & DisposableLike) {
    if (
      this[SwitchAllObserver_currentRef][SerialDisposableLike_current][
        DisposableLike_isDisposed
      ]
    ) {
      this[SwitchAllObserver_delegate][DisposableLike_dispose]();
    }
  }

  return mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin<ObservableLike<T>>()),
    function SwitchAllObserver(
      instance: Pick<
        ObserverLike<ObservableLike<T>>,
        typeof ObserverLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
    ): ObserverLike<ObservableLike<T>> {
      init(DisposableMixin, instance);
      init(DelegatingObserverMixin(), instance, delegate);

      instance[SwitchAllObserver_delegate] = delegate;

      instance[SwitchAllObserver_currentRef] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

      pipe(instance, DisposableContainer.onComplete(bind(onDispose, instance)));

      return instance;
    },
    props<TProperties>({
      [SwitchAllObserver_currentRef]: none,
      [SwitchAllObserver_delegate]: none,
    }),
    {
      [ObserverLike_notify](
        this: TProperties &
          ObserverLike<ObservableLike<T>> &
          SerialDisposableLike,
        next: ObservableLike<T>,
      ) {
        Observer_assertObserverState(this);

        this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = pipe(
          next,
          Observable_forEach(
            bindMethod(this[SwitchAllObserver_delegate], ObserverLike_notify),
          ),
          Observable_subscribeWithConfig(
            this[SwitchAllObserver_delegate],
            this,
          ),
          Disposable.addTo(this[SwitchAllObserver_delegate]),
          DisposableContainer.onComplete(() => {
            if (this[DisposableLike_isDisposed]) {
              this[SwitchAllObserver_delegate][DisposableLike_dispose]();
            }
          }),
        );
      },
    },
  );
})();

const Observable_switchAll: Observable.Signature["switchAll"] = ((options?: {
  readonly innerType?: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };
}) =>
  Observable_lift({
    [ObservableLift_isStateless]: false,
    ...(options?.innerType ?? {
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isPure]: true,
      [ObservableLike_isRunnable]: true,
    }),
  })(createSwitchAllObserver)) as Observable.Signature["switchAll"];

export default Observable_switchAll;
