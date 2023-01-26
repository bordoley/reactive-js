import { createInstanceFactory } from "../../../__internal__/mixins";
import { SinkLike } from "../../../rx";
import DelegateSink$mixin from "./DelegatingSink.mixin";

const DelegateSink$create: <T>(delegate: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typeDelegatingSinkMixin = DelegateSink$mixin<T>();

    return createInstanceFactory(typeDelegatingSinkMixin);
  })();

export default DelegateSink$create;
