import { compose } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Observable_toProducer from "../../Observable/__private__/Observable.toProducer.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";

const Broadcaster_fromObservable: Broadcaster.Signature["fromObservable"] =
  ((options?: { autoDispose?: boolean; scheduler?: SchedulerLike }) =>
    compose(
      Observable_toProducer(options),
      Producer_broadcast(options),
    )) as Broadcaster.Signature["fromObservable"];

export default Broadcaster_fromObservable;
