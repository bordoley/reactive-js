import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import { Function1, none, partial, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import Observable_delay from "../../Observable/__private__/Observable.delay.js";
import type * as Observable from "../../Observable.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_forEach from "./Observable.forEach.js";
import { Observable_genPure } from "./Observable.gen.js";
import Observable_lift from "./Observable.lift.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const m = Computation.makeModule<Observable.Signature, "concat" | "genPure">({
  concat: Observable_concat,
  genPure: Observable_genPure,
});

const createDebounceSink: <T>(
  delegate: LiftedSinkLike<ObserverLike, T>,
  durationFunction: Function1<T, ObservableLike>,
) => LiftedSinkLike<ObserverLike, T> = /*@__PURE__*/ (<T>() => {
  const DebounceSink_durationSubscription = Symbol(
    "DebounceSink_durationSubscription",
  );
  const DebounceSink_durationFunction = Symbol("DebounceSink_durationFunction");

  type TProperties = {
    [DebounceSink_durationSubscription]: DisposableLike;
    [DebounceSink_durationFunction]: Function1<T, ObservableLike>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<ObserverLike, T>()),
    function DebounceSink(
      this: Pick<
        DelegatingLiftedSinkLike<ObserverLike, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<ObserverLike, T>,
      durationFunction: Function1<T, ObservableLike>,
    ): LiftedSinkLike<ObserverLike, T> {
      init(DelegatingLiftedSinkMixin<ObserverLike, T>(), this, delegate);

      this[DebounceSink_durationFunction] = durationFunction;

      this[DebounceSink_durationSubscription] = Disposable.disposed;

      return this;
    },
    props<TProperties>({
      [DebounceSink_durationSubscription]: none,
      [DebounceSink_durationFunction]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<ObserverLike, T>,
        next: T,
      ) {
        const delegate = this[DelegatingEventListenerLike_delegate];
        const scheduler = this[LiftedSinkLike_subscription];
        const debounceSubscription = this[DebounceSink_durationSubscription];

        debounceSubscription[DisposableLike_dispose]();

        this[DebounceSink_durationSubscription] = pipe(
          this[DebounceSink_durationFunction](next),
          Computation.endWith(m, none),
          Observable_takeFirst(),
          Observable_forEach(() => {
            // Note that if the downstream consumer applies backpressure
            // this should still mostly work in theory because the
            // upstream producer should slow down producing values
            // in that case.
            this[DelegatingEventListenerLike_delegate][
              EventListenerLike_notify
            ](next);
          }),
          EventSource.subscribe({ scheduler }),
          DisposableContainer.onComplete(() => {
            if (this[SinkLike_isCompleted]) {
              delegate[SinkLike_complete]();
            }
          }),
          Disposable.addTo(this),
        );
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<ObserverLike, T>,
      ) {
        const delegate = this[DelegatingEventListenerLike_delegate];
        const debounceSubscription = this[DebounceSink_durationSubscription];

        if (debounceSubscription[DisposableLike_isDisposed]) {
          delegate[SinkLike_complete]();
        }
      },
    }),
  );
})();

const Observable_debounce: Observable.Signature["debounce"] = (<T>(
  duration: number,
) => {
  const durationObservable = returns(Observable_delay(duration));

  return pipe(
    createDebounceSink<T>,
    partial(durationObservable),
    Observable_lift(),
  );
}) as Observable.Signature["debounce"];

export default Observable_debounce;
