import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  EventSourceLike,
  MulticastObservableLike,
  PauseableObservableLike,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import { Function1, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../utils.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingMulticastObservableMixin from "./__mixins__/DelegatingMulticastObservableMixin.js";

interface PauseableObservableModule {
  create<T>(
    op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>,
  ): PauseableObservableLike<T>;
}

type Signature = PauseableObservableModule;

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
