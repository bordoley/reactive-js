import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
  PauseableEventSourceLike,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import { Function1, bindMethod, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_isReady,
  DisposableLike,
  EventListenerLike,
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

  enqueue<T>(
    queue: ConsumerLike<T>,
  ): Function1<
    PauseableEventSourceLike<T>,
    EventSourceLike<T> & DisposableLike
  >;
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

export const enqueue: Signature["enqueue"] =
  <T>(queue: ConsumerLike<T>) =>
  (src: PauseableEventSourceLike<T>) =>
    EventSource.create((listener: EventListenerLike<T>) => {
      pipe(
        queue[ConsumerLike_addOnReadyListener](
          bindMethod(src, PauseableLike_resume),
        ),
        Disposable.addTo(listener),
      );

      pipe(
        src,
        EventSource.addEventHandler(v => {
          queue[EventListenerLike_notify](v);

          if (!queue[ConsumerLike_isReady]) {
            src[PauseableLike_pause]();
          }
        }),
        Disposable.addTo(listener),
      );

      src[EventSourceLike_addEventListener](listener);

      src[PauseableLike_resume]();
    });
