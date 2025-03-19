import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
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
        this: Pick<
          PauseableLike,
          typeof PauseableLike_pause | typeof PauseableLike_resume
        > &
          TProperties,
        op: Function1<
          BroadcasterLike<boolean> & DisposableLike,
          BroadcasterLike<T>
        >,
        options?: {
          readonly autoDispose?: boolean;
        },
      ): PauseableLike & BroadcasterLike<T> & DisposableLike {
        const writableStore = (this[PauseableLike_isPaused] =
          WritableStore.create(true, options));

        const delegate = pipe(writableStore, op);

        init(DelegatingDisposableMixin, this, writableStore);
        init(DelegatingBroadcasterMixin<T>(), this, delegate);

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

export default Broadcaster_createPauseable;
