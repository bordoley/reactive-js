import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
} from "../../../computations.js";
import { Factory, error, newInstance, raise } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class RaiseDeferable<T> implements DeferableLike<T> {
  constructor(private readonly r: Factory<unknown>) {}

  [DeferableLike_eval](_: SinkLike<T>): void {
    raise(error(this.r()));
  }
}

const Deferable_raise: Deferable.Signature["raise"] = <T>(options?: {
  readonly raise?: Factory<unknown>;
}) => {
  const { raise: factory = raise } = options ?? {};
  return newInstance(RaiseDeferable<T>, factory);
};

export default Deferable_raise;
