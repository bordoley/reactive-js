import { KeepType } from "../../../containers.js";
import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { ObservableLike } from "../../../rx.js";
import Observable_keep from "./Observable.keep.js";

const Observable_keepType: KeepType<ObservableLike>["keepType"] =
  /*@__PURE__*/ Container_keepType(
    Observable_keep,
  ) as KeepType<ObservableLike>["keepType"];

export default Observable_keepType;
