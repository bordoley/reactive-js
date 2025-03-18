import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventSourceLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../../computations.js";
import { Function1, none, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";

export const EventSource_createPauseable: EventSource.Signature["createPauseable"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [PauseableLike_isPaused]: WritableStoreLike<boolean>;
    };

    return mixInstanceFactory(
      include(DelegatingDisposableMixin, DelegatingEventSourceMixin()),
      function PauseableEventSource(
        this: Pick<
          PauseableLike,
          typeof PauseableLike_pause | typeof PauseableLike_resume
        > &
          TProperties,
        op: Function1<
          EventSourceLike<boolean> & DisposableLike,
          EventSourceLike<T>
        >,
      ): PauseableLike & EventSourceLike<T> & DisposableLike {
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

export default EventSource_createPauseable;
