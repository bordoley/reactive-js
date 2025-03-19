import type * as Observable from "../../Observable.js";
import { Observable_genPure } from "./Observable.gen.js";
const Observable_empty: Observable.Signature["empty"] = ((options?: {
  readonly delay: number;
}) =>
  Observable_genPure(function* ObservableEmpty() {
    return;

    // FIXME: need to set the correct delay options
  }, options)) as Observable.Signature["empty"];

export default Observable_empty;
