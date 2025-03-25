import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../../computations.js";
import { Function1, none, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableContainerLike,
  DisposableLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";

export const Broadcaster_createPauseable: Broadcaster.Signature["createPauseable"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [PauseableLike_isPaused]: WritableStoreLike<boolean>;
    };

    return mixInstanceFactory(
      include(DelegatingDisposableMixin, DelegatingBroadcasterMixin()),
      function PauseableBroadcaster(
        this: Omit<PauseableLike, keyof DisposableContainerLike> & TProperties,
        op: Function1<
          BroadcasterLike<boolean> & DisposableLike,
          BroadcasterLike<T>
        >,
        options?: {
          readonly autoDispose?: boolean;
        },
      ): PauseableLike & BroadcasterLike<T> & DisposableLike {
        const writableStore = WritableStore.create(true, options);
        this[PauseableLike_isPaused] = writableStore;

        const delegate = pipe(writableStore, op);

        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingBroadcasterMixin<T>(), this, delegate);

        this[PauseableLike_resume]();

        return this;
      },
      props<TProperties>({
        [PauseableLike_isPaused]: none,
      }),
      proto({
        [PauseableLike_pause](this: TProperties) {
          this[PauseableLike_isPaused][StoreLike_value] = true;
        },

        [PauseableLike_resume](this: TProperties) {
          this[PauseableLike_isPaused][StoreLike_value] = false;
        },
      }),
    );
  })();

export default Broadcaster_createPauseable;
