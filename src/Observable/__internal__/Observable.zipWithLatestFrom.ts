import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as Observable from "../../Observable.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __WithLatestLike_hasLatest,
  __WithLatestLike_otherLatest,
  __WithLatestLike_selector,
  __ZipWithLatestFromObserver_TAQueue,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
  WithLatestLike,
} from "../../__internal__/types.js";
import { Function2, none, partial, pipe } from "../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObservableLike,
  ObserverLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SinkLike_notify,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_zipWithLatestFrom: Observable.Signature["zipWithLatestFrom"] =
  /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver: <TA, TB, T>(
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ) => ObserverLike<TA> = (<TA, TB, T>() => {
      type TProperties = WithLatestLike<TA, TB, T> & {
        [__ZipWithLatestFromObserver_TAQueue]: IndexedQueueLike<TA>;
      };

      const notifyDelegate = (
        observer: TProperties &
          ObserverLike<TA> &
          DelegatingLike<ObserverLike<T>>,
      ) => {
        if (
          observer[__ZipWithLatestFromObserver_TAQueue][CollectionLike_count] >
            0 &&
          observer[__WithLatestLike_hasLatest]
        ) {
          observer[__WithLatestLike_hasLatest] = false;
          const next = observer[__ZipWithLatestFromObserver_TAQueue][
            QueueLike_dequeue
          ]() as TA;
          const result = observer[__WithLatestLike_selector](
            next,
            observer[__WithLatestLike_otherLatest] as TB,
          );

          observer[DelegatingLike_delegate][SinkLike_notify](result);
        }
      };

      return createInstanceFactory(
        mix(
          include(Disposable_mixin, Observer_mixin(), Delegating_mixin()),
          function ZipWithLatestFromObserver(
            instance: Pick<ObserverLike, typeof SinkLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            other: ObservableLike<TB>,
            selector: Function2<TA, TB, T>,
          ): ObserverLike<TA> {
            init(Disposable_mixin, instance);
            Observer_mixin_initFromDelegate(instance, delegate);
            init(Delegating_mixin<ObserverLike<T>>(), instance, delegate);
            instance[__WithLatestLike_selector] = selector;
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
              Observable_forEach((otherLatest: TB) => {
                instance[__WithLatestLike_hasLatest] = true;
                instance[__WithLatestLike_otherLatest] = otherLatest;
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

            pipe(instance, Disposable_onComplete(disposeDelegate));

            return instance;
          },
          props<TProperties>({
            [__WithLatestLike_hasLatest]: false,
            [__WithLatestLike_otherLatest]: none,
            [__WithLatestLike_selector]: none,
            [__ZipWithLatestFromObserver_TAQueue]: none,
          }),
          {
            [SinkLike_notify](
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
        Observable_liftUpperBoundedBy(other),
      );
  })() as Observable.Signature["zipWithLatestFrom"];

export default Observable_zipWithLatestFrom;
