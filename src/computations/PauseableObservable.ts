import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  MulticastObservableLike,
  PauseableObservableLike,
  ProducerLike,
  ProducerLike_consume,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import {
  Function1,
  bindMethod,
  newInstance,
  none,
  pipe,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_isReady,
  DisposableLike,
  EventListenerLike_notify,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../utils.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_subscribe from "./Observable/__private__/Observable.subscribe.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";

interface PauseableObservableModule {
  create<T>(
    op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>,
  ): PauseableObservableLike<T> & DisposableLike;

  toProducer<T>(
    scheduler: SchedulerLike,
  ): Function1<PauseableObservableLike<T>, ProducerLike<T>>;
}

export type Signature = PauseableObservableModule;

export const create: Signature["create"] = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin()),
    function PauseableObservable(
      this: Pick<
        PauseableObservableLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>,
    ): PauseableObservableLike<T> & DisposableLike {
      const writableStore = (this[PauseableLike_isPaused] =
        WritableStore.create(true));

      const observableDelegate = pipe(writableStore, op);
      pipe(writableStore, Disposable.addToContainer(observableDelegate));

      init(DelegatingDisposableMixin, this, writableStore);
      init(DelegatingMulticastObservableMixin<T>(), this, observableDelegate);

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

class ProducerFromPauseableObservable<T> implements ProducerLike<T> {
  public readonly [ComputationLike_isPure] = true;
  public readonly [ComputationLike_isDeferred] = false;
  public readonly [ComputationLike_isSynchronous] = false;

  constructor(
    private readonly o: PauseableObservableLike<T>,
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
  (pauseable: PauseableObservableLike<T>) =>
    newInstance(ProducerFromPauseableObservable, pauseable, scheduler);
