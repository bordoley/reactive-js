import {
  BroadcasterLike,
  EventSourceLike,
  PauseableBroadcasterLike,
  ProducerLike,
} from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike } from "../utils.js";

export interface PauseableProducerModule {
  create<T>(
    op: Function1<EventSourceLike<boolean>, BroadcasterLike<T>>,
  ): PauseableBroadcasterLike<T> & DisposableLike;

  toProducer<T>(): Function1<PauseableBroadcasterLike<T>, ProducerLike<T>>;
}

export type Signature = PauseableProducerModule;

export const create: Signature["create"] = null as any; /* (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingBroadcasterMixin()),
    function PauseableObservable(
      this: Pick<
        PauseableProducerLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<EventSourceLike<boolean>, MulticastProducerLike<T>>,
    ): PauseableProducerLike<T> & DisposableLike {
      const writableStore = (this[PauseableLike_isPaused] =
        WritableStore.create(true));

      const observableDelegate = pipe(writableStore, op);
      pipe(writableStore, Disposable.addToContainer(observableDelegate));

      init(DelegatingDisposableMixin, this, writableStore);
      init(DelegatingBroadcasterMixin<T>(), this, observableDelegate);

      return this;
    },
    props<TProperties>({
      [PauseableLike_isPaused]: none,
    }),
    {
      [PauseableLike_pause](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = true;
      },

      [PauseableLike_resume](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = false;
      },
    },
  );
})();
*/

/*
class ProducerFromPauseableObservable<T> implements ProducerLike<T> {
  public readonly [ComputationLike_isPure] = true;
  public readonly [ComputationLike_isDeferred] = false;
  public readonly [ComputationLike_isSynchronous] = false;

  constructor(
    private readonly o: PauseableProducerLike<T>,
    private readonly s: SchedulerLike,
  ) {}

  [ProducerLike_consume](consumer: ConsumerLike<T>): void {
    const src = this.o;
    const scheduler = this.s;

    src[PauseableLike_pause]();

    consumer[ConsumerLike_addOnReadyListener](
      bindMethod(src, PauseableLike_resume),
    );

    pipe(
      src,
      Observable_forEach<T>(v => {
        consumer[EventListenerLike_notify](v);

        if (!consumer[ConsumerLike_isReady]) {
          src[PauseableLike_pause]();
        }
      }),
      Observable_subscribe(scheduler),
    );

    if (consumer[ConsumerLike_isReady]) {
      src[PauseableLike_resume]();
    }
  }
}

export const toProducer: Signature["toProducer"] =
  <T>(scheduler: SchedulerLike) =>
  (pauseable: PauseableProducerLike<T>) =>
    newInstance(ProducerFromPauseableObservable, pauseable, scheduler);
*/
