import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  SourceLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { ObserverLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import SwitchAllConsumerMixin from "../../__mixins__/SwitchAllConsumerMixin.js";

export const createSwitchAllObserver: <
  TInnerSource extends SourceLike<T, ObserverLike<T>>,
  T,
>(
  delegate: ObserverLike<T>,
) => ObserverLike<TInnerSource> =
  /*@__PURE__*/
  (<TInnerSource extends SourceLike<T, ObserverLike<T>>, T>() =>
    mixInstanceFactory(
      include(SwitchAllConsumerMixin(), DelegatingSchedulerMixin),
      function SwitchAllObserver(
        this: unknown,
        delegate: ObserverLike<T>,
      ): ObserverLike<TInnerSource> {
        init(
          SwitchAllConsumerMixin<TInnerSource, ObserverLike<T>, T>(),
          this,
          delegate,
          Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
        );
        init(DelegatingSchedulerMixin, this, delegate);

        return this;
      },
    ))();

const Observable_switchAll: Observable.Signature["switchAll"] = (<
    T,
    TInnerLike,
  >(
    innerType?: TInnerLike,
  ) =>
  (obs: ObservableLike<ObservableLike<T>>) =>
    DeferredSource.create(
      (observer: ObserverLike<T>) => {
        const delegate = createSwitchAllObserver(observer);
        obs[SourceLike_subscribe](delegate);
      },
      {
        [ComputationLike_isPure]:
          Computation.isPure(obs) && Computation.isPure(innerType ?? {}),
        [ComputationLike_isSynchronous]:
          Computation.isSynchronous(obs) &&
          Computation.isSynchronous(innerType ?? {}),
      },
    )) as Observable.Signature["switchAll"];

export default Observable_switchAll;
