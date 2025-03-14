import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { Factory } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_computeWithConfig from "./Observable.computeWithConfig.js";

const Observable_computeSynchronous: Observable.Signature["computeSynchronous"] =
  <T>(
    computation: Factory<T>,
    options: { mode?: "batched" | "combine-latest" } = {},
  ) =>
    Observable_computeWithConfig(
      computation,
      {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: true,
      },
      options,
    );
export default Observable_computeSynchronous;
