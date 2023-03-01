import { TypePredicate } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  AsyncEnumerableLike_isEnumerable,
  EnumerableAsyncEnumerableLike,
} from "../../../ix.js";

const AsyncEnumerable_isEnumerable: TypePredicate<
  AsyncEnumerableLike,
  EnumerableAsyncEnumerableLike
> = (obs: AsyncEnumerableLike): obs is EnumerableAsyncEnumerableLike =>
  obs[AsyncEnumerableLike_isEnumerable];

export default AsyncEnumerable_isEnumerable;
