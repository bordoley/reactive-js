import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../../computations.js";
import { Function1, pipe } from "../../../functions.js";
import { DelegatingDisposableContainerLike_delegate } from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
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
  /*@__PURE__*/ (<T>() =>
    mixInstanceFactory(
      include(DelegatingDisposableMixin(), DelegatingBroadcasterMixin()),
      function PauseableBroadcaster(
        this: Omit<PauseableLike, keyof DisposableContainerLike>,
        op: Function1<
          BroadcasterLike<boolean> & DisposableLike,
          BroadcasterLike<T>
        >,
        options?: {
          readonly autoDispose?: boolean;
        },
      ): PauseableLike & BroadcasterLike<T> & DisposableLike {
        const writableStore = WritableStore.create(true, options);
        const delegate = pipe(writableStore, op);

        init(DelegatingDisposableMixin(), this, writableStore);
        init(DelegatingBroadcasterMixin<T>(), this, delegate);

        this[PauseableLike_resume]();

        return this;
      },
      props(),
      {
        get [PauseableLike_isPaused]() {
          unsafeCast<DelegatingDisposableLike<WritableStoreLike<boolean>>>(
            this,
          );
          return this[DelegatingDisposableContainerLike_delegate];
        },

        [PauseableLike_pause](
          this: DelegatingDisposableLike<WritableStoreLike<boolean>>,
        ) {
          this[DelegatingDisposableContainerLike_delegate][StoreLike_value] =
            true;
        },

        [PauseableLike_resume](
          this: DelegatingDisposableLike<WritableStoreLike<boolean>>,
        ) {
          this[DelegatingDisposableContainerLike_delegate][StoreLike_value] =
            false;
        },
      },
    ))();

export default Broadcaster_createPauseable;
