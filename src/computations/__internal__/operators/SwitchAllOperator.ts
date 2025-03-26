import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { SourceLike } from "../../../computations.js";
import { bind, Function1, none, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_isCompleted,
  LiftedOperatorLike_notify,
  LiftedOperatorLike_subscription,
} from "../LiftedSource.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";

export const create: <
  TSubscription extends DisposableLike,
  TInnerSource extends SourceLike<T>,
  T,
>(
  delegate: LiftedOperatorLike<TSubscription, T>,
  subscribeToInner: Function1<
    LiftedOperatorLike<TSubscription, T>,
    Function1<TInnerSource, DisposableLike>
  >,
) => LiftedOperatorLike<TSubscription, TInnerSource> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  TInnerSource extends SourceLike<T>,
  T,
>() => {
  const SwitchAllOperator_subscribeToInner = Symbol(
    "SwitchAllOperator_subscribeToInner",
  );
  const SwitchAllOperator_innerSubscription = Symbol(
    "SwitchAllOperator_innerSubscription",
  );

  interface TProperties {
    [SwitchAllOperator_subscribeToInner]: Function1<
      LiftedOperatorLike<TSubscription, T>,
      Function1<TInnerSource, DisposableLike>
    >;
    [SwitchAllOperator_innerSubscription]: DisposableLike;
  }

  function onSwitchAllObserverInnerObservableComplete(
    this: TProperties &
      DelegatingLiftedOperatorLike<TSubscription, TInnerSource, T>,
  ) {
    if (this[LiftedOperatorLike_isCompleted]) {
      this[DelegatingLiftedOperatorLike_delegate][
        LiftedOperatorLike_complete
      ]();
    }
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, TInnerSource, T>()),
    function SwitchAllOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, TInnerSource, T>,
        | typeof LiftedOperatorLike_notify
        | typeof DelegatingLiftedOperatorLike_onCompleted
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      subscribeToInner: Function1<
        LiftedOperatorLike<TSubscription, T>,
        Function1<TInnerSource, DisposableLike>
      >,
    ): LiftedOperatorLike<TSubscription, TInnerSource> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, TInnerSource, T>(),
        this,
        delegate,
      );
      this[SwitchAllOperator_subscribeToInner] = subscribeToInner;

      return this;
    },
    props<TProperties>({
      [SwitchAllOperator_subscribeToInner]: none,
      [SwitchAllOperator_innerSubscription]: Disposable.disposed,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, TInnerSource, T>,
        next: TInnerSource,
      ) {
        this[SwitchAllOperator_innerSubscription][DisposableLike_dispose]();

        const subscription = this[LiftedOperatorLike_subscription];
        const delegate = this[DelegatingLiftedOperatorLike_delegate];
        this[SwitchAllOperator_innerSubscription] = pipe(
          next,
          this[SwitchAllOperator_subscribeToInner](delegate),
          DisposableContainer.onComplete(
            bind(onSwitchAllObserverInnerObservableComplete, this),
          ),
          Disposable.addTo(subscription),
        );
      },
      [DelegatingLiftedOperatorLike_onCompleted](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, TInnerSource, T>,
      ) {
        if (
          this[SwitchAllOperator_innerSubscription][DisposableLike_isDisposed]
        ) {
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_complete
          ]();
        }
      },
    }),
  );
})();
