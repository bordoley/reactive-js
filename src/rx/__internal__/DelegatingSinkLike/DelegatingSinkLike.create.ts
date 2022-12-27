import { createInstanceFactory } from "../../../__internal__/mixins";
import { SinkLike } from "../../../rx";
import DelegateSinkLike__mixin from "./DelegatingSinkLike.mixin";

const create: <T>(delegate: SinkLike<T>) => SinkLike<T> = /*@__PURE__*/ (<
  T,
>() => {
  const typeDelegatingSinkMixin = DelegateSinkLike__mixin<T>();

  return createInstanceFactory(typeDelegatingSinkMixin);
})();

export default create;
