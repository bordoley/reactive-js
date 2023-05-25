import type * as Observable from "../../Observable.js";
import Observable_keep from "./Observable.keep.js";

const Observable_keepType: Observable.Signature["keepType"] =
  Observable_keep as Observable.Signature["keepType"];

export default Observable_keepType;
