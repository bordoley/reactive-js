import { delegatingDisposableMixin } from "./__internal__/util/DisposableLikeMixins";
import {
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "./__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
} from "./containers";
import { concatWith } from "./containers/ContainerLike";
import { toObservable } from "./containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  composeUnsafe,
  getLength,
  newInstance,
  none,
  pipe,
  returns,
  updateReducer,
} from "./functions";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ReactiveContainerLike_sinkInto,
  SubjectLike,
  createObservable,
  createSubject,
} from "./rx";
import { getObserverCount, getReplay } from "./rx/MulticastObservableLike";
import {
  distinctUntilChanged,
  mergeT,
  multicast,
  scan,
} from "./rx/ObservableLike";
import { sinkInto } from "./rx/ReactiveContainerLike";
import { publish } from "./rx/SubjectLike";
import {
  DispatcherLike,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  ObserverLike,
  SchedulerLike,
} from "./scheduling";
import { DisposableLike, PauseableLike, SourceLike } from "./util";
import { addTo } from "./util/DisposableLike";

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}

/** @ignore */
export const StreamableLike_stream = Symbol("StreamableLike_stream");

export interface StreamableLike<
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export interface StreamableStateLike<T = unknown>
  extends StreamableLike<Updater<T>, T> {}

export type FlowMode = "resume" | "pause";

export interface FlowableStreamLike<T = unknown>
  extends StreamLike<FlowMode, T>,
    PauseableLike {}

export interface FlowableLike<T = unknown>
  extends StreamableLike<FlowMode, T, FlowableStreamLike<T>>,
    ContainerLike {
  readonly TContainerOf?: FlowableLike<this["T"]>;
}

export interface AsyncEnumeratorLike<T = unknown>
  extends SourceLike,
    StreamLike<void, T> {}

export type ToFlowable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toFlowable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, FlowableLike<T>>;
};

export const createStream = /*@__PURE__*/ (() => {
  const createStreamInternal = (<TReq, T>() => {
    type TProperties = {
      subject: SubjectLike<TReq>;
      observable: MulticastObservableLike<T>;
      [DispatcherLike_scheduler]: SchedulerLike;
    };
    return pipe(
      clazz(
        function StreamImpl(
          this: DisposableLike & TProperties,
          op: ContainerOperator<ObservableLike, TReq, T>,
          scheduler: SchedulerLike,
          replay: number,
        ) {
          this[DispatcherLike_scheduler] = scheduler;

          const subject = createSubject({ replay });
          this.subject = subject;

          init(delegatingDisposableMixin, this, subject);

          const observable = pipe(
            subject,
            op,
            multicast<T>(scheduler, { replay }),
          );
          this.observable = observable;

          pipe(this, addTo(this.observable));
        },
        {
          subject: none,
          observable: none,
          [DispatcherLike_scheduler]: none,
        },
        {
          get [MulticastObservableLike_observerCount](): number {
            const self = this as unknown as TProperties;
            return getObserverCount(self.observable);
          },

          get [MulticastObservableLike_replay](): number {
            const self = this as unknown as TProperties;
            return getReplay(self.observable);
          },

          [DispatcherLike_dispatch](req: TReq) {
            const self = this as unknown as TProperties;
            pipe(self.subject, publish(req));
          },

          [ReactiveContainerLike_sinkInto](observer: ObserverLike<T>) {
            const self = this as unknown as TProperties;
            pipe(self.observable, sinkInto(observer));
          },
        },
      ),
      mixWith(delegatingDisposableMixin),
      createObjectFactory<
        StreamLike<TReq, T>,
        ContainerOperator<ObservableLike, TReq, T>,
        SchedulerLike,
        number
      >(),
    );
  })();

  return <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, T> => {
    const { replay = 0 } = options ?? {};
    return createStreamInternal(
      op as ContainerOperator<ObservableLike, unknown, unknown>,
      scheduler,
      replay,
    );
  };
})();

export const createStreamble = /*@__PURE__*/ (() => {
  class CreateStreamable<
    TReq,
    TData,
    TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
  > implements StreamableLike<TReq, TData, TStream>
  {
    constructor(
      readonly stream: (
        scheduler: SchedulerLike,
        options?: { readonly replay?: number },
      ) => TStream,
    ) {}

    [StreamableLike_stream](
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ): TStream {
      return this.stream(scheduler, options);
    }
  }

  return <
    TReq,
    TData,
    TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
  >(
    stream: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => TStream,
  ): StreamableLike<TReq, TData, TStream> =>
    newInstance(CreateStreamable, stream);
})();

interface CreateLiftedFlowable {
  <T, A>(op1: ContainerOperator<ObservableLike, T, A>): FlowableLike<A>;
  <T, A, B>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): FlowableLike<B>;
  <T, A, B, C>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): FlowableLike<C>;
  <T, A, B, C, D>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): FlowableLike<D>;
  <T, A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): FlowableLike<E>;
  <T, A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): FlowableLike<F>;
  <T, A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): FlowableLike<G>;
  <T, A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, T, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): FlowableLike<H>;
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
  ): FlowableLike<I>;
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
  ): FlowableLike<J>;
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
  ): FlowableLike<K>;
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
  ): FlowableLike<L>;
}
export const createLiftedFlowable: CreateLiftedFlowable = <T>(
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
  return createStreamble((scheduler, options) =>
    createStream(op, scheduler, options),
  ) as unknown as FlowableLike<T>;
};

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

export const createLiftedStreamable: CreateLiftedStreamable = (
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
  return createStreamble((scheduler, options) =>
    createStream(op, scheduler, options),
  );
};

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  createLiftedStreamable(obs =>
    createObservable(observer => {
      const acc = initialState();
      pipe(
        obs,
        scan(reducer, returns(acc)),
        concatWith<ObservableLike, T>(mergeT, pipe([acc], toObservable())),
        distinctUntilChanged(options),
        sinkInto(observer),
      );
    }),
  );

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableStateLike<T> =>
  createActionReducer(updateReducer, initialState, options);
