import {
  BroadcasterLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { returns } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Broadcaster_toProducer: Broadcaster.Signature["toProducer"] =
  /*@__PURE__*/ returns((src: BroadcasterLike) =>
    DeferredSource.create((consumer: ConsumerLike) => {
      src[SourceLike_subscribe](consumer);
    }),
  ) as Broadcaster.Signature["toProducer"];

export default Broadcaster_toProducer;
