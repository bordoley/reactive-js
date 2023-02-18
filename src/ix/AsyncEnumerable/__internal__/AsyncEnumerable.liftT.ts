import {
  Lift,
  TInteractive,
} from "../../../containers/__internal__/containers.internal";
import { AsyncEnumerableLike } from "../../../ix";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift";

const AsyncEnumerable_liftT: Lift<AsyncEnumerableLike, TInteractive> = {
  lift: AsyncEnumerable_lift,
};

export default AsyncEnumerable_liftT;
