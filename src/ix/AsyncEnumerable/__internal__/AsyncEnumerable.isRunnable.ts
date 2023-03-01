import { TypePredicate } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  AsyncEnumerableLike_isRunnable,
  RunnableAsyncEnumerableLike,
} from "../../../ix.js";

const AsyncEnumerable_isRunnable: TypePredicate<
  AsyncEnumerableLike,
  RunnableAsyncEnumerableLike
> = (obs: AsyncEnumerableLike): obs is RunnableAsyncEnumerableLike =>
  obs[AsyncEnumerableLike_isRunnable];

export default AsyncEnumerable_isRunnable;
