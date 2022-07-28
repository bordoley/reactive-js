import {
  PropertyTypeOf,
  createObjectFactory,
} from "../__internal__/util/Object";
import {
  createSink,
  keepSinkMixin,
  mapSinkMixin,
  onNotifySinkMixin,
  scanSinkMixin,
} from "../__internal__/util/SinkLikeMixin";
import {
  ContainerOperator,
  Keep,
  Map,
  Scan,
  ToReadonlyArray,
} from "../containers";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  isSome,
  newInstance,
  pipe,
  pipeUnsafe,
  raise,
} from "../functions";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../rx";
import { DisposableLike_error, SinkLike } from "../util";
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

export const keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();

  const createInstance = pipe(
    typedKeepSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedKeepSinkMixin]>,
      SinkLike<T>,
      Predicate<T>
    >(),
  );

  return (mapper: Predicate<T>) => {
    const operator = (delegate: SinkLike<T>): SinkLike<T> =>
      createInstance(delegate, mapper);
    return lift(operator);
  };
})();

export const keepT: Keep<RunnableLike> = { keep };

export const map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();

  const createInstance = pipe(
    typedMapSinkMixin,
    createObjectFactory<
      SinkLike<TA>,
      PropertyTypeOf<[typeof typedMapSinkMixin]>,
      SinkLike<TB>,
      Function1<TA, TB>
    >(),
  );

  return (mapper: Function1<TA, TB>) => {
    const operator = (delegate: SinkLike<TB>): SinkLike<TA> =>
      createInstance(delegate, mapper);
    return lift(operator);
  };
})();

export const mapT: Map<RunnableLike> = { map };

export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => ContainerOperator<RunnableLike, T, T> = /*@__PURE__*/ (<T>() => {
  const typedOnNotifySinkMixin = onNotifySinkMixin<T>();

  const createInstance = pipe(
    typedOnNotifySinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedOnNotifySinkMixin]>,
      SinkLike<T>,
      SideEffect1<T>
    >(),
  );

  return (onNotify: SideEffect1<T>) => {
    const operator = (delegate: SinkLike<T>): SinkLike<T> =>
      createInstance(delegate, onNotify);
    return lift(operator);
  };
})();

export const run =
  <T>() =>
  (runnable: RunnableLike<T>): void =>
    pipe(
      createSink(),
      sourceFrom(runnable),
      dispose(),
      ({ [DisposableLike_error]: error }) => {
        if (isSome(error)) {
          raise(error.cause);
        }
      },
    );

export const scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

  const createInstance = pipe(
    typedScanSinkMixin,
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof typedScanSinkMixin]>,
      SinkLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => {
    const operator = (delegate: SinkLike<TAcc>): SinkLike<T> =>
      createInstance(delegate, reducer, initialValue);
    return lift(operator);
  };
})();

export const scanT: Scan<RunnableLike> = { scan };

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>() =>
    (runnable: RunnableLike<T>) => {
      const result: T[] = [];
      pipe(
        runnable,
        onNotify(x => result.push(x)),
        run(),
      );
      return result;
    };

export const toReadonlyArrayT: ToReadonlyArray<RunnableLike> = {
  toReadonlyArray,
};
