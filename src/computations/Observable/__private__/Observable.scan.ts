import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  Factory,
  Reducer,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_notify,
  LiftedObserverLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_dispose,
  ObserverLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const ScanObserver_acc = Symbol("ScanObserver_acc");
const ScanObserver_reducer = Symbol("ScanObserver_reducer");

interface TProperties<T, TAcc> {
  [ScanObserver_acc]: TAcc;
  [ScanObserver_reducer]: Reducer<T, TAcc>;
}

const createScanObserver: <T, TAcc>(
  delegate: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function ScanObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        TProperties<T, TAcc>,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T, TAcc>(), this, delegate, none);

      this[ScanObserver_reducer] = reducer;

      try {
        this[ScanObserver_acc] = initialValue();
      } catch (e) {
        this[DisposableLike_dispose](error(e));
      }

      return this;
    },
    props<TProperties<T, TAcc>>({
      [ScanObserver_acc]: none,
      [ScanObserver_reducer]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties<T, TAcc> & LiftedObserverLike<T, TAcc>,
        next: T,
      ) {
        const nextAcc = this[ScanObserver_reducer](
          this[ScanObserver_acc],
          next,
        );
        this[ScanObserver_acc] = nextAcc;

        this[LiftedObserverLike_notifyDelegate](nextAcc);
      },
    }),
  );
})();

const Observable_scan: Observable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    createScanObserver<T, TAcc>,
    partial(reducer, initialValue),
    Observable_liftPureDeferred,
  );

export default Observable_scan;
