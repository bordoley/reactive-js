import * as CurrentTime from "../../__internal__/CurrentTime.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { ContinuationSchedulerLike } from "../__internal__/ContinuationScheduler.js";
import SchedulerMixin from "./SchedulerMixin.js";

const CurrentTimeSchedulerMixin: Mixin1<
  SchedulerLike & DisposableLike,
  number,
  Omit<ContinuationSchedulerLike, typeof SchedulerLike_now>
> = /*@__PURE__*/ (() =>
  mix<
    SchedulerLike & DisposableLike,
    object,
    Pick<SchedulerLike, typeof SchedulerLike_now>,
    ContinuationSchedulerLike & SchedulerLike & DisposableLike,
    number
  >(
    include(SchedulerMixin),
    function CurrentTimeSchedulerMixin(
      instance: ContinuationSchedulerLike,
      maxYieldInterval: number,
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, instance, maxYieldInterval);
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
