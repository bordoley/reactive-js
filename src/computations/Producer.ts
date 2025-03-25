import {
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  ConcurrentComputationModule,
  ConcurrentDeferredComputationModule,
  ConcurrentReactiveComputationModule,
  DeferredReactiveComputationModule,
  ProducerLike,
  ProducerWithSideEffectsLike,
  PureProducerLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
} from "../computations.js";
import { ConsumerLike } from "../utils.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";
import {
  Producer_gen,
  Producer_genPure,
} from "./Producer/__private__/Producer.gen.js";
import Producer_toReadonlyArrayAsync from "./Producer/__private__/Producer.toReadonlyArrayAsync.js";

/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ProducerLike<this[typeof Computation_T]>;

  readonly [Computation_pureSynchronousOfT]?: never;
  readonly [Computation_synchronousWithSideEffectsOfT]?: never;

  readonly [Computation_pureDeferredOfT]?: PureProducerLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: ProducerWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_multicastOfT]?: never;
}

export type Computation = ProducerComputation;

export interface ProducerModule
  extends ComputationModule<ProducerComputation>,
    ConcurrentDeferredComputationModule<
      ProducerComputation,
      {
        genAsync: { maxYieldInterval?: number };
        genPureAsync: { maxYieldInterval?: number };
      }
    >,
    ConcurrentReactiveComputationModule<ProducerComputation>,
    SequentialComputationModule<ProducerComputation>,
    SequentialReactiveComputationModule<ProducerComputation>,
    ConcurrentComputationModule<ProducerComputation>,
    DeferredReactiveComputationModule<ProducerComputation> {
  create<T>(
    f: (consumer: ConsumerLike<T>) => void,
  ): ProducerWithSideEffectsLike<T>;
}

export type Signature = ProducerModule;

export const broadcast: Signature["broadcast"] = Producer_broadcast;
export const gen: Signature["gen"] = Producer_gen;
export const genPure: Signature["genPure"] = Producer_genPure;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Producer_toReadonlyArrayAsync;
