import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  EventSourceLike,
  PauseableEventSourceLike,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import { Function1, none, pipe } from "../functions.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../utils.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingEventSourceMixin from "./__mixins__/DelegatingEventSourceMixin.js";

interface PauseableEventSource {
  create<T>(
    op: Function1<
      EventSourceLike<boolean> & DisposableLike,
      EventSourceLike<T>
    >,
  ): PauseableEventSourceLike<T>;
}

export type Signature = PauseableEventSource;

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
    ): PauseableEventSourceLike<T> {
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
