import { Array_push } from "../../../__internal__/constants.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ConsumerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";
import * as Latest from "../../__internal__/operators/Latest.js";
import {
  LatestCtx,
  LatestCtx_completedCount,
  LatestCtx_mode,
  LatestCtx_values,
  LatestMode,
} from "../../__internal__/operators/Latest.js";

const Producer_latest = /*@__PURE__*/ (() => {
  return (
    producers: readonly ProducerLike<any>[],
    mode: LatestMode,
  ): ProducerLike<readonly unknown[]> => {
    const onSubscribe = (delegate: ConsumerLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        [LatestCtx_completedCount]: 0,
        [LatestCtx_values]: [],
        [LatestCtx_mode]: mode,
      };

      for (const observable of producers) {
        const innerSink = pipe(
          Latest.createConsumer(delegate, ctx),
          Disposable.addTo(delegate),
        );

        ctx[LatestCtx_values][Array_push](innerSink);
        observable[SourceLike_subscribe](innerSink);
      }
    };

    return Source.create(onSubscribe, {
      [ComputationLike_isDeferred]: true,
      [ComputationLike_isPure]: Computation.areAllPure(producers),
      [ComputationLike_isSynchronous]: false,
    }) as ProducerLike<readonly unknown[]>;
  };
})();

export const Producer_combineLatest: Producer.Signature["combineLatest"] = ((
  ...observables: readonly ProducerLike<any>[]
) => Producer_latest(observables, 1)) as Producer.Signature["combineLatest"];

export const Producer_zipLatest: Producer.Signature["zipLatest"] = ((
  ...observables: readonly ProducerLike<any>[]
) => Producer_latest(observables, 2)) as Producer.Signature["zipLatest"];
