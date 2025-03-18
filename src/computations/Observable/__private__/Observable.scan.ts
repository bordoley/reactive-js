import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, none, partial, pipe } from "../../../functions.js";
import ScanMixin from "../../../utils/__mixins__/EventListeners/ScanMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_scan: Observable.Signature["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanObserver = mixInstanceFactory(
    include(LiftedObserverMixin(), ScanMixin()),
    function ScanObserver(
      this: unknown,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T, TAcc>(), this, delegate, none);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createScanObserver,
      partial(reducer, initialValue),
      Observable_liftPure,
    );
})() as Observable.Signature["scan"];

export default Observable_scan;
