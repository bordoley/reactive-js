import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  PureIterableLike,
} from "../../../computations.js";
import { Factory } from "../../../functions.js";

const Iterable_createPure = <T>(
  f: Factory<Iterator<T>>,
): PureIterableLike<T> => ({
  [ComputationLike_isPure]: true,
  [ComputationLike_isDeferred]: true,
  [ComputationLike_isSynchronous]: true,

  [Symbol.iterator]: f,
});

export default Iterable_createPure;
