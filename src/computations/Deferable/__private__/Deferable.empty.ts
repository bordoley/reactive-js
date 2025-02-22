import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
} from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class EmptyDeferable<T> implements DeferableLike<T> {
  [DeferableLike_eval](sink: SinkLike<T>): void {
    sink[SinkLike_complete]();
  }
}

const Deferable_empty: Deferable.Signature["empty"] = /*@__PURE__*/ (() =>
  returns(newInstance(EmptyDeferable)))();

export default Deferable_empty;
