import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, ObserverLike } from "../../../concurrent.js";
import BufferSinkMixin from "../../../events/__mixins__/BufferSinkMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createBufferObserver: <T>(
  delegate: ObserverLike<readonly T[]>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin(), BufferSinkMixin()),
      function BufferObserver(
        instance: unknown,
        delegate: ObserverLike<readonly T[]>,
        count: number,
      ): ObserverLike<T> {
        const onComplete = (buffer: readonly T[]) => {
          delegate[QueueableLike_enqueue](buffer);
          delegate[DispatcherLike_complete]();
        };

        init(ObserverMixin(), instance, delegate, delegate);
        init(BufferSinkMixin<T>(), instance, delegate, count, onComplete);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(BufferSinkMixin<T>()),
    ),
  ))();

export default Observer_createBufferObserver;
