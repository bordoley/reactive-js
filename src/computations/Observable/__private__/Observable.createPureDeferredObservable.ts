import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createPureDeferredObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
  });

export default Observable_createPureDeferredObservable;
