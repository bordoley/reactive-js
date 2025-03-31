import { Array_length } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";

const Broadcaster_merge: Broadcaster.Signature["merge"] = /*@__PURE__*/ (<
  T,
>() => {
  const MergeBroadcaster_broadcasters = Symbol("MergeBroadcaster_broadcasters");

  type TProperties = {
    [MergeBroadcaster_broadcasters]: readonly BroadcasterLike<T>[];
  };

  const isMergeBroadcaster = <T>(
    broadcaster: BroadcasterLike<T>,
  ): broadcaster is BroadcasterLike<T> & TProperties =>
    isSome((broadcaster as any)[MergeBroadcaster_broadcasters]);

  const flattenbroadcasters = (
    broadcasters: readonly BroadcasterLike<T>[],
  ): readonly BroadcasterLike<T>[] =>
    broadcasters.some(isMergeBroadcaster)
      ? broadcasters.flatMap(broadcaster =>
          isMergeBroadcaster(broadcaster)
            ? flattenbroadcasters(broadcaster[MergeBroadcaster_broadcasters])
            : broadcaster,
        )
      : broadcasters;

  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin()),
    function MergeBroadcaster(
      this: TProperties &
        Omit<BroadcasterLike<T>, keyof DisposableContainerLike>,
      ...broadcasters: readonly BroadcasterLike<T>[]
    ): BroadcasterLike<T> {
      broadcasters = flattenbroadcasters(broadcasters);
      this[MergeBroadcaster_broadcasters] = broadcasters;

      const disposable = Disposable.create();
      init(DelegatingDisposableContainerMixin(), this, disposable);

      const count = broadcasters[Array_length];
      let completed = 0;
      for (const broadcaster of broadcasters) {
        pipe(
          broadcaster,
          DisposableContainer.onDisposed(e => {
            completed++;
            if (completed >= count || isSome(e)) {
              disposable[DisposableLike_dispose](e);
            }
          }),
        );
      }

      return this;
    },
    props<TProperties>({
      [MergeBroadcaster_broadcasters]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,
      [ComputationLike_isPure]: true as const,

      [SourceLike_subscribe](
        this: TProperties,
        listener: EventListenerLike<T>,
      ): void {
        const broadcasters = this[MergeBroadcaster_broadcasters];
        const count = broadcasters[Array_length];
        let completed = 0;

        const eventHandler = bindMethod(listener, EventListenerLike_notify);

        const onEventHandlerCompleted = () => {
          completed++;
          if (completed >= count) {
            listener[DisposableLike_dispose]();
          }
        };

        for (const broadcaster of broadcasters) {
          pipe(
            broadcaster,
            Broadcaster_addEventHandler(eventHandler),
            Disposable.addTo(listener),
            DisposableContainer.onComplete(onEventHandlerCompleted),
          );
        }
      },
    },
  );
})() as Broadcaster.Signature["merge"];

export default Broadcaster_merge;
