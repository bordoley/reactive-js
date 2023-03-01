import { ContainerOperator } from "../../../containers.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { composeUnsafe } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  EnumerableAsyncEnumerableLike,
} from "../../../ix.js";
import { EnumerableObservableLike, ObservableLike } from "../../../rx.js";
import AsyncEnumerable_createBase from "../../AsyncEnumerable/__internal__/AsyncEnumerable.createBase.js";

interface CreateEnumerableAsyncEnumerable {
  <A>(
    op1: ContainerOperator<ObservableLike, void, A>,
  ): EnumerableAsyncEnumerableLike<A>;
  <A, B>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
  ): EnumerableAsyncEnumerableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
  ): EnumerableAsyncEnumerableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
  ): AsyncEnumerableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
  ): AsyncEnumerableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
  ): AsyncEnumerableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
    op7: ContainerOperator<EnumerableObservableLike, F, G>,
  ): AsyncEnumerableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
    op7: ContainerOperator<EnumerableObservableLike, F, G>,
    op8: ContainerOperator<EnumerableObservableLike, G, H>,
  ): AsyncEnumerableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
    op7: ContainerOperator<EnumerableObservableLike, F, G>,
    op8: ContainerOperator<EnumerableObservableLike, G, H>,
    op9: ContainerOperator<EnumerableObservableLike, H, I>,
  ): AsyncEnumerableLike<I>;
  <A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
    op7: ContainerOperator<EnumerableObservableLike, F, G>,
    op8: ContainerOperator<EnumerableObservableLike, G, H>,
    op9: ContainerOperator<EnumerableObservableLike, H, I>,
    op10: ContainerOperator<EnumerableObservableLike, I, J>,
  ): AsyncEnumerableLike<J>;
  <A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
    op7: ContainerOperator<EnumerableObservableLike, F, G>,
    op8: ContainerOperator<EnumerableObservableLike, G, H>,
    op9: ContainerOperator<EnumerableObservableLike, H, I>,
    op10: ContainerOperator<EnumerableObservableLike, I, J>,
    op11: ContainerOperator<EnumerableObservableLike, J, K>,
  ): AsyncEnumerableLike<K>;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    op2: ContainerOperator<EnumerableObservableLike, A, B>,
    op3: ContainerOperator<EnumerableObservableLike, B, C>,
    op4: ContainerOperator<EnumerableObservableLike, C, D>,
    op5: ContainerOperator<EnumerableObservableLike, D, E>,
    op6: ContainerOperator<EnumerableObservableLike, E, F>,
    op7: ContainerOperator<EnumerableObservableLike, F, G>,
    op8: ContainerOperator<EnumerableObservableLike, G, H>,
    op9: ContainerOperator<EnumerableObservableLike, H, I>,
    op10: ContainerOperator<EnumerableObservableLike, I, J>,
    op11: ContainerOperator<EnumerableObservableLike, J, K>,
    op12: ContainerOperator<EnumerableObservableLike, K, L>,
  ): AsyncEnumerableLike<L>;
}
const EnumerableAsyncEnumerable_create: CreateEnumerableAsyncEnumerable = ((
  ...ops: readonly ContainerOperator<
    EnumerableObservableLike,
    unknown,
    unknown
  >[]
): AsyncEnumerableLike => {
  const op =
    ReadonlyArray_getLength(ops) > 1
      ? (composeUnsafe(...ops) as ContainerOperator<
          EnumerableObservableLike,
          unknown,
          unknown
        >)
      : ops[0];

  return AsyncEnumerable_createBase(op, true, true);
}) as CreateEnumerableAsyncEnumerable;

export default EnumerableAsyncEnumerable_create;
