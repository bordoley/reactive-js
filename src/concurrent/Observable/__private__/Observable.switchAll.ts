import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observer_createSwitchAllObserver: <T>(
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

  return createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DisposableMixin, DelegatingObserverMixin<ObservableLike<T>>()),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ObservableLike<T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ObservableLike<T>> {
          init(DisposableMixin, instance);
          init(DelegatingObserverMixin(), instance, delegate);

          instance[SwitchAllObserver_delegate] = delegate;

          instance[SwitchAllObserver_currentRef] = pipe(
            SerialDisposable.create(Disposable.disposed),
            Disposable.addTo(delegate),
          );

          pipe(instance, Disposable.onComplete(bind(onDispose, instance)));

          return instance;
        },
        props<TProperties>({
          [SwitchAllObserver_currentRef]: none,
          [SwitchAllObserver_delegate]: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<ObservableLike<T>> &
              SerialDisposableLike,
            next: ObservableLike<T>,
          ) {
            this[SwitchAllObserver_currentRef][SerialDisposableLike_current] =
              pipe(
                next,
                Observable_forEach(
                  bindMethod(this[SwitchAllObserver_delegate], SinkLike_notify),
                ),
                Observable_subscribeWithConfig(
                  this[SwitchAllObserver_delegate],
                  this,
                ),
                Disposable.addTo(this[SwitchAllObserver_delegate]),
                Disposable.onComplete(() => {
                  if (this[DisposableLike_isDisposed]) {
                    this[SwitchAllObserver_delegate][DisposableLike_dispose]();
                  }
                }),
              );
          },
        },
      ),
    ),
  );
})();

const Observable_switchAll: Observable.Signature["switchAll"] = ((options?: {
  readonly [ObservableLike_isDeferred]?: boolean;
  readonly [ObservableLike_isPure]?: boolean;
  readonly [ObservableLike_isRunnable]?: boolean;
}) =>
  Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
  })(Observer_createSwitchAllObserver)) as Observable.Signature["switchAll"];

export default Observable_switchAll;
