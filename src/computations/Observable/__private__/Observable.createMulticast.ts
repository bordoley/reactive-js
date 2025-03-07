import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObserverLike,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createMulticast = <T>(f: SideEffect1<ObserverLike<T>>) =>
  Observable_createWithConfig(f, {
    [ComputationLike_isDeferred]: false,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
  });

export default Observable_createMulticast;
