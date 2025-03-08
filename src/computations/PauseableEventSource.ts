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
  DispatcherLike,
  DispatcherLike_state,
  DispatcherState_capacityExceeded,
  DispatcherState_completed,
  DispatcherState_ready,
  DisposableLike,
  EventListenerLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike_enqueue,
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

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
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
      instance: Pick<
        PauseableEventSourceLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<
        EventSourceLike<boolean> & DisposableLike,
        EventSourceLike<T>
      >,
    ): PauseableEventSourceLike<T> & DisposableLike {
      const writableStore = (instance[PauseableLike_isPaused] =
        WritableStore.create(true));

      const delegate = pipe(writableStore, op);

      init(DelegatingDisposableMixin, instance, writableStore);
      init(DelegatingEventSourceMixin<T>(), instance, delegate);

      return instance;
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

export const dispatchTo: Signature["dispatchTo"] =
  <T>(dispatcher: DispatcherLike<T>) =>
  (src: PauseableEventSourceLike<T>) =>
    EventSource.create((listener: EventListenerLike<T>) => {
      pipe(
        dispatcher[DispatcherLike_state],
        EventSource.addEventHandler(ev => {
          if (
            ev === DispatcherState_capacityExceeded ||
            ev === DispatcherState_completed
          ) {
            src[PauseableLike_pause]();
          } else if (ev === DispatcherState_ready) {
            src[PauseableLike_resume]();
          }
        }),
        Disposable.addTo(listener),
      );

      pipe(
        src,
        EventSource.addEventHandler(
          bindMethod(dispatcher, QueueableLike_enqueue),
        ),
        Disposable.addTo(listener),
      );

      src[EventSourceLike_addEventListener](listener);

      src[PauseableLike_resume]();
    });
