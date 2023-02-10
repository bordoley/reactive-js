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
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import {
  Function2,
  Optional,
  getLength,
  isEmpty,
  none,
  partial,
  pipe,
} from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  SinkLike_notify,
  ZipWithLatestFrom,
} from "../../../rx";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin";
import Sink_notify from "../../Sink/__internal__/Sink.notify";
import Observable_forEach from "./Observable.forEach";
import Observable_isEnumerable from "./Observable.isEnumerable";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";

const Observable_zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"] =
  /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver: <TA, TB, T>(
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ) => ObserverLike<TA> = (<TA, TB, T>() => {
      const typedObserverMixin = Observer_mixin<TA>();

      const ZipWithLatestFromObserver_hasLatest = Symbol(
        "ZipWithLatestFromObserver_hasLatest",
      );
      const ZipWithLatestFromObserver_otherLatest = Symbol(
        "ZipWithLatestFromObserver_otherLatest",
      );
      const ZipWithLatestFromObserver_queue = Symbol(
        "ZipWithLatestFromObserver_queue",
      );
      const ZipWithLatestFromObserver_selector = Symbol(
        "ZipWithLatestFromObserver_selector",
      );

      type TProperties = {
        [ZipWithLatestFromObserver_hasLatest]: boolean;
        [ZipWithLatestFromObserver_otherLatest]: Optional<TB>;
        readonly [ZipWithLatestFromObserver_queue]: TA[];
        readonly [ZipWithLatestFromObserver_selector]: Function2<TA, TB, T>;
      };

      const notifyDelegate = (
        observer: TProperties &
          ObserverLike<TA> &
          DelegatingLike<ObserverLike<T>>,
      ) => {
        if (
          getLength(observer[ZipWithLatestFromObserver_queue]) > 0 &&
          observer[ZipWithLatestFromObserver_hasLatest]
        ) {
          observer[ZipWithLatestFromObserver_hasLatest] = false;
          const next = observer[ZipWithLatestFromObserver_queue].shift() as TA;
          const result = observer[ZipWithLatestFromObserver_selector](
            next,
            observer[ZipWithLatestFromObserver_otherLatest] as TB,
          );
          pipe(observer[DelegatingLike_delegate], Sink_notify(result));
        }
      };

      return createInstanceFactory(
        mix(
          include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
          function ZipWithLatestFromObserver(
            instance: Pick<ObserverLike, typeof SinkLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            other: ObservableLike<TB>,
            selector: Function2<TA, TB, T>,
          ): ObserverLike<TA> {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            init(delegatingMixin<ObserverLike<T>>(), instance, delegate);

            instance[ZipWithLatestFromObserver_queue] = [];
            instance[ZipWithLatestFromObserver_selector] = selector;

            const disposeDelegate = () => {
              if (
                Disposable_isDisposed(instance) &&
                Disposable_isDisposed(otherSubscription)
              ) {
                pipe(delegate, Disposable_dispose());
              }
            };

            const otherSubscription = pipe(
              other,
              Observable_forEach(otherLatest => {
                instance[ZipWithLatestFromObserver_hasLatest] = true;
                instance[ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);

                if (
                  Disposable_isDisposed(instance) &&
                  isEmpty(instance[ZipWithLatestFromObserver_queue])
                ) {
                  pipe(instance[DelegatingLike_delegate], Disposable_dispose());
                }
              }),
              Observable_subscribe(Observer_getScheduler(delegate)),
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
            [ZipWithLatestFromObserver_queue]: none,
            [ZipWithLatestFromObserver_selector]: none,
          }),
          {
            [SinkLike_notify](
              this: TProperties &
                ObserverLike<TA> &
                DelegatingLike<ObserverLike<T>>,
              next: TA,
            ) {
              this[ZipWithLatestFromObserver_queue].push(next);
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
        Observable_lift(
          Observable_isEnumerable(other),
          Observable_isRunnable(other),
        ),
      ) as ContainerOperator<ObservableLike, TA, T>;
  })();

export default Observable_zipWithLatestFrom;
