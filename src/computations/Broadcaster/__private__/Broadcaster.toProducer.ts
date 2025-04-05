import {
  BroadcasterLike,
  EventSourceLike_subscribe,
} from "../../../computations.js";
import { returns } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Broadcaster_toProducer: Broadcaster.Signature["toProducer"] =
  /*@__PURE__*/ returns((src: BroadcasterLike) =>
    DeferredEventSource.create((consumer: ConsumerLike) => {
      src[EventSourceLike_subscribe](consumer);
    }),
  ) as Broadcaster.Signature["toProducer"];

export default Broadcaster_toProducer;
