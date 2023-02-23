import { Lift } from "../../../containers.js";
import { AsyncEnumerableLike } from "../../../ix.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_liftT: Lift<AsyncEnumerableLike> = {
  lift: AsyncEnumerable_lift,
};

export default AsyncEnumerable_liftT;
