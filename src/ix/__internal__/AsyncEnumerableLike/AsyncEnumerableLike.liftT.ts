import {
  Lift,
  TInteractive,
  interactive,
} from "../../../containers/__internal__/containers.internal";
import { AsyncEnumerableLike } from "../../../ix";
import AsyncEnumerableLike__lift from "./AsyncEnumerableLike.lift";

const AsyncEnumerableLike__liftT: Lift<AsyncEnumerableLike, TInteractive> = {
  lift: AsyncEnumerableLike__lift,
  variance: interactive,
};

export default AsyncEnumerableLike__liftT;
