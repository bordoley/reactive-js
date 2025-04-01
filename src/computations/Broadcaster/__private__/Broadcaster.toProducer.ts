import {
  BroadcasterLike,
  ReactiveSourceLike_subscribe,
} from "../../../computations.js";
import { returns } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Broadcaster_toProducer: Broadcaster.Signature["toProducer"] =
  /*@__PURE__*/ returns((src: BroadcasterLike) =>
    DeferredReactiveSource.create((consumer: ConsumerLike) => {
      src[ReactiveSourceLike_subscribe](consumer);
    }),
  ) as Broadcaster.Signature["toProducer"];

export default Broadcaster_toProducer;
