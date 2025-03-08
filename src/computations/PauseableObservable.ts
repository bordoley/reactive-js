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
import { Function1, invoke, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DispatcherLike,
  DispatcherLike_state,
  DispatcherState_capacityExceeded,
  DispatcherState_completed,
  DispatcherState_ready,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../utils.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_dispatchTo from "./Observable/__private__/Observable.dispatchTo.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";

interface PauseableObservableModule {
  create<T>(
    op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>,
  ): PauseableObservableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
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
      instance: Pick<
        PauseableObservableLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>,
    ): PauseableObservableLike<T> {
      const writableStore = (instance[PauseableLike_isPaused] =
        WritableStore.create(true));

      const observableDelegate = pipe(writableStore, op);
      pipe(writableStore, Disposable.addToContainer(observableDelegate));

      init(DelegatingDisposableMixin, instance, writableStore);
      init(
        DelegatingMulticastObservableMixin<T>(),
        instance,
        observableDelegate,
      );

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
  (src: PauseableObservableLike<T>) =>
    Observable_create<T>(observer => {
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
        Disposable.addTo(observer),
      );

      pipe(
        src,
        Observable_dispatchTo(dispatcher),
        invoke(ObservableLike_observe, observer),
      );

      src[PauseableLike_resume]();
    });
