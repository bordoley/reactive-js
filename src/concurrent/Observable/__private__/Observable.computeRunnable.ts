import {
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
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
      [ObservableLike_isMulticasted]: false,
      [ObservableLike_isPure]: false,
      [ObservableLike_isRunnable]: true,
    },
    options,
  );
export default Observable_computeRunnable;
