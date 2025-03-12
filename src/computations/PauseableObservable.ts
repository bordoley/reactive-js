import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import * as EventSource from "../computations/EventSource.js";
import {
  DeferredObservableWithSideEffectsLike,
  EventSourceLike,
  MulticastObservableLike,
  ObservableLike_observe,
  PauseableObservableLike,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import { Function1, bindMethod, invoke, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_enqueue,
  QueueableLike_onReady,
} from "../utils.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";

interface PauseableObservableModule {
  create<T>(
    op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>,
  ): PauseableObservableLike<T> & DisposableLike;

  enqueue<T>(
    queue: QueueableLike<T>,
  ): Function1<
    PauseableObservableLike<T>,
    DeferredObservableWithSideEffectsLike<T>
  >;
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

export const enqueue: Signature["enqueue"] =
  <T>(queue: QueueableLike<T>) =>
  (src: PauseableObservableLike<T>) =>
    Observable_create<T>(observer => {
      pipe(
        queue[QueueableLike_onReady],
        EventSource.addEventHandler(bindMethod(src, PauseableLike_resume)),
        Disposable.addTo(observer),
      );

      pipe(
        src,
        Observable_forEach<T>(v => {
          if (!queue[QueueableLike_enqueue](v)) {
            src[PauseableLike_pause]();
          }
        }),
        invoke(ObservableLike_observe, observer),
      );

      src[PauseableLike_resume]();
    });
