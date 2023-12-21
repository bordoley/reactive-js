import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { Mixin, mix, props } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";

const CurrentTimeSchedulerMixin: Mixin<
  Pick<SchedulerLike, typeof SchedulerLike_now>
> = /*@__PURE__*/ (() =>
  mix(
    function CurrentTimeSchedulerMixin(
      instance: Pick<SchedulerLike, typeof SchedulerLike_now>,
    ): Pick<SchedulerLike, typeof SchedulerLike_now> {
      return instance;
    },
    props({}),
    {
      get [SchedulerLike_now]() {
        return CurrentTime.now();
      },
    },
  ))();

export default CurrentTimeSchedulerMixin;
