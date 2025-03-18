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
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: (
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = mixInstanceFactory(
      include(LiftedObserverMixin(), DistinctUntilChangedMixin()),
      function DistinctUntilChangedObserver(
        this: Pick<
          LiftedObserverLike<T>,
          typeof LiftedEventListenerLike_notify
        >,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ): ObserverLike<T> {
        init(LiftedObserverMixin<T>(), this, delegate, none);
        init(DistinctUntilChangedMixin(), this, equality);

        return this;
      },
    );
    return (options?: { readonly equality?: Equality<T> }) =>
      pipe(
        createDistinctUntilChangedObserver,
        partial(options?.equality ?? strictEquality),
        Observable_liftPureDeferred,
      );
  })() as Observable.Signature["distinctUntilChanged"];

export default Observable_distinctUntilChanged;
