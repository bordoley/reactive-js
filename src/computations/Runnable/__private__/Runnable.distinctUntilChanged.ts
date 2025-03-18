import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import DistinctUntilChangedMixin from "../../../utils/__mixins__/EventListeners/DistinctUntilChangedMixin.js";
import { LiftedEventListenerLike_notify } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import { Runnable_liftPure } from "./Runnable.lift.js";

const Runnable_distinctUntilChanged: Runnable.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedSink: (
      delegate: SinkLike<T>,
      equality: Equality<T>,
    ) => SinkLike<T> = mixInstanceFactory(
      include(LiftedSinkMixin(), DistinctUntilChangedMixin()),
      function DistinctUntilChangedSink(
        this: Pick<LiftedSinkLike<T>, typeof LiftedEventListenerLike_notify>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(LiftedSinkMixin<T>(), this, delegate, none);
        init(DistinctUntilChangedMixin(), this, equality);

        return this;
      },
    );
    return (options?: { readonly equality?: Equality<T> }) =>
      pipe(
        createDistinctUntilChangedSink,
        partial(options?.equality ?? strictEquality),
        Runnable_liftPure,
      );
  })() as Runnable.Signature["distinctUntilChanged"];

export default Runnable_distinctUntilChanged;
