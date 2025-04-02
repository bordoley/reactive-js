import { Mixin, mix, props, proto } from "../../__internal__/mixins.js";
import {
  DisposableLike,
  FlowControllerLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";

export type TReturn = Omit<FlowControllerLike, keyof DisposableLike>;

const FlowControllerWithoutBackpressureMixin: Mixin<TReturn> =
  /*@__PURE__*/ (() => {
    return mix(
      function FlowControllerWithoutBackpressureMixin(this: TReturn): TReturn {
        return this;
      },
      props(),
      proto<TReturn>({
        [FlowControllerLike_isReady]: true as const,
        [FlowControllerLike_addOnReadyListener]() {
          return Disposable.disposed;
        },
      }),
    );
  })();

export default FlowControllerWithoutBackpressureMixin;
