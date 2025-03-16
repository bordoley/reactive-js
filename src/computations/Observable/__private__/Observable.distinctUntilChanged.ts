import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const DistinctUntilChangedObserver_equality = Symbol(
  "DistinctUntilChangedObserver_equality",
);
const DistinctUntilChangedObserver_prev = Symbol(
  "DistinctUntilChangedObserver_prev",
);
const DistinctUntilChangedObserver_hasValue = Symbol(
  "DistinctUntilChangedObserver_hasValue",
);

interface TProps<T> {
  [DistinctUntilChangedObserver_equality]: Equality<T>;
  [DistinctUntilChangedObserver_prev]: T;
  [DistinctUntilChangedObserver_hasValue]: boolean;
}

const createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function DistinctUntilChangedObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify> &
        TProps<T>,
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[DistinctUntilChangedObserver_equality] = equality;

      return this;
    },
    props<TProps<T>>({
      [DistinctUntilChangedObserver_equality]: none,
      [DistinctUntilChangedObserver_prev]: none,
      [DistinctUntilChangedObserver_hasValue]: false,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProps<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const shouldEmit =
          !this[DistinctUntilChangedObserver_hasValue] ||
          !this[DistinctUntilChangedObserver_equality](
            this[DistinctUntilChangedObserver_prev],
            next,
          );

        if (shouldEmit) {
          this[DistinctUntilChangedObserver_prev] = next;
          this[DistinctUntilChangedObserver_hasValue] = true;
          this[LiftedEventListenerLike_notifyDelegate](next);
        }
      },
    }),
  ))();

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      createDistinctUntilChangedObserver<T>,
      partial(options?.equality ?? strictEquality),
      Observable_liftPureDeferred,
    );

export default Observable_distinctUntilChanged;
