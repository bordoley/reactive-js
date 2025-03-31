import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";

import { returns } from "../../functions.js";
import { SinkLike } from "../../utils.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "../__mixins__/DelegatingSinkMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";

const DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(
        DisposableMixin,
        DelegatingSinkMixin(),
        DisposeOnCompleteSinkMixin(),
      ),
      function NonDisposingDelegatingSink(
        this: unknown,
        delegate: SinkLike<T>,
      ): DelegatingSinkLike<T, SinkLike<T>> {
        init(DisposableMixin, this);
        init(DelegatingSinkMixin(), this, delegate);
        init(DisposeOnCompleteSinkMixin(), this);

        return this;
      },
    ),
  ))();

export default DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin;
