import { compose, identity, returns } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Computation from "../../Computation.js";
import Observable_toProducer from "../../Observable/__private__/Observable.toProducer.js";

const m = {
  toProducer: /*@__PURE__*/ returns(identity),
};

export const Broadcaster_fromObservable: Broadcaster.Signature["fromObservable"] =
  ((options?: { scheduler?: SchedulerLike }) =>
    compose(
      Observable_toProducer(options),
      Computation.toObservable(m)(),
    )) as Broadcaster.Signature["fromObservable"];
