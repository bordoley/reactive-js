import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import ScanSinkMixin from "../../../events/__mixins__/ScanSinkMixin.js";
import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createScanObserver: <T, TAcc>(
  delegate: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  return createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin(), ScanSinkMixin()),
        function ScanObserver(
          instance: unknown,
          delegate: ObserverLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): ObserverLike<T> {
          init(
            ScanSinkMixin<T, TAcc>(),
            instance,
            delegate,
            reducer,
            initialValue,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          return instance;
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
    Observer_createScanObserver<T, TAcc>,
    partial(reducer, initialValue),
    Observable_liftPure,
  );

export default Observable_scan;
