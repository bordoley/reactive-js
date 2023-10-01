import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import { returns } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const emptyObservable = /*@__PURE__*/ Observable_createWithConfig(
  observer => {
    observer[DisposableLike_dispose]();
  },
  {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
  },
);
const Observable_empty: Observable.Signature["empty"] =
  /*@__PURE__*/ returns(emptyObservable);

export default Observable_empty;
