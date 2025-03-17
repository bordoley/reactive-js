import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  PauseableEventSourceLike,
  ProducerLike,
  ProducerLike_consume,
  ProducerWithSideEffectsLike,
} from "../computations.js";
import {
  Function1,
  bindMethod,
  error,
  newInstance,
  returns,
} from "../functions.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
} from "../utils.js";
import * as Observable from "./Observable.js";

export interface ProducerModule {
  create<T>(
    f: (consumer: ConsumerLike<T>) => void,
  ): ProducerWithSideEffectsLike<T>;

  toEventSource(): PauseableEventSourceLike<Uint8Array> & DisposableLike;

  toObservable<T>(): Function1<ProducerLike<T>, ObservableLike<T>>;
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

export const toObservable: Signature["toObservable"] = /*@__PURE__*/ returns(
  (producer: ProducerLike) =>
    Observable.create(bindMethod(producer, ProducerLike_consume)),
);
