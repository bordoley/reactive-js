import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createPureRunnableWithSideEffects = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  });

export default Observable_createPureRunnableWithSideEffects;
