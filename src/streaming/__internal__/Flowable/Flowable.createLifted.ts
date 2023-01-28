import { ContainerOperator } from "../../../containers";
import { composeUnsafe, getLength, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Dispatcher_dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import {
  FlowMode,
  FlowMode_pause,
  FlowableLike,
  FlowableStreamLike,
} from "../../../streaming";

import Stream_create from "../Stream/Stream.create";
import Streamable_create from "../Streamable/Streamable.create";

interface CreateLiftedFlowable {
  <A>(op1: ContainerOperator<ObservableLike, FlowMode, A>): FlowableLike<A>;
  <A, B>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): FlowableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): FlowableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): FlowableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): FlowableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): FlowableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): FlowableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): FlowableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
  ): FlowableLike<I>;
  <A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
  ): FlowableLike<J>;
  <A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
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
  ): FlowableLike<K>;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<ObservableLike, FlowMode, A>,
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
  ): FlowableLike<L>;
}
const Flowable_createLifted: CreateLiftedFlowable = <T>(
  ...ops: readonly ContainerOperator<ObservableLike, any, any>[]
) => {
  const op =
    getLength(ops) > 1
      ? (composeUnsafe(...ops) as ContainerOperator<
          ObservableLike,
          unknown,
          unknown
        >)
      : ops[0];
  return Streamable_create((scheduler, options) => {
    const stream = Stream_create<FlowMode, unknown>(
      op,
      scheduler,
      options,
    ) as FlowableStreamLike;
    return pipe(stream, Dispatcher_dispatch(FlowMode_pause));
  }) as FlowableLike<T>;
};

export default Flowable_createLifted;
