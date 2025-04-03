import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import SwitchAllConsumerMixin from "../../__mixins__/SwitchAllConsumerMixin.js";

export const createSwitchAllConsumer: <
  TInnerSource extends EventSourceLike<T, ConsumerLike<T>>,
  T,
>(
  delegate: ConsumerLike<T>,
) => ConsumerLike<TInnerSource> =
  /*@__PURE__*/
  (<TInnerSource extends EventSourceLike<T, ConsumerLike<T>>, T>() =>
    mixInstanceFactory(
      include(SwitchAllConsumerMixin()),
      function SwitchAllConsumer(
        this: unknown,
        delegate: ConsumerLike<T>,
      ): ConsumerLike<TInnerSource> {
        init(
          SwitchAllConsumerMixin<TInnerSource, ConsumerLike<T>, T>(),
          this,
          delegate,
          Consumer.createDelegatingNonCompleting,
        );

        return this;
      },
    ))();

const Producer_switchAll: Producer.Signature["switchAll"] = (<T, TInnerLike>(
    innerType?: TInnerLike,
  ) =>
  (obs: ProducerLike<ProducerLike<T>>) =>
    DeferredEventSource.create(
      (Consumer: ConsumerLike<T>) => {
        const delegate = createSwitchAllConsumer(Consumer);
        obs[EventSourceLike_subscribe](delegate);
      },
      {
        [ComputationLike_isPure]:
          Computation.isPure(obs) && Computation.isPure(innerType ?? {}),
        [ComputationLike_isSynchronous]:
          Computation.isSynchronous(obs) &&
          Computation.isSynchronous(innerType ?? {}),
      },
    )) as Producer.Signature["switchAll"];

export default Producer_switchAll;
