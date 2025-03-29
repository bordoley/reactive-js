import { createInstanceFactory } from "../__internal__/mixins.js";
import { PublisherLike } from "../computations.js";
import AsyncPublisherMixin from "./__mixins__/AsyncPublisherMixin.js";
import PublisherMixin from "./__mixins__/PublisherMixin.js";

export const create: <T>(options?: {
  readonly autoDispose?: boolean;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(PublisherMixin<T>());
})();

export const createAsync: <T>(options?: {
  readonly autoDispose?: boolean;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(AsyncPublisherMixin<T>());
})();
