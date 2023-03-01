import { ContainerOperator } from "../../../containers.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { composeUnsafe } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  RunnableAsyncEnumerableLike,
} from "../../../ix.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
import AsyncEnumerable_createBase from "../../AsyncEnumerable/__internal__/AsyncEnumerable.createBase.js";

interface CreateRunnableAsyncEnumerable {
  <A>(
    op1: ContainerOperator<ObservableLike, void, A>,
  ): RunnableAsyncEnumerableLike<A>;
  <A, B>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
  ): RunnableAsyncEnumerableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
  ): RunnableAsyncEnumerableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
  ): AsyncEnumerableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
  ): AsyncEnumerableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
  ): AsyncEnumerableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
    op7: ContainerOperator<RunnableLike, F, G>,
  ): AsyncEnumerableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
    op7: ContainerOperator<RunnableLike, F, G>,
    op8: ContainerOperator<RunnableLike, G, H>,
  ): AsyncEnumerableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
    op7: ContainerOperator<RunnableLike, F, G>,
    op8: ContainerOperator<RunnableLike, G, H>,
    op9: ContainerOperator<RunnableLike, H, I>,
  ): AsyncEnumerableLike<I>;
  <A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
    op7: ContainerOperator<RunnableLike, F, G>,
    op8: ContainerOperator<RunnableLike, G, H>,
    op9: ContainerOperator<RunnableLike, H, I>,
    op10: ContainerOperator<RunnableLike, I, J>,
  ): AsyncEnumerableLike<J>;
  <A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
    op7: ContainerOperator<RunnableLike, F, G>,
    op8: ContainerOperator<RunnableLike, G, H>,
    op9: ContainerOperator<RunnableLike, H, I>,
    op10: ContainerOperator<RunnableLike, I, J>,
    op11: ContainerOperator<RunnableLike, J, K>,
  ): AsyncEnumerableLike<K>;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<RunnableLike, void, A>,
    op2: ContainerOperator<RunnableLike, A, B>,
    op3: ContainerOperator<RunnableLike, B, C>,
    op4: ContainerOperator<RunnableLike, C, D>,
    op5: ContainerOperator<RunnableLike, D, E>,
    op6: ContainerOperator<RunnableLike, E, F>,
    op7: ContainerOperator<RunnableLike, F, G>,
    op8: ContainerOperator<RunnableLike, G, H>,
    op9: ContainerOperator<RunnableLike, H, I>,
    op10: ContainerOperator<RunnableLike, I, J>,
    op11: ContainerOperator<RunnableLike, J, K>,
    op12: ContainerOperator<RunnableLike, K, L>,
  ): AsyncEnumerableLike<L>;
}
const RunnableAsyncEnumerable_create: CreateRunnableAsyncEnumerable = ((
  ...ops: readonly ContainerOperator<RunnableLike, unknown, unknown>[]
): AsyncEnumerableLike => {
  const op =
    ReadonlyArray_getLength(ops) > 1
      ? (composeUnsafe(...ops) as ContainerOperator<
          RunnableLike,
          unknown,
          unknown
        >)
      : ops[0];

  return AsyncEnumerable_createBase(op, false, true);
}) as CreateRunnableAsyncEnumerable;

export default RunnableAsyncEnumerable_create;
