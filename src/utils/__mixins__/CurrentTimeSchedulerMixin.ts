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
  SchedulerLike_now,
} from "../../utils.js";

const CurrentTimeSchedulerMixin: Mixin<
  SchedulerLike & DisposableLike,
  Omit<SchedulerMixinHostLike, typeof SchedulerLike_now>
> = /*@__PURE__*/ (() =>
  mix<
    SchedulerLike & DisposableLike,
    typeof SchedulerMixin,
    object,
    Pick<SchedulerLike, typeof SchedulerLike_now>,
    SchedulerMixinHostLike & SchedulerLike & DisposableLike
  >(
    include(SchedulerMixin),
    function CurrentTimeSchedulerMixin(
      this: SchedulerMixinHostLike,
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, this);
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
