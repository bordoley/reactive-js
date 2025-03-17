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
  PauseableEventSourceLike,
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
} from "../utils.js";
import * as EventSource from "./EventSource.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingEventSourceMixin from "./__mixins__/DelegatingEventSourceMixin.js";

interface PauseableEventSourceModule {
  create<T>(
    op: Function1<
      EventSourceLike<boolean> & DisposableLike,
      EventSourceLike<T>
    >,
  ): PauseableEventSourceLike<T> & DisposableLike;

  toProducer<T>(): Function1<PauseableEventSourceLike<T>, ProducerLike<T>>;
}

export type Signature = PauseableEventSourceModule;

export const create: Signature["create"] = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingEventSourceMixin()),
    function PauseableEventSource(
      this: Pick<
        PauseableEventSourceLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<
        EventSourceLike<boolean> & DisposableLike,
        EventSourceLike<T>
      >,
    ): PauseableEventSourceLike<T> & DisposableLike {
      const writableStore = (this[PauseableLike_isPaused] =
        WritableStore.create(true));

      const delegate = pipe(writableStore, op);

      init(DelegatingDisposableMixin, this, writableStore);
      init(DelegatingEventSourceMixin<T>(), this, delegate);

      this[PauseableLike_resume]();

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

class ProducerFromPauseableEventSource<T> implements ProducerLike<T> {
  public readonly [ComputationLike_isPure] = true;
  public readonly [ComputationLike_isDeferred] = true;
  public readonly [ComputationLike_isSynchronous] = false;

  constructor(private readonly e: PauseableEventSourceLike<T>) {}

  [ProducerLike_consume](consumer: ConsumerLike<T>): void {
    const src = this.e;

    src[PauseableLike_pause]();

    consumer[ConsumerLike_addOnReadyListener](
      bindMethod(src, PauseableLike_resume),
    );

    pipe(
      src,
      EventSource.addEventHandler(v => {
        consumer[EventListenerLike_notify](v);

        if (!consumer[ConsumerLike_isReady]) {
          src[PauseableLike_pause]();
        }
      }),
      Disposable.addTo(consumer),
    );

    if (consumer[ConsumerLike_isReady]) {
      src[PauseableLike_resume]();
    }
  }
}

export const toProducer: Signature["toProducer"] =
  <T>() =>
  (pauseable: PauseableEventSourceLike<T>) =>
    newInstance(ProducerFromPauseableEventSource, pauseable);
