import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";

const Producer_create: Producer.Signature["create"] = <T>(
  f: SideEffect1<ConsumerLike<T>>,
) =>
  Source.create(f, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  });

export default Producer_create;
