import type * as Observable from "../../Observable.js";
import { returns } from "../../functions.js";
import Observable_map from "./Observable.map.js";

const Observable_mapTo: Observable.Signature["mapTo"] = <T>(v: T) =>
  Observable_map(returns(v));

export default Observable_mapTo;
