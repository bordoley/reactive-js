import {
  BroadcasterLike,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
  ProducerLike,
  ProducerWithSideEffectsLike,
  PureProducerLike,
} from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike } from "../utils.js";

/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ProducerLike<this[typeof Computation_T]>;

  readonly [Computation_pureDeferredOfT]?: PureProducerLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: ProducerWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

export type Computation = ProducerComputation;

export interface ProducerModule {
  broadcast<T>(options?: {
    replay?: number;
  }): Function1<ProducerLike<T>, BroadcasterLike<T> & DisposableLike>;
}

export type Signature = ProducerModule;

export const broadcast: Signature["broadcast"] = null as any;
