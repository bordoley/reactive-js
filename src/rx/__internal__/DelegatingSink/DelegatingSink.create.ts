import { createInstanceFactory } from "../../../__internal__/mixins";
import { SinkLike } from "../../../rx";
import DelegateSink_mixin from "./DelegatingSink.mixin";

const DelegateSink_create: <T>(delegate: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typeDelegatingSinkMixin = DelegateSink_mixin<T>();

    return createInstanceFactory(typeDelegatingSinkMixin);
  })();

export default DelegateSink_create;
