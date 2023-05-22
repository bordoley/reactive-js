import type * as Observable from "../../Observable.js";
import { Factory, compose } from "../../functions.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_map from "./Observable.map.js";

const Observable_fromFactory: Observable.Signature["fromFactory"] =
  ((options?: { readonly delay?: number }) =>
    compose(
      Observable_fromValue(options as { readonly delay: number }),
      Observable_map((f: Factory<unknown>) => f()),
    )) as Observable.Signature["fromFactory"];

export default Observable_fromFactory;
