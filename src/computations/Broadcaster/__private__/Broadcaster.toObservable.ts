import { compose } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Producer_toObservable from "../../Producer/__private__/Producer.toObservable.js";
import Broadcaster_toProducer from "./Broadcaster.toProducer.js";

const Broadcaster_toObservable: Broadcaster.Signature["toObservable"] =
  ((options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) =>
    compose(
      Broadcaster_toProducer(),
      Producer_toObservable(options),
    )) as Broadcaster.Signature["toObservable"];

export default Broadcaster_toObservable;
