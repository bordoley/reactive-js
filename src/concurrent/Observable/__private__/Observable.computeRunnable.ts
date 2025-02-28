import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike_isDeferred } from "../../../concurrent.js";
import { Factory } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";

const Observable_computeRunnable: Observable.Signature["computeRunnable"] = <T>(
  computation: Factory<T>,
  options: { mode?: "batched" | "combine-latest" } = {},
) =>
  Observable_computeWithConfig(
    computation,
    {
      [ObservableLike_isDeferred]: true,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: true,
    },
    options,
  );
export default Observable_computeRunnable;
