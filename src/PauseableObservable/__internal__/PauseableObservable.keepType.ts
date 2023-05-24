import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import PauseableObservable_keep from "./PauseableObservable.keep.js";

const PauseableObservable_keepType: PauseableObservable.Signature["keepType"] =
  /*@__PURE__*/ Container_keepType(
    PauseableObservable_keep as PauseableObservable.Signature["keep"],
  ) as PauseableObservable.Signature["keepType"];

export default PauseableObservable_keepType;
