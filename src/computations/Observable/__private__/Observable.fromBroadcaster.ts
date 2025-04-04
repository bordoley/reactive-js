import { compose } from "../../../functions.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import type * as Observable from "../../Observable.js";
import Producer_toObservable from "../../Producer/__private__/Producer.toObservable.js";

const Observable_fromBroadcaster: Observable.Signature["fromBroadcaster"] =
  (options =>
    compose(
      Broadcaster_toProducer(),
      Producer_toObservable(options),
    )) as Observable.Signature["fromBroadcaster"];

export default Observable_fromBroadcaster;
