import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createSynchronousObservableWithSideEffects = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
  });

export default Observable_createSynchronousObservableWithSideEffects;
