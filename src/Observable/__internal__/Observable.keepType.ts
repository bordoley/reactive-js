import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import type * as Observable from "../../Observable.js";
import Observable_keep from "./Observable.keep.js";

const Observable_keepType: Observable.Signature["keepType"] =
  /*@__PURE__*/ Container_keepType<Observable.Type>(
    Observable_keep,
  ) as Observable.Signature["keepType"];

export default Observable_keepType;
