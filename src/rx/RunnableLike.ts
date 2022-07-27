import { prototype as delegatingDisposablePrototype } from "../__internal__/util/DelegatingDisposable";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import { mapPrototype } from "../__internal__/util/Sink";
import { Map } from "../containers";
import { Function1, newInstance, pipe, pipeUnsafe } from "../functions";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../rx";
import { ObserverLike } from "../scheduling";
import { SinkLike } from "../util";
import { dispose } from "../util/DisposableLike";
import { sourceFrom } from "./ReactiveContainerLike";

const lift = /*@__PURE__*/ (() => {
  class LiftedRunnable<T> implements RunnableLike<T> {
    constructor(
      readonly src: RunnableLike<any>,
      readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    ) {}

    [ReactiveContainerLike_sinkInto](sink: SinkLike<T>) {
      pipe(
        pipeUnsafe(sink, ...this.operators) as SinkLike<T>,
        sourceFrom(this.src),
        dispose(),
      );
    }
  }

  return <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) =>
    (runnable: RunnableLike<TA>) => {
      const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

      const allFunctions =
        runnable instanceof LiftedRunnable
          ? [operator, ...runnable.operators]
          : [operator];

      return newInstance(LiftedRunnable, src, allFunctions);
    };
})();
/*
const liftT: Lift<RunnableLike, TReactive> = {
  lift,
  variance: reactive,
};*/

export const map: Map<RunnableLike>["map"] = /*@__PURE__*/ (() => {
  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposablePrototype, typeof mapPrototype]
  >;

  const createInstance = pipe(
    {
      [Object_properties]: {},
      [Object_init](
        this: TProperties,
        delegate: ObserverLike,
        mapper: Function1<any, any>,
      ) {
        init(delegatingDisposablePrototype, this, delegate);
        init(mapPrototype, this, delegate, mapper);
      },
    },
    mixWith(delegatingDisposablePrototype, mapPrototype),
    createObjectFactory<SinkLike, TProperties, SinkLike, Function1<any, any>>(),
  );

  return <TA, TB>(mapper: Function1<TA, TB>) => {
    const operator = (delegate: SinkLike<TB>): SinkLike<TA> =>
      createInstance(delegate, mapper);
    return lift(operator);
  };
})();
