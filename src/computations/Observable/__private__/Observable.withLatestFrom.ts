import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import {
  Function2,
  Optional,
  bind,
  none,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ConsumerLike,
  DisposableLike,
  ObserverLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

const createWithLatestFromObserver: <TA, TB, T>(
  delegate: ObserverLike<T>,
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB, T>() => {
  const WithLatestFromObserver_hasLatest = Symbol(
    "WithLatestFromObserver_hasLatest",
  );
  const WithLatestFromObserver_otherLatest = Symbol(
    "WithLatestFromObserver_otherLatest",
  );
  const WithLatestFromObserver_selector = Symbol(
    "WithLatestFromObserver_selector",
  );

  type TProperties = {
    [WithLatestFromObserver_hasLatest]: boolean;
    [WithLatestFromObserver_otherLatest]: Optional<TB>;
    [WithLatestFromObserver_selector]: Function2<TA, TB, T>;
  };

  function onWithLatestFromObserverOtherSubscriptionComplete(
    this: TProperties & DisposableLike & ConsumerLike,
  ) {
    if (!this[WithLatestFromObserver_hasLatest]) {
      this[SinkLike_complete]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromObserver_hasLatest] = true;
    this[WithLatestFromObserver_otherLatest] = next;
  }

  return mixInstanceFactory(
    include(LiftedObserverMixin()),
    function WithLatestFromObserver(
      this: Pick<
        LiftedObserverLike<TA>,
        typeof LiftedEventListenerLike_notify
      > &
        TProperties,
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ): ObserverLike<TA> {
      init(LiftedObserverMixin<TA, T>(), this, delegate, none);

      this[WithLatestFromObserver_selector] = selector;

      pipe(
        other,
        Observable_forEach(bind(onOtherNotify, this)),
        Observable_subscribe(delegate),
        Disposable.addTo(this),
        DisposableContainer.onComplete(
          bind(onWithLatestFromObserverOtherSubscriptionComplete, this),
        ),
      );

      return this;
    },
    props<TProperties>({
      [WithLatestFromObserver_hasLatest]: false,
      [WithLatestFromObserver_otherLatest]: none,
      [WithLatestFromObserver_selector]: none,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties & LiftedObserverLike<TA, T>,
        next: TA,
      ) {
        const shouldEmit = this[WithLatestFromObserver_hasLatest];

        if (shouldEmit) {
          const v = this[WithLatestFromObserver_selector](
            next,
            this[WithLatestFromObserver_otherLatest] as TB,
          );
          this[LiftedEventListenerLike_notifyDelegate](v);
        }
      },
    }),
  );
})();

const Observable_withLatestFrom: Observable.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    createWithLatestFromObserver,
    partial(other, selector),
    Observable_lift({
      [ObservableLift_isStateless]: Computation.isMulticasted(other),
      [ComputationLike_isDeferred]: !Computation.isMulticasted(other),
      [ComputationLike_isPure]: Computation.isPure(other),
      [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
    }),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
