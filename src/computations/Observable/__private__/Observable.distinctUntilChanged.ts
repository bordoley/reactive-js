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
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike, QueueableLike_enqueue } from "../../../utils.js";
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
    include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()),
    function DistinctUntilChangedObserver(
      this: ObserverMixinBaseLike<T> & TProps<T>,
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[DistinctUntilChangedObserver_equality] = equality;

      return this;
    },
    props<TProps<T>>({
      [DistinctUntilChangedObserver_equality]: none,
      [DistinctUntilChangedObserver_prev]: none,
      [DistinctUntilChangedObserver_hasValue]: false,
    }),
    proto({
      [ObserverMixinBaseLike_notify](
        this: TProps<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];

        const shouldEmit =
          !this[DistinctUntilChangedObserver_hasValue] ||
          !this[DistinctUntilChangedObserver_equality](
            this[DistinctUntilChangedObserver_prev],
            next,
          );

        return (
          (shouldEmit &&
            ((this[DistinctUntilChangedObserver_prev] = next),
            (this[DistinctUntilChangedObserver_hasValue] = true),
            delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
              delegate[QueueableLike_enqueue](next))) ||
          !shouldEmit
        );
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
