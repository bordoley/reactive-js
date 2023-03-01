import { ContainerOperator } from "../../../containers.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { composeUnsafe } from "../../../functions.js";
import { AsyncEnumerableLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
import AsyncEnumerable_createBase from "./AsyncEnumerable.createBase.js";

interface CreateAsyncEnumerable {
  <A>(op1: ContainerOperator<ObservableLike, void, A>): AsyncEnumerableLike<A>;
  <A, B>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): AsyncEnumerableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): AsyncEnumerableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): AsyncEnumerableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): AsyncEnumerableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): AsyncEnumerableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): AsyncEnumerableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): AsyncEnumerableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
  ): AsyncEnumerableLike<I>;
  <A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
  ): AsyncEnumerableLike<J>;
  <A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
    op11: ContainerOperator<ObservableLike, J, K>,
  ): AsyncEnumerableLike<K>;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
    op11: ContainerOperator<ObservableLike, J, K>,
    op12: ContainerOperator<ObservableLike, K, L>,
  ): AsyncEnumerableLike<L>;
}
const AsyncEnumerable_create: CreateAsyncEnumerable = (
  ...ops: readonly ContainerOperator<ObservableLike, unknown, unknown>[]
): AsyncEnumerableLike => {
  const op =
    ReadonlyArray_getLength(ops) > 1
      ? (composeUnsafe(...ops) as ContainerOperator<
          ObservableLike<unknown>,
          unknown,
          unknown
        >)
      : ops[0];
  return AsyncEnumerable_createBase(op, false, false);
};

export default AsyncEnumerable_create;
