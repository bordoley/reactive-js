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
  ZipWithLatestFromObserver_TAQueue,
  ZipWithLatestFromObserver_hasLatest,
  ZipWithLatestFromObserver_otherLatest,
  ZipWithLatestFromObserver_selector,
} from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.internal.js";
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
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
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
        [ZipWithLatestFromObserver_hasLatest]: boolean;
        [ZipWithLatestFromObserver_otherLatest]: Optional<TB>;
        readonly [ZipWithLatestFromObserver_selector]: Function2<TA, TB, T>;
        readonly [ZipWithLatestFromObserver_TAQueue]: IndexedQueueLike<TA>;
      };

      const notifyDelegate = (
        observer: TProperties &
          ObserverLike<TA> &
          DelegatingLike<ObserverLike<T>>,
      ) => {
        if (
          observer[ZipWithLatestFromObserver_TAQueue][CollectionLike_count] >
            0 &&
          observer[ZipWithLatestFromObserver_hasLatest]
        ) {
          observer[ZipWithLatestFromObserver_hasLatest] = false;
          const next = observer[ZipWithLatestFromObserver_TAQueue][
            QueueLike_dequeue
          ]() as TA;
          const result = observer[ZipWithLatestFromObserver_selector](
            next,
            observer[ZipWithLatestFromObserver_otherLatest] as TB,
          );

          observer[DelegatingLike_delegate][ObserverLike_notify](result);
        }
      };

      return createInstanceFactory(
        mix(
          include(Observer_mixin(), delegatingMixin()),
          function ZipWithLatestFromObserver(
            instance: Pick<ObserverLike, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            other: ObservableLike<TB>,
            selector: Function2<TA, TB, T>,
          ): ObserverLike<TA> {
            init(Observer_mixin(), instance, delegate, delegate);
            init(delegatingMixin<ObserverLike<T>>(), instance, delegate);
            instance[ZipWithLatestFromObserver_selector] = selector;
            instance[ZipWithLatestFromObserver_TAQueue] =
              IndexedQueue_createFifoQueue(
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
                instance[ZipWithLatestFromObserver_hasLatest] = true;
                instance[ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);

                if (
                  instance[DisposableLike_isDisposed] &&
                  instance[ZipWithLatestFromObserver_TAQueue][
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
            [ZipWithLatestFromObserver_hasLatest]: false,
            [ZipWithLatestFromObserver_otherLatest]: none,
            [ZipWithLatestFromObserver_selector]: none,
            [ZipWithLatestFromObserver_TAQueue]: none,
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
              this[ZipWithLatestFromObserver_TAQueue][QueueableLike_enqueue](
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
