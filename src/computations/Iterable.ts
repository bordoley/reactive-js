import { clampPositiveInteger } from "../__internal__/math.js";
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
  Optional,
  Predicate,
  Reducer,
  SideEffect,
  SideEffect1,
  Updater,
  alwaysTrue,
  error,
  identity,
  isFunction,
  isNone,
  newInstance,
  none,
  pipe,
  raise,
  returns,
  tuple,
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

export const concat: Signature["concat"] = <T>(
  ...iterables: readonly Iterable<T>[]
) => concatMany(iterables as readonly [Iterable<T>, ...Iterable<T>[]]);

class ConcatAllIterable<T> {
  constructor(private readonly s: Iterable<Iterable<T>>) {}

  *[Symbol.iterator]() {
    for (const iter of this.s) {
      for (const v of iter) {
        yield v;
      }
    }
  }
}
export const concatAll: Signature["concatAll"] = /*@PURE*/ (<T>() =>
  returns((iterable: Iterable<Iterable<T>>) =>
    newInstance(ConcatAllIterable, iterable),
  ))();

export const concatMap: Signature["concatMap"] =
  <TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
  (obs: Iterable<TA>) =>
    pipe(obs, map(selector), concatAll<TB>());

export const concatMany: Signature["concatMany"] = concatAll();

export const concatWith: Signature["concatWith"] =
  <T>(...tail: Iterable<T>[]) =>
  (fst: Iterable<T>) =>
    concatMany([fst, ...tail]);

export const endWith: Signature["endWith"] =
  <T>(...values: readonly T[]) =>
  (iterable: Iterable<T>) =>
    pipe(iterable, concatWith<T>(pipe(values, fromReadonlyArray())));

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

export const fromValue: Signature["fromValue"] = /*@PURE*/ returns(tuple);

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

export const last: Signature["last"] =
  <T>() =>
  (iter: Iterable<T>) => {
    let result: Optional<T> = none;
    for (const v of iter) {
      result = v;
    }
    return result;
  };

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

class RepeateIterable<T> {
  constructor(
    private i: Iterable<T>,
    private p: Predicate<number>,
  ) {}

  *[Symbol.iterator]() {
    const iterable = this.i;
    const predicate = this.p;

    let cnt = 0;

    while (true) {
      for (const v of iterable) {
        yield v;
      }
      cnt++;
      if (!predicate(cnt)) {
        break;
      }
    }
  }
}

export const repeat: Signature["repeat"] = <T>(
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isFunction(predicate)
    ? predicate
    : isNone(predicate)
      ? alwaysTrue
      : (count: number) => count < predicate;

  return (src: Iterable<T>) =>
    newInstance(RepeateIterable, src, repeatPredicate);
};

class RetryIterable<T> {
  constructor(
    private i: Iterable<T>,
    private p: (count: number, error: Error) => boolean,
  ) {}

  *[Symbol.iterator]() {
    const iterable = this.i;
    const predicate = this.p;

    let cnt = 0;

    while (true) {
      try {
        for (const v of iterable) {
          yield v;
        }
      } catch (e) {
        cnt++;
        if (!predicate(cnt, error(e))) {
          break;
        }
      }
    }
  }
}

export const retry: Signature["retry"] =
  <T>(shouldRetry?: (count: number, error: Error) => boolean) =>
  (deferable: Iterable<T>) =>
    newInstance(RetryIterable, deferable, shouldRetry ?? alwaysTrue);

export const startWith: Signature["startWith"] =
  <T>(...values: readonly T[]) =>
  (iter: Iterable<T>) =>
    pipe(values, fromReadonlyArray(), concatWith<T>(iter));

class TakeFirstIterable<T> {
  constructor(
    private s: Iterable<T>,
    private c: number,
  ) {}

  *[Symbol.iterator]() {
    const takeCount = this.c;
    let count = 0;

    for (const v of this.s) {
      if (count < takeCount) {
        yield v;
      } else {
        break;
      }
      count++;
    }
  }
}

export const takeFirst: Signature["takeFirst"] =
  <T>(options?: { readonly count?: number }) =>
  (iterable: Iterable<T>) =>
    newInstance(
      TakeFirstIterable,
      iterable,
      clampPositiveInteger(options?.count ?? 1),
    );

class TakeWhileIterable<T> {
  constructor(
    private s: Iterable<T>,
    private p: Predicate<T>,
    private i: boolean,
  ) {}

  *[Symbol.iterator]() {
    const predicate = this.p;
    const inclusive = this.i;

    for (const next of this.s) {
      const satisfiesPredicate = predicate(next);

      if (satisfiesPredicate || inclusive) {
        yield next;
      }

      if (!satisfiesPredicate) {
        break;
      }
    }
  }
}

class ThrowIfEmptyIterable<T> {
  constructor(
    private readonly i: Iterable<T>,
    private readonly f: Factory<unknown>,
  ) {}

  *[Symbol.iterator]() {
    let isEmpty = true;
    for (const v of this.i) {
      isEmpty = false;
      yield v;
    }

    if (isEmpty) {
      raise(error(this.f()));
    }
  }
}

export const throwIfEmpty: Signature["throwIfEmpty"] =
  <T>(factory: Factory<unknown>) =>
  (iter: Iterable<T>) =>
    newInstance(ThrowIfEmptyIterable, iter, factory);

export const takeWhile: Signature["takeWhile"] =
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ) =>
  (iterable: Iterable<T>) =>
    newInstance(
      TakeWhileIterable,
      iterable,
      predicate,
      options?.inclusive ?? false,
    );

class ThrowsIterable<T> {
  constructor(private r: SideEffect) {}

  *[Symbol.iterator](): Iterator<T> {
    raise(error(this.r()));
  }
}
export const throws: Signature["throws"] = <T>(options?: {
  readonly raise?: SideEffect;
}) => {
  const { raise: factory = raise } = options ?? {};
  return newInstance(ThrowsIterable<T>, factory);
};

export const toReadonlyArray: Signature["toReadonlyArray"] =
  <T>() =>
  (iterable: Iterable<T>) =>
    Array.from(iterable);
