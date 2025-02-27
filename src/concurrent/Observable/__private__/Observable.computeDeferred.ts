import { ComputationLike_isPure } from "../../../computations.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import { Factory } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";

const Observable_computeDeferred: Observable.Signature["computeDeferred"] = <T>(
  computation: Factory<T>,
  options: { mode?: "batched" | "combine-latest" } = {},
) =>
  Observable_computeWithConfig(
    computation,
    {
      [ObservableLike_isDeferred]: true,
      [ComputationLike_isPure]: false,
      [ObservableLike_isRunnable]: false,
    },
    options,
  );

export default Observable_computeDeferred;
