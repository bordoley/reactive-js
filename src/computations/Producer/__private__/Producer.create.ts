import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_create: Producer.Signature["create"] = <T>(
  f: SideEffect1<ConsumerLike<T>>,
) =>
  DeferredEventSource.create<T, ConsumerLike<T>>(f, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  });

export default Producer_create;
