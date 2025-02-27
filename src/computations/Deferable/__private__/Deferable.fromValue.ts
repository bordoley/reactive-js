import {
  ComputationLike_isPure,
  DeferableLike_eval,
  PureDeferableLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class FromValueDeferable<T> implements PureDeferableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;

  constructor(private readonly v: T) {}

  [DeferableLike_eval](sink: SinkLike<T>): void {
    sink[SinkLike_next](this.v);
    sink[SinkLike_complete]();
  }
}

const Deferable_fromValue: Deferable.Signature["fromValue"] =
  <T>() =>
  (v: T) =>
    newInstance(FromValueDeferable, v);

export default Deferable_fromValue;
