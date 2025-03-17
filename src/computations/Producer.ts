import { Readable } from "stream";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  PauseableEventSourceLike,
  ProducerLike_consume,
  ProducerWithSideEffectsLike,
} from "../computations.js";
import { error, newInstance } from "../functions.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
} from "../utils.js";

export interface ProducerModule {
  create<T>(
    f: (consumer: ConsumerLike<T>) => void,
  ): ProducerWithSideEffectsLike<T>;

  toEventSource(
    readable: Readable,
  ): PauseableEventSourceLike<Uint8Array> & DisposableLike;
}

export type Signature = ProducerModule;

class CreateProducer<T> implements ProducerWithSideEffectsLike<T> {
  [ComputationLike_isPure]: false = false as const;
  [ComputationLike_isSynchronous] = false;

  constructor(private readonly f: (consumer: ConsumerLike<T>) => void) {}

  [ProducerLike_consume](consumer: ConsumerLike<T>): void {
    try {
      this.f(consumer);
    } catch (e) {
      consumer[DisposableLike_dispose](error(e));
    }
  }
}

export const create: Signature["create"] = f => newInstance(CreateProducer, f);
