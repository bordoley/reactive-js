import { compose } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Producer_toAsyncIterable from "../../Producer/__private__/Producer.toAsyncIterable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_toAsyncIterable: Observable.Signature["toAsyncIterable"] =
  (options =>
    compose(
      Observable_toProducer(options),
      Producer_toAsyncIterable(),
    )) as Observable.Signature["toAsyncIterable"];

export default Observable_toAsyncIterable;
