import {
  Lift,
  TInteractive,
} from "../../../containers/__internal__/containers.internal.js";
import { AsyncEnumerableLike } from "../../../ix.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_liftT: Lift<AsyncEnumerableLike, TInteractive> = {
  lift: AsyncEnumerable_lift,
};

export default AsyncEnumerable_liftT;
