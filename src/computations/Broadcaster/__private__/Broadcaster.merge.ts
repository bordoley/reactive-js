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
  const MergeBroadcaster_Broadcasters = Symbol("MergeBroadcaster_Broadcasters");

  type TProperties = {
    [MergeBroadcaster_Broadcasters]: readonly BroadcasterLike<T>[];
  };

  const isMergeBroadcaster = <T>(
    observable: BroadcasterLike<T>,
  ): observable is BroadcasterLike<T> & TProperties =>
    isSome((observable as any)[MergeBroadcaster_Broadcasters]);

  const flattenBroadcasters = (
    observables: readonly BroadcasterLike<T>[],
  ): readonly BroadcasterLike<T>[] =>
    observables.some(isMergeBroadcaster)
      ? observables.flatMap(observable =>
          isMergeBroadcaster(observable)
            ? flattenBroadcasters(observable[MergeBroadcaster_Broadcasters])
            : observable,
        )
      : observables;

  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin()),
    function MergeBroadcaster(
      this: TProperties &
        Omit<BroadcasterLike<T>, keyof DisposableContainerLike>,
      ...Broadcasters: readonly BroadcasterLike<T>[]
    ): BroadcasterLike<T> {
      Broadcasters = flattenBroadcasters(Broadcasters);
      this[MergeBroadcaster_Broadcasters] = Broadcasters;

      const disposable = Disposable.create();
      init(DelegatingDisposableContainerMixin(), this, disposable);

      const count = Broadcasters[Array_length];
      let completed = 0;
      for (const Broadcaster of Broadcasters) {
        pipe(
          Broadcaster,
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
      [MergeBroadcaster_Broadcasters]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](
        this: TProperties,
        listener: EventListenerLike<T>,
      ): void {
        const Broadcasters = this[MergeBroadcaster_Broadcasters];
        const count = Broadcasters[Array_length];
        let completed = 0;

        const eventHandler = bindMethod(listener, EventListenerLike_notify);

        const onEventHandlerCompleted = () => {
          completed++;
          if (completed >= count) {
            listener[DisposableLike_dispose]();
          }
        };

        for (const Broadcaster of Broadcasters) {
          pipe(
            Broadcaster,
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
