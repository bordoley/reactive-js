import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { Mixin, include, init, mix, props } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import SchedulerMixin, { SchedulerMixinBaseLike } from "./SchedulerMixin.js";

const CurrentTimeSchedulerMixin: Mixin<
  SchedulerLike & DisposableLike,
  Omit<SchedulerMixinBaseLike, typeof SchedulerLike_now>
> = /*@__PURE__*/ (() =>
  mix<
    SchedulerLike & DisposableLike,
    object,
    Pick<SchedulerLike, typeof SchedulerLike_now>,
    SchedulerMixinBaseLike & SchedulerLike & DisposableLike
  >(
    include(SchedulerMixin),
    function CurrentTimeSchedulerMixin(
      instance: SchedulerMixinBaseLike,
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, instance);
      return instance;
    },
    props(),
    {
      get [SchedulerLike_now]() {
        return CurrentTime.now();
      },
    },
  ))();

export default CurrentTimeSchedulerMixin;
