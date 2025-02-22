import { mixInstanceFactory, props } from "../__internal__/mixins.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import {
  Computation,
  ComputationWithSideEffectsModule,
  Computation_T,
  Computation_type,
  DeferredComputationModule,
  PureStatelessComputationModule,
  SynchronousComputationModule,
} from "../computations.js";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  Updater,
  identity,
  newInstance,
  none,
  returns,
} from "../functions.js";

/**
 * @noInheritDoc
 */
export interface IterableComputation extends Computation {
  readonly [Computation_type]?: Iterable<this[typeof Computation_T]>;
}

export interface IterableModule
  extends PureStatelessComputationModule<IterableComputation>,
    DeferredComputationModule<IterableComputation>,
    ComputationWithSideEffectsModule<IterableComputation>,
    SynchronousComputationModule<IterableComputation> {}

export type Signature = IterableModule;

export const forEach: Signature["forEach"] = /*@PURE*/ (<T>() => {
  const ForEachIterable_effect = Symbol("ForEachIterable_effect");
  const ForEachIterable_delegate = Symbol("ForEachIterable_delegate");

  type TProperties = {
    [ForEachIterable_delegate]: Iterable<T>;
    [ForEachIterable_effect]: SideEffect1<T>;
  };

  const createForEachIterable = mixInstanceFactory(
    function KeepIterable(
      instance: Iterable<T> & TProperties,
      delegate: Iterable<T>,
      effect: SideEffect1<T>,
    ): Iterable<T> {
      instance[ForEachIterable_delegate] = delegate;
      instance[ForEachIterable_effect] = effect;
      return instance;
    },
    props<TProperties>({
      [ForEachIterable_delegate]: none,
      [ForEachIterable_effect]: none,
    }),
    {
      *[Symbol.iterator](this: TProperties) {
        const delegate = this[ForEachIterable_delegate];
        const effect = this[ForEachIterable_effect];

        for (const v of delegate) {
          effect(v);
          yield v;
        }
      },
    },
  );

  return (effect: SideEffect1<T>) => (iterable: Iterable<T>) =>
    createForEachIterable(iterable, effect);
})();

export const fromIterable: Signature["fromIterable"] = /*@PURE*/ returns(
  identity,
) as Signature["fromIterable"];

class FromReadonlyArrayIterable<T> {
  constructor(
    private readonly arr: readonly T[],
    private readonly count: number,
    private readonly start: number,
  ) {}

  *[Symbol.iterator]() {
    let { arr, start, count } = this;
    while (count !== 0) {
      const next = arr[start];
      yield next;

      count > 0 ? (start++, count--) : (start--, count++);
    }
  }
}
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  <T>(options?: { readonly count?: number; readonly start?: number }) =>
  (arr: readonly T[]) => {
    let [start, count] = parseArrayBounds(arr, options);

    return start === 0 && count >= arr.length
      ? arr
      : newInstance(FromReadonlyArrayIterable, arr, count, start);
  };

class GeneratorIterable<T> {
  constructor(
    readonly generator: Updater<T>,
    readonly initialValue: Factory<T>,
    readonly count?: number,
  ) {}

  *[Symbol.iterator]() {
    const { count, generator } = this;
    let acc = this.initialValue();

    for (let cnt = 0; count === none || cnt < count; cnt++) {
      acc = generator(acc);
      yield acc;
    }
  }
}

export const generate: Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    readonly count?: number;
  },
) => newInstance(GeneratorIterable, generator, initialValue, options?.count);

export const keep: Signature["keep"] = /*@PURE*/ (<T>() => {
  const KeepIterable_predicate = Symbol("KeepIterable_predicate");
  const KeepIterable_delegate = Symbol("KeepIterable_delegate");

  type TProperties = {
    [KeepIterable_delegate]: Iterable<T>;
    [KeepIterable_predicate]: Predicate<T>;
  };

  const createKeepIterable = mixInstanceFactory(
    function KeepIterable(
      instance: Iterable<T> & TProperties,
      delegate: Iterable<T>,
      predicate: Predicate<T>,
    ): Iterable<T> {
      instance[KeepIterable_delegate] = delegate;
      instance[KeepIterable_predicate] = predicate;
      return instance;
    },
    props<TProperties>({
      [KeepIterable_delegate]: none,
      [KeepIterable_predicate]: none,
    }),
    {
      *[Symbol.iterator](this: TProperties) {
        const delegate = this[KeepIterable_delegate];
        const predicate = this[KeepIterable_predicate];

        for (const v of delegate) {
          if (predicate(v)) {
            yield v;
          }
        }
      },
    },
  );

  return (predicate: Predicate<T>) => (iterable: Iterable<T>) =>
    createKeepIterable(iterable, predicate);
})();

export const map: Signature["map"] = /*@PURE*/ (<TA, TB>() => {
  const MapIterable_mapper = Symbol("MapIterable_mapper");
  const MapIterable_delegate = Symbol("MapIterable_delegate");

  type TProperties = {
    [MapIterable_delegate]: Iterable<TA>;
    [MapIterable_mapper]: Function1<TA, TB>;
  };

  const createMapIterable = mixInstanceFactory(
    function MapIterable(
      instance: Iterable<TB> & TProperties,
      delegate: Iterable<TA>,
      mapper: Function1<TA, TB>,
    ): Iterable<TB> {
      instance[MapIterable_delegate] = delegate;
      instance[MapIterable_mapper] = mapper;
      return instance;
    },
    props<TProperties>({
      [MapIterable_delegate]: none,
      [MapIterable_mapper]: none,
    }),
    {
      *[Symbol.iterator](this: TProperties) {
        const delegate = this[MapIterable_delegate];
        const mapper = this[MapIterable_mapper];

        for (const v of delegate) {
          yield mapper(v);
        }
      },
    },
  );

  return (mapper: Function1<TA, TB>) => (iterable: Iterable<TA>) =>
    createMapIterable(iterable, mapper);
})();

export const reduce: Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (iterable: Iterable<T>) => {
    let acc = initialValue();
    for (let v of iterable) {
      acc = reducer(acc, v);
    }

    return acc;
  };

export const toReadonlyArray: Signature["toReadonlyArray"] =
  <T>() =>
  (iterable: Iterable<T>) =>
    Array.from(iterable);
