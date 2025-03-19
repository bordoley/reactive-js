import { compose } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_broadcast: Observable.Signature["broadcast"] = options =>
  compose(Observable_toProducer(options), Producer_broadcast(options));

export default Observable_broadcast;
