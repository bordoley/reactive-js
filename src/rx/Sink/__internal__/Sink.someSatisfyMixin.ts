import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import {
  ReactiveContainerLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx.js";

import Sink_satisfyMixin from "./Sink.satisfyMixin.js";

const Sink_someSatisfyMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
) => Mixin2<
  SinkLike<T>,
  TSink,
  Predicate<T>,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
) => {
  const typedSatisfySinkMixin = Sink_satisfyMixin<C, TSink, T>(
    fromReadonlyArray,
    false,
  );

  return mix(
    include(typedSatisfySinkMixin),
    function EverySatisfySink(
      instance: unknown,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(typedSatisfySinkMixin, instance, delegate, predicate);
      return instance;
    },
    props<unknown>({}),
    getPrototype(typedSatisfySinkMixin),
  );
};

export default Sink_someSatisfyMixin;
