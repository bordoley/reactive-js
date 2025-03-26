import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { SourceLike } from "../../../computations.js";
import { Function1, bind, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../LiftedSource.js";

export const create: <
  TSubscription extends DisposableLike,
  TInnerSource extends SourceLike<T>,
  T,
>(
  delegate: LiftedSinkLike<TSubscription, T>,
  subscribeToInner: Function1<
    LiftedSinkLike<TSubscription, T>,
    Function1<TInnerSource, DisposableLike>
  >,
) => LiftedSinkLike<TSubscription, TInnerSource> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  TInnerSource extends SourceLike<T>,
  T,
>() => {
  const SkipFirstSink_subscribeToInner = Symbol(
    "SkipFirstSink_subscribeToInner",
  );
  const SkipFirstSink_innerSubscription = Symbol(
    "SkipFirstSink_innerSubscription",
  );

  interface TProperties {
    [SkipFirstSink_subscribeToInner]: Function1<
      LiftedSinkLike<TSubscription, T>,
      Function1<TInnerSource, DisposableLike>
    >;
    [SkipFirstSink_innerSubscription]: DisposableLike;
  }

  function onSwitchAllObserverInnerObservableComplete(
    this: TProperties &
      DelegatingLiftedSinkLike<TSubscription, TInnerSource, T>,
  ) {
    if (this[SinkLike_isCompleted]) {
      this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
    }
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, TInnerSource, T>()),
    function SkipFirstSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, TInnerSource, T>,
        | typeof EventListenerLike_notify
        | typeof DelegatingLiftedSinkLike_onCompleted
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      subscribeToInner: Function1<
        LiftedSinkLike<TSubscription, T>,
        Function1<TInnerSource, DisposableLike>
      >,
    ): LiftedSinkLike<TSubscription, TInnerSource> {
      init(
        DelegatingLiftedSinkMixin<TSubscription, TInnerSource, T>(),
        this,
        delegate,
      );
      this[SkipFirstSink_subscribeToInner] = subscribeToInner;

      return this;
    },
    props<TProperties>({
      [SkipFirstSink_subscribeToInner]: none,
      [SkipFirstSink_innerSubscription]: Disposable.disposed,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, TInnerSource, T>,
        next: TInnerSource,
      ) {
        this[SkipFirstSink_innerSubscription][DisposableLike_dispose]();

        const subscription = this[LiftedSinkLike_subscription];
        const delegate = this[DelegatingLiftedSinkLike_delegate];
        this[SkipFirstSink_innerSubscription] = pipe(
          next,
          this[SkipFirstSink_subscribeToInner](delegate),
          DisposableContainer.onComplete(
            bind(onSwitchAllObserverInnerObservableComplete, this),
          ),
          Disposable.addTo(subscription),
        );
      },
      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, TInnerSource, T>,
      ) {
        if (this[SkipFirstSink_innerSubscription][DisposableLike_isDisposed]) {
          this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        }
      },
    }),
  );
})();
