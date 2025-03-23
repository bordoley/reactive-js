import * as CurrentTime from "../../__internal__/CurrentTime.js";
import {
  Mixin,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import SchedulerMixin, {
  SchedulerMixinHostLike,
} from "../../utils/__mixins__/SchedulerMixin.js";
import {
  DisposableLike,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../../utils.js";

const CurrentTimeSchedulerMixin: Mixin<
  Omit<SchedulerLike & DisposableLike, typeof SchedulerLike_maxYieldInterval>,
  Omit<SchedulerMixinHostLike, typeof SchedulerLike_now>,
  Omit<SchedulerLike, typeof SchedulerLike_maxYieldInterval>
> = /*@__PURE__*/ (() =>
  mix(
    include(SchedulerMixin),
    function CurrentTimeSchedulerMixin(
      this,
    ): Omit<
      SchedulerLike & DisposableLike,
      typeof SchedulerLike_maxYieldInterval
    > {
      init(SchedulerMixin, this);
      this;
      return this;
    },
    props(),
    proto({
      get [SchedulerLike_now]() {
        return CurrentTime.now();
      },
    }),
  ))();

export default CurrentTimeSchedulerMixin;
