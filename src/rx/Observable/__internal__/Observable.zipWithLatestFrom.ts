import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __ZipWithLatestFromObserver_TAQueue,
  __ZipWithLatestFromObserver_hasLatest,
  __ZipWithLatestFromObserver_otherLatest,
  __ZipWithLatestFromObserver_selector,
} from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Function2,
  Optional,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ZipWithLatestFrom,
} from "../../../rx.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"] =
  /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver: <TA, TB, T>(
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ) => ObserverLike<TA> = (<TA, TB, T>() => {
      type TProperties = {
        [__ZipWithLatestFromObserver_hasLatest]: boolean;
        [__ZipWithLatestFromObserver_otherLatest]: Optional<TB>;
        readonly [__ZipWithLatestFromObserver_selector]: Function2<TA, TB, T>;
        readonly [__ZipWithLatestFromObserver_TAQueue]: IndexedQueueLike<TA>;
      };

      const notifyDelegate = (
        observer: TProperties &
          ObserverLike<TA> &
          DelegatingLike<ObserverLike<T>>,
      ) => {
        if (
          observer[__ZipWithLatestFromObserver_TAQueue][CollectionLike_count] >
            0 &&
          observer[__ZipWithLatestFromObserver_hasLatest]
        ) {
          observer[__ZipWithLatestFromObserver_hasLatest] = false;
          const next = observer[__ZipWithLatestFromObserver_TAQueue][
            QueueLike_dequeue
          ]() as TA;
          const result = observer[__ZipWithLatestFromObserver_selector](
            next,
            observer[__ZipWithLatestFromObserver_otherLatest] as TB,
          );

          observer[DelegatingLike_delegate][ObserverLike_notify](result);
        }
      };

      return createInstanceFactory(
        mix(
          include(Observer_mixin(), Delegating_mixin()),
          function ZipWithLatestFromObserver(
            instance: Pick<ObserverLike, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            other: ObservableLike<TB>,
            selector: Function2<TA, TB, T>,
          ): ObserverLike<TA> {
            init(Observer_mixin(), instance, delegate, delegate);
            init(Delegating_mixin<ObserverLike<T>>(), instance, delegate);
            instance[__ZipWithLatestFromObserver_selector] = selector;
            instance[__ZipWithLatestFromObserver_TAQueue] =
              Queue_createIndexedQueue(
                delegate[BufferLike_capacity],
                delegate[QueueableLike_backpressureStrategy],
              );

            const disposeDelegate = () => {
              if (
                instance[DisposableLike_isDisposed] &&
                otherSubscription[DisposableLike_isDisposed]
              ) {
                delegate[DisposableLike_dispose]();
              }
            };

            const otherSubscription = pipe(
              other,
              Observable_forEach<ObservableLike, TB>(otherLatest => {
                instance[__ZipWithLatestFromObserver_hasLatest] = true;
                instance[__ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);

                if (
                  instance[DisposableLike_isDisposed] &&
                  instance[__ZipWithLatestFromObserver_TAQueue][
                    CollectionLike_count
                  ] === 0
                ) {
                  instance[DelegatingLike_delegate][DisposableLike_dispose]();
                }
              }),
              Observable_subscribeWithConfig(delegate, delegate),
              Disposable_onComplete(disposeDelegate),
              Disposable_addTo(delegate),
            );

            pipe(
              instance,
              Disposable_addTo(delegate),
              Disposable_onComplete(disposeDelegate),
            );

            return instance;
          },
          props<TProperties>({
            [__ZipWithLatestFromObserver_hasLatest]: false,
            [__ZipWithLatestFromObserver_otherLatest]: none,
            [__ZipWithLatestFromObserver_selector]: none,
            [__ZipWithLatestFromObserver_TAQueue]: none,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                ObserverLike<TA> &
                DelegatingLike<ObserverLike<T>> &
                QueueLike<TA>,
              next: TA,
            ) {
              Observer_assertState(this);
              this[__ZipWithLatestFromObserver_TAQueue][QueueableLike_enqueue](
                next,
              );
              notifyDelegate(this);
            },
          },
        ),
      );
    })();

    return <TA, TB, T>(
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ) =>
      pipe(
        createZipWithLatestFromObserver,
        partial(other, selector),
        Observable_lift(other),
      ) as ContainerOperator<ObservableLike, TA, T>;
  })();

export default Observable_zipWithLatestFrom;
