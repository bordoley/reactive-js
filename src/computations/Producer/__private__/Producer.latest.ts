import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { ProducerLike } from "../../../computations.js";
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import LatestEventListenerMixin, {
  LatestEventListenerContextLike,
  LatestEventListenerLike,
} from "../../__mixins__/LatestEventListenerMixin.js";

const createLatestConsumer: (
  delegate: ConsumerLike,
  context: LatestEventListenerContextLike,
) => ConsumerLike & LatestEventListenerLike =
  /*@__PURE__*/
  (() =>
    mixInstanceFactory(
      include(DelegatingConsumerMixin(), LatestEventListenerMixin()),
      function LatestConsumer(
        this: unknown,
        delegate: ConsumerLike<ReadonlyArray<unknown>>,
        context: LatestEventListenerContextLike,
      ): ConsumerLike & LatestEventListenerLike {
        init(DelegatingConsumerMixin(), this, delegate);
        init(LatestEventListenerMixin(), this, delegate, context);

        return this;
      },
    ))();

export const Producer_combineLatest: Producer.Signature["combineLatest"] = ((
  ...producers: readonly ProducerLike<any>[]
) =>
  DeferredEventSource.latest(
    producers,
    "combine-latest",
    createLatestConsumer,
  )) as Producer.Signature["combineLatest"];

export const Producer_zipLatest: Producer.Signature["zipLatest"] = ((
  ...Producers: readonly ProducerLike<any>[]
) =>
  DeferredEventSource.latest(
    Producers,
    "zip-latest",
    createLatestConsumer,
  )) as Producer.Signature["zipLatest"];
