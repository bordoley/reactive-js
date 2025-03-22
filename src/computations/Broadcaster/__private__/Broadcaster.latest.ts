import { Array_push } from "../../../__internal__/constants.js";

import {
  BroadcasterLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Latest from "../../__internal__/operators/Latest.js";
import {
  LatestCtx,
  LatestCtx_completedCount,
  LatestCtx_mode,
  LatestCtx_values,
  LatestMode,
} from "../../__internal__/operators/Latest.js";
import Broadcaster_create from "./Broadcaster.create.js";

const Broadcaster_latest = /*@__PURE__*/ (() => {
  return (
    Broadcasters: readonly BroadcasterLike<any>[],
    mode: LatestMode,
  ): BroadcasterLike<readonly unknown[]> => {
    const onSubscribe = (delegate: ListenerLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        [LatestCtx_completedCount]: 0,
        [LatestCtx_values]: [],
        [LatestCtx_mode]: mode,
      };

      for (const observable of Broadcasters) {
        const innerListener = pipe(
          Latest.createListener(delegate, ctx),
          Disposable.addTo(delegate),
        );

        ctx[LatestCtx_values][Array_push](innerListener);
        observable[SourceLike_subscribe](innerListener);
      }
    };

    return Broadcaster_create(onSubscribe);
  };
})();

export const Broadcaster_combineLatest: Broadcaster.Signature["combineLatest"] =
  ((...observables: readonly BroadcasterLike<any>[]) =>
    Broadcaster_latest(
      observables,
      1,
    )) as Broadcaster.Signature["combineLatest"];

export const Broadcaster_zipLatest: Broadcaster.Signature["zipLatest"] = ((
  ...observables: readonly BroadcasterLike<any>[]
) => Broadcaster_latest(observables, 2)) as Broadcaster.Signature["zipLatest"];
