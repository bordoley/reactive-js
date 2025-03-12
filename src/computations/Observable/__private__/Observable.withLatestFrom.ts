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
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

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
    this: TProperties & DisposableLike & QueueableLike,
  ) {
    if (!this[WithLatestFromObserver_hasLatest]) {
      this[QueueableLike_complete]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromObserver_hasLatest] = true;
    this[WithLatestFromObserver_otherLatest] = next;
  }

  return mixInstanceFactory(
    include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()),
    function WithLatestFromObserver(
      this: ObserverMixinBaseLike<TA> & TProperties,
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[WithLatestFromObserver_selector] = selector;

      pipe(
        other,
        Observable_forEach(bind(onOtherNotify, this)),
        Observable_subscribeWithConfig(delegate, delegate),
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
      [ObserverMixinBaseLike_notify](
        this: TProperties & LiftedObserverLike<TA, T>,
        next: TA,
      ) {
        const delegate = this[LiftedObserverLike_delegate];
        const shouldEmit =
          !this[DisposableLike_isDisposed] &&
          this[WithLatestFromObserver_hasLatest];

        let v = none as T;

        return (
          (shouldEmit &&
            ((v = this[WithLatestFromObserver_selector](
              next,
              this[WithLatestFromObserver_otherLatest] as TB,
            )),
            delegate?.[ObserverMixinBaseLike_notify]?.(v) ??
              delegate[QueueableLike_enqueue](v))) ||
          !shouldEmit
        );
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
