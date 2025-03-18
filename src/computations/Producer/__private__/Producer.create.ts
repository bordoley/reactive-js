import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DeferredProducerWithSideEffectsLike,
  ProducerLike,
  ProducerLike_consume,
  PureDeferredProducerLike,
  PureSynchronousProducerLike,
  SynchronousProducerWithSideEffectsLike,
} from "../../../computations.js";
import { SideEffect1, error, newInstance } from "../../../functions.js";
import { ConsumerLike, DisposableLike_dispose } from "../../../utils.js";
import type * as Producer from "../../Producer.js";

class CreateProducer<T> implements ProducerLike<T> {
  readonly [ComputationLike_isDeferred]: boolean;
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isSynchronous]: boolean;

  constructor(
    private readonly f: (consumer: ConsumerLike<T>) => void,
    isDeferred: boolean,
    isPure: boolean,
    isSynchronous: boolean,
  ) {
    this[ComputationLike_isDeferred] = isDeferred;
    this[ComputationLike_isPure] = isPure;
    this[ComputationLike_isSynchronous] = isSynchronous;
  }

  [ProducerLike_consume](consumer: ConsumerLike<T>): void {
    try {
      this.f(consumer);
    } catch (e) {
      consumer[DisposableLike_dispose](error(e));
    }
  }
}

export const Producer_createPureSynchronous = <T>(
  f: SideEffect1<ConsumerLike<T>>,
) =>
  newInstance(
    CreateProducer<T>,
    f,
    false,
    true,
    true,
  ) as PureSynchronousProducerLike<T>;

export const Producer_createSynchronousWithSideEffects = <T>(
  f: SideEffect1<ConsumerLike<T>>,
) =>
  newInstance(
    CreateProducer<T>,
    f,
    false,
    true,
    false,
  ) as SynchronousProducerWithSideEffectsLike<T>;

export const Producer_createPureDeferred = <T>(
  f: SideEffect1<ConsumerLike<T>>,
) =>
  newInstance(
    CreateProducer<T>,
    f,
    true,
    true,
    false,
  ) as PureDeferredProducerLike<T>;

export const Producer_createDeferredWithSideEffects = <T>(
  f: SideEffect1<ConsumerLike<T>>,
) =>
  newInstance(
    CreateProducer<T>,
    f,
    true,
    false,
    false,
  ) as DeferredProducerWithSideEffectsLike<T>;

const Producer_create: Producer.Signature["create"] =
  Producer_createDeferredWithSideEffects;

export default Producer_create;
