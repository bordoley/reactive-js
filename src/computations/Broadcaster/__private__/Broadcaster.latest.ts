import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SourceLike,
} from "../../../computations.js";
import DelegatingEventListenerMixin from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import LatestEventListenerMixin, {
  LatestEventListenerContextLike,
  LatestEventListenerLike,
  LatestEventListenerMode,
} from "../../__mixins__/LatestEventListenerMixin.js";
import LatestSourceMixin from "../../__mixins__/LatestSourceMixin.js";

const createLatestEventListener: (
  delegate: EventListenerLike,
  context: LatestEventListenerContextLike,
) => EventListenerLike & LatestEventListenerLike =
  /*@__PURE__*/
  (() =>
    mixInstanceFactory(
      include(DelegatingEventListenerMixin(), LatestEventListenerMixin()),
      function LatestEventListener(
        this: unknown,
        delegate: EventListenerLike<ReadonlyArray<unknown>>,
        context: LatestEventListenerContextLike,
      ): EventListenerLike & LatestEventListenerLike {
        init(DelegatingEventListenerMixin(), this, delegate);
        init(LatestEventListenerMixin(), this, delegate, context);

        return this;
      },
    ))();

const latest = /*@__PURE__*/ (() => {
  type TPrototype = {
    [ComputationLike_isDeferred]: false;
    [ComputationLike_isSynchronous]: false;
    [ComputationLike_isPure]: true;
  };

  return mixInstanceFactory(
    include(LatestSourceMixin()),
    function BroadcasterLatestSource(
      this: TPrototype,
      broadcasters: readonly BroadcasterLike[],
      mode: LatestEventListenerMode,
    ): SourceLike<ReadonlyArray<unknown>> {
      init(
        LatestSourceMixin(),
        this,
        broadcasters,
        mode,
        createLatestEventListener,
      );

      return this;
    },
    props(),
    proto<TPrototype>({
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,
      [ComputationLike_isPure]: true as const,
    }),
  );
})();

export const Broadcaster_combineLatest: Broadcaster.Signature["combineLatest"] =
  ((...broadcasters: readonly BroadcasterLike<any>[]) =>
    latest(
      broadcasters,
      "combine-latest",
    )) as Broadcaster.Signature["combineLatest"];

export const Broadcaster_zipLatest: Broadcaster.Signature["zipLatest"] = ((
  ...broadcasters: readonly BroadcasterLike<any>[]
) => latest(broadcasters, "zip-latest")) as Broadcaster.Signature["zipLatest"];
