import { ContainerOperator } from "../../../containers.js";
import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { Updater, composeUnsafe, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { PauseableState, PauseableState_paused } from "../../../scheduling.js";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.js";
import { FlowableLike, FlowableStreamLike } from "../../../streaming.js";

import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "../../Streamable/__internal__/Streamable.create.js";

interface CreateLiftedFlowable {
  <A>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
  ): FlowableLike<A>;
  <A, B>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): FlowableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): FlowableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): FlowableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): FlowableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): FlowableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): FlowableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): FlowableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
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
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
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
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
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
    op1: ContainerOperator<ObservableLike, PauseableState, A>,
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

const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

const Flowable_createLifted: CreateLiftedFlowable = <T>(
  ...ops: readonly ContainerOperator<ObservableLike, any, any>[]
) => {
  const op = composeUnsafe(
    Observable_scan<Updater<PauseableState>, PauseableState>(
      updateReducer,
      returns(PauseableState_paused),
    ),
    Container_concatWith<ObservableLike, PauseableState>(
      { concat: Observable_merge },
      pipe([PauseableState_paused], ReadonlyArray_toRunnableObservable()),
    ),
    Observable_distinctUntilChanged<T>(),
    ...ops,
  ) as ContainerOperator<ObservableLike, unknown, unknown>;
  return Streamable_create((scheduler, options) => {
    const stream = Stream_create<Updater<PauseableState>, unknown>(
      op,
      scheduler,
      options,
    ) as FlowableStreamLike;
    return pipe(stream, Dispatcher_dispatch(returns(PauseableState_paused)));
  }) as FlowableLike<T>;
};

export default Flowable_createLifted;
