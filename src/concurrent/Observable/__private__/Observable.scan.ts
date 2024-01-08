import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Factory,
  Reducer,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
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
  return createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(
          DelegatingDisposableMixin<ObserverLike<TAcc>>(),
          ObserverMixin(),
        ),
        function ScanObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            TProperties<T, TAcc>,
          delegate: ObserverLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): ObserverLike<T> {
          init(
            DelegatingDisposableMixin<ObserverLike<TAcc>>(),
            instance,
            delegate,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          instance[ScanObserver_reducer] = reducer;

          try {
            const acc = initialValue();
            instance[ScanObserver_acc] = acc;
          } catch (e) {
            instance[DisposableLike_dispose](error(e));
          }

          return instance;
        },
        props<TProperties<T, TAcc>>({
          [ScanObserver_acc]: none,
          [ScanObserver_reducer]: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties<T, TAcc> &
              DelegatingDisposableLike<ObserverLike<TAcc>> &
              ObserverLike<T>,
            next: T,
          ) {
            const nextAcc = this[ScanObserver_reducer](
              this[ScanObserver_acc],
              next,
            );
            this[ScanObserver_acc] = nextAcc;
            this[DelegatingDisposableLike_delegate][SinkLike_notify](nextAcc);
          },
        },
      ),
    ),
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
