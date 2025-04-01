import {
  BroadcasterLike,
  ComputationLike_isPure,
  DeferredEventSourceLike,
  ProducerLike,
} from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Producer_merge from "./Producer.merge.js";

const toBroadcaster = <T>(
  _consumer: ConsumerLike,
): Function1<DeferredEventSourceLike<T>, BroadcasterLike<T>> =>
  Producer_broadcast<T>() as Function1<
    DeferredEventSourceLike<T>,
    BroadcasterLike<T>
  >;

const Producer_forkMerge: Producer.Signature["forkMerge"] = (<TIn, TOut>(
  ...ops: readonly [
    ...Function1<ProducerLike<TIn>, ProducerLike<TOut>>[],
    {
      [ComputationLike_isPure]?: boolean;
    },
  ]
) =>
  DeferredEventSource.forkMerge<
    TIn,
    ConsumerLike<TIn>,
    TOut,
    ConsumerLike<TOut>
  >(
    toBroadcaster<TIn>,
    Broadcaster_toProducer,
    Producer_merge as (
      ...sources: readonly DeferredEventSourceLike<TOut>[]
    ) => DeferredEventSourceLike<TOut>,
    ops as readonly [
      ...Function1<
        DeferredEventSourceLike<TIn>,
        DeferredEventSourceLike<TOut>
      >[],
      {
        [ComputationLike_isPure]?: boolean;
      },
    ],
  )) as unknown as Producer.Signature["forkMerge"];

export default Producer_forkMerge;
