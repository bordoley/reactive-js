import type * as PauseableObservable from "../../PauseableObservable.js";
import PauseableObservable_keep from "./PauseableObservable.keep.js";

const PauseableObservable_keepType: PauseableObservable.Signature["keepType"] =
  PauseableObservable_keep as PauseableObservable.Signature["keepType"];

export default PauseableObservable_keepType;
