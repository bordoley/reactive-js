import {
  Iterator_done,
  Iterator_next,
  Iterator_value,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import { AsyncIterableLike, BroadcasterLike } from "../../../computations.js";
import { error, invoke, none, pipe, pipeSome } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../../../utils.js";
import type * as AsyncIterable from "../../AsyncIterable.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "../../Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "../../Broadcaster/__private__/Broadcaster.createPauseable.js";

const AsyncIterable_broadcast: AsyncIterable.Signature["broadcast"] =
  <T>(options?: {
    readonly autoDispose?: boolean;
    readonly scheduler?: SchedulerLike;
  }) =>
  (iterable: AsyncIterableLike<T>) =>
    Broadcaster_createPauseable<T>(
      (modeObs: BroadcasterLike<boolean> & DisposableLike) =>
        pipe(
          Broadcaster_create((listener: EventListenerLike<T>) => {
            const scheduler = options?.scheduler;
            const iterator = iterable[Symbol.asyncIterator]();

            const maxYieldInterval =
              scheduler?.[SchedulerLike_maxYieldInterval] ?? MAX_SAFE_INTEGER;

            let isPaused = true;

            const continuation = async () => {
              const startTime = scheduler?.[SchedulerLike_now] ?? 0;

              try {
                while (
                  !listener[DisposableLike_isDisposed] &&
                  !isPaused &&
                  (scheduler?.[SchedulerLike_now] ?? 0) - startTime <
                    maxYieldInterval
                ) {
                  const next = await iterator[Iterator_next]();

                  if (next[Iterator_done]) {
                    listener[DisposableLike_dispose];
                    break;
                  } else {
                    const v = next[Iterator_value];
                    listener[EventListenerLike_notify](v);
                  }
                }
              } catch (e) {
                listener[DisposableLike_dispose](error(e));
              }

              pipeSome(
                !isPaused ? scheduler : none,
                invoke(SchedulerLike_schedule, continuation),
                Disposable.addTo(listener),
              );
            };

            pipe(
              modeObs,
              Broadcaster_addEventHandler((mode: boolean) => {
                const wasPaused = isPaused;
                isPaused = mode;

                if (!isPaused && wasPaused) {
                  pipeSome(
                    scheduler,
                    invoke(SchedulerLike_schedule, continuation),
                    Disposable.addTo(listener),
                  ) ?? continuation();
                }
              }),
              Disposable.bindTo(listener),
            );
          }, options),
          Disposable.addTo(modeObs),
        ),
    );

export default AsyncIterable_broadcast;
