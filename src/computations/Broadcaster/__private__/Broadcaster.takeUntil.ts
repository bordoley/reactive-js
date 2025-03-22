import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { BroadcasterLike } from "../../../computations.js";
import { partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import LiftedListenerMixin from "../../../utils/__mixins__/LiftedListenerMixin.js";
import { DisposableLike_dispose, ListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_takeUntil: Broadcaster.Signature["takeUntil"] =
  /*@__PURE__*/ (<T>() => {
    const createTakeUntilListener = mixInstanceFactory(
      include(LiftedListenerMixin()),
      function TakeUntilListener(
        this: unknown,
        delegate: ListenerLike<T>,
        notifier: BroadcasterLike<unknown>,
      ): ListenerLike<T> {
        init(LiftedListenerMixin<T, T>(), this, delegate);

        pipe(
          notifier,
          Broadcaster_addEventHandler(() => this[DisposableLike_dispose]()),
          Disposable.addTo(this),
        );

        return this;
      },
    );

    return (notifier: BroadcasterLike) =>
      pipe(createTakeUntilListener, partial(notifier), Broadcaster_lift);
  })() as Broadcaster.Signature["takeUntil"];

export default Broadcaster_takeUntil;
