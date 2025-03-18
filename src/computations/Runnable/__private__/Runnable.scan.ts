import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, none, partial, pipe } from "../../../functions.js";
import ScanMixin from "../../../utils/__mixins__/EventListeners/ScanMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import { Runnable_liftPure } from "./Runnable.lift.js";

const Runnable_scan: Runnable.Signature["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanSink = mixInstanceFactory(
    include(LiftedSinkMixin(), ScanMixin()),
    function ScanSink(
      this: unknown,
      delegate: SinkLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T, TAcc>(), this, delegate, none);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(createScanSink, partial(reducer, initialValue), Runnable_liftPure);
})() as Runnable.Signature["scan"];

export default Runnable_scan;
