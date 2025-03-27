import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";

import { returns } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "../__mixins__/DelegatingSinkMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

const DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(DisposableMixin, DelegatingSinkMixin()),
      function NonDisposingDelegatingSink(
        this: unknown,
        delegate: SinkLike<T>,
      ): DelegatingSinkLike<T, SinkLike<T>> {
        init(DisposableMixin, this);
        init(DelegatingSinkMixin(), this, delegate);

        return this;
      },
      props(),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<SinkLike<T>>(this);
          return this[DisposableLike_isDisposed];
        },

        [SinkLike_complete](this: SinkLike<T>) {
          this[DisposableLike_dispose]();
        },
      }),
    ),
  ))();

export default DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin;
