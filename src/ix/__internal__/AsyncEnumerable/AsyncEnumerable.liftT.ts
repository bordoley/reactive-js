import {
  Lift,
  TInteractive,
  interactive,
} from "../../../containers/__internal__/containers.internal";
import { AsyncEnumerableLike } from "../../../ix";
import AsyncEnumerable$lift from "./AsyncEnumerable.lift";

const AsyncEnumerable$liftT: Lift<AsyncEnumerableLike, TInteractive> = {
  lift: AsyncEnumerable$lift,
  variance: interactive,
};

export default AsyncEnumerable$liftT;
