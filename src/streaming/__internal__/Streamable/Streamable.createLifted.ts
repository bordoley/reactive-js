import { ContainerOperator } from "../../../containers";
import { composeUnsafe, getLength } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { StreamableLike } from "../../../streaming";

import Stream_create from "../Stream/Stream.create";
import Streamable_create from "./Streamable.create";

interface CreateLiftedStreamable {
  <T, A>(op1: ContainerOperator<ObservableLike, T, A>): StreamableLike<T, A>;
  <T, A, B>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): StreamableLike<T, B>;
  <T, A, B, C>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): StreamableLike<T, C>;
  <T, A, B, C, D>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): StreamableLike<T, D>;
  <T, A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): StreamableLike<T, E>;
  <T, A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): StreamableLike<T, F>;
  <T, A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): StreamableLike<T, G>;
  <T, A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): StreamableLike<T, H>;
  <T, A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
  ): StreamableLike<T, I>;
  <T, A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
  ): StreamableLike<T, J>;
  <T, A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<ObservableLike, T, A>,
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
  ): StreamableLike<T, K>;
  <T, A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<ObservableLike, T, A>,
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
  ): StreamableLike<T, L>;
}
const Streamable_createLifted: CreateLiftedStreamable = (
  ...ops: readonly ContainerOperator<ObservableLike<any>, any, any>[]
) => {
  const op =
    getLength(ops) > 1
      ? (composeUnsafe(...ops) as ContainerOperator<
          ObservableLike,
          unknown,
          unknown
        >)
      : ops[0];
  return Streamable_create((scheduler, options) =>
    Stream_create(op, scheduler, options),
  );
};

export default Streamable_createLifted;
