import { createFromArray } from "../__internal__/containers/ContainerLike";
import {
  Lift,
  TInteractive,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
  interactive,
} from "../__internal__/containers/StatefulContainerLike";
import {
  init as delegatingEnumeratorInit,
  move as delegatingEnumeratorMove,
  properties as delegatingEnumeratorProperties,
  prototype as delegatingEnumeratorPrototype,
} from "../__internal__/ix/DelegatingEnumerator";
import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "../__internal__/ix/Enumerator";
import {
  init as delegatingDisposableInit,
  properties as delegatingDisposableProperties,
  prototype as delegatingDisposablePrototype,
} from "../__internal__/util/DelegatingDisposable";
import {
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import { createObjectFactory } from "../__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  DistinctUntilChanged,
  FromArray,
  Keep,
  Map,
  Pairwise,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToIterable,
  Zip,
  empty,
} from "../containers/ContainerLike";
import {
  ReadonlyArrayLike,
  empty as emptyArray,
  every,
  forEach as forEachReadonlyArray,
  map as mapReadonlyArray,
} from "../containers/ReadonlyArrayLike";
import { ThrowIfEmpty } from "../containers/StatefulContainerLike";
import {
  DisposableLike,
  add,
  addTo,
  bindTo,
  dispose,
  isDisposed,
} from "../util/DisposableLike";
import { Option, isSome, none } from "../util/Option";
import {
  Equality,
  Factory,
  Function1,
  Identity,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  getLength,
  identity,
  newInstance,
  pipe,
  pipeUnsafe,
  strictEquality,
} from "../util/functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  getCurrent,
  hasCurrent,
  move,
} from "./EnumeratorLike";
import {
  CreateInteractiveContainer,
  InteractiveContainerLike,
  InteractiveContainerLike_interact,
} from "./InteractiveContainerLike";
import { InteractiveSourceLike_move } from "./InteractiveSourceLike";

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T = unknown> extends InteractiveContainerLike {
  readonly TContainerOf?: EnumerableLike<this["T"]>;
  readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
  readonly TCtx?: void;

  [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}

export interface FromEnumerable<C extends ContainerLike> extends Container<C> {
  fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}

export interface ToEnumerable<C extends ContainerLike> extends Container<C> {
  toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}

export const enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

const lift = /*@__PURE__*/ (() => {
  class LiftedEnumerable<T> implements EnumerableLike<T> {
    constructor(
      readonly src: EnumerableLike<any>,
      readonly operators: readonly Function1<
        EnumeratorLike<any>,
        EnumeratorLike<any>
      >[],
    ) {}

    [InteractiveContainerLike_interact](): EnumeratorLike<T> {
      return pipeUnsafe(
        this.src,
        enumerate<unknown>(),
        ...this.operators,
      ) as EnumeratorLike<T>;
    }
  }

  return <TA, TB>(
      operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    ): ContainerOperator<EnumerableLike, TA, TB> =>
    (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
      const src =
        enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;

      const allFunctions =
        enumerable instanceof LiftedEnumerable
          ? [...enumerable.operators, operator]
          : [operator];

      return newInstance<
        LiftedEnumerable<TB>,
        EnumerableLike<any>,
        readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
      >(LiftedEnumerable, src, allFunctions);
    };
})();

const liftT: Lift<EnumerableLike, TInteractive> = {
  lift,
  variance: interactive,
};

class CreateEnumerable<T> implements EnumerableLike<T> {
  constructor(readonly _enumerate: Factory<EnumeratorLike<T>>) {}

  [InteractiveContainerLike_interact](): EnumeratorLike<T> {
    try {
      return this._enumerate();
    } catch (cause) {
      return pipe(
        empty<EnumerableLike, T>(fromArrayT),
        enumerate(),
        dispose({ cause }),
      );
    }
  }
}

export const createEnumerable = <T>(
  enumerate: Factory<EnumeratorLike<T>>,
): EnumerableLike<T> => newInstance(CreateEnumerable, enumerate);

export const createT: CreateInteractiveContainer<EnumerableLike> = {
  create: <T>(source: (_: void) => EnumeratorLike<T>) =>
    createEnumerable<T>(() => source(none)),
};

const delegatingDisposableEnumeratorProperties = {
  ...delegatingDisposableProperties,
  ...enumeratorProperties,
  delegate: none as unknown as EnumeratorLike,
};

const delegatingDisposableEnumeratorPrototype = {
  ...delegatingDisposablePrototype,
  ...enumeratorPrototype,
};

const delegatingDisposableEnumeratorInit = <TDelegate>(
  instance: typeof delegatingDisposableEnumeratorProperties &
    typeof delegatingDisposableEnumeratorPrototype,
  delegate: EnumeratorLike<TDelegate>,
) => {
  delegatingDisposableInit(instance, delegate);
  instance.delegate = delegate;
};

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableEnumeratorProperties,
      equality: none as unknown as Equality<unknown>,
    };

    const prototype = {
      ...delegatingDisposableEnumeratorPrototype,
      [InteractiveSourceLike_move](this: typeof properties & EnumeratorLike) {
        const hadCurrent = hasCurrent(this);
        const prevCurrent = hadCurrent ? getCurrent(this) : none;

        try {
          const { delegate } = this;
          while (move(delegate)) {
            if (
              !hadCurrent ||
              !this.equality(prevCurrent as any, getCurrent(delegate))
            ) {
              break;
            }
          }
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    const distinctUntilChangedEnumerator =
      <T>(options?: { readonly equality?: Equality<T> }) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const { equality = strictEquality } = options ?? {};

        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.equality = equality as Equality<unknown>;

        return instance as EnumeratorLike<T>;
      };

    return compose(distinctUntilChangedEnumerator, lift);
  })();

export const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike> = {
  distinctUntilChanged,
};

export const fromArray: FromArray<EnumerableLike>["fromArray"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...enumeratorProperties,
      array: [] as unknown[],
      count: 0,
      index: 0,
    };

    const prototype = {
      ...disposablePrototype,
      ...enumeratorPrototype,
      [InteractiveSourceLike_move](
        this: typeof properties & MutableEnumeratorLike,
      ) {
        const { array } = this;

        if (!isDisposed(this)) {
          this.index++;
          const { index, count } = this;

          if (count !== 0) {
            this[EnumeratorLike_current] = array[index];

            this.count = count > 0 ? this.count-- : this.count++;
          } else {
            pipe(this, dispose());
          }
        }
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    class FromArrayEnumerable<T> implements EnumerableLike<T> {
      constructor(
        private readonly array: readonly T[],
        private readonly start: number,
        private readonly count: number,
      ) {}

      [InteractiveContainerLike_interact](): EnumeratorLike<T> {
        const instance = createInstance();
        disposableInit(instance);
        instance.array = this.array as unknown[];
        instance.index = this.start - 1;
        instance.count = this.count;

        return instance as EnumeratorLike<T>;
      }
    }

    return createFromArray<EnumerableLike>(
      <T>(a: readonly T[], start: number, count: number) =>
        newInstance(FromArrayEnumerable, a, start, count),
    );
  })();

export const fromArrayT: FromArray<EnumerableLike> = { fromArray };

export const fromEnumerable = <T>(): Identity<EnumerableLike<T>> => identity;

export const fromEnumerableT: FromEnumerable<EnumerableLike> = {
  fromEnumerable,
};

export const keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    predicate: none as unknown as Predicate<unknown>,
  };

  const prototype = {
    ...delegatingDisposableEnumeratorPrototype,
    [InteractiveSourceLike_move](this: typeof properties & EnumeratorLike) {
      const { delegate, predicate } = this;

      try {
        while (move(delegate) && !predicate(getCurrent(delegate))) {}
      } catch (cause) {
        pipe(this, dispose({ cause }));
      }
    },
  };

  const createInstance = createObjectFactory(prototype, properties);

  const keepEnumerator =
    <T>(predicate: Predicate<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
      const instance = createInstance();
      delegatingDisposableEnumeratorInit(instance, delegate);
      instance.predicate = predicate as Predicate<unknown>;
      return instance as EnumeratorLike<T>;
    };

  return compose(keepEnumerator, lift);
})();

export const keepT: Keep<EnumerableLike> = {
  keep,
};

export const map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    mapper: none as unknown as Function1<any, unknown>,
  };

  const prototype = {
    ...delegatingDisposableEnumeratorPrototype,
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
      const { delegate } = this;

      if (move(delegate)) {
        try {
          this[EnumeratorLike_current] = this.mapper(getCurrent(delegate));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }
    },
  };

  const createInstance = createObjectFactory(prototype, properties);

  const mapEnumerator =
    <TA, TB>(mapper: Function1<TA, TB>) =>
    (delegate: EnumeratorLike<TA>): EnumeratorLike<TB> => {
      const instance = createInstance();
      delegatingDisposableEnumeratorInit(instance, delegate);
      instance.mapper = mapper;
      return instance as EnumeratorLike<TB>;
    };

  return compose(mapEnumerator, lift);
})();

export const mapT: Map<EnumerableLike> = { map };

export const onNotify = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    onNotify: none as unknown as SideEffect1<any>,
  };

  const prototype = {
    ...delegatingDisposableEnumeratorPrototype,
    [InteractiveSourceLike_move](this: typeof properties & EnumeratorLike) {
      const { delegate } = this;

      if (move(delegate)) {
        try {
          this.onNotify(getCurrent(this));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }
    },
  };

  const createInstance = createObjectFactory(prototype, properties);

  const onNotifyEnumerator =
    <T>(onNotify: SideEffect1<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
      const instance = createInstance();
      delegatingDisposableEnumeratorInit(instance, delegate);
      instance.onNotify = onNotify;
      return instance as EnumeratorLike<T>;
    };

  return compose(onNotifyEnumerator, lift);
})();

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const prototype = {
      ...delegatingDisposableEnumeratorPrototype,
      [InteractiveSourceLike_move](
        this: typeof delegatingDisposableEnumeratorProperties &
          MutableEnumeratorLike,
      ) {
        const prev = (
          hasCurrent(this) ? (getCurrent(this) as readonly []) : emptyArray()
        )[1];

        const { delegate } = this;
        if (move(delegate)) {
          const current = getCurrent(delegate);
          this[EnumeratorLike_current] = [prev, current];
        }
      },
    };

    const createInstance = createObjectFactory(
      prototype,
      delegatingDisposableEnumeratorProperties,
    );

    const pairwiseEnumerator =
      <T>() =>
      (
        delegate: EnumeratorLike<T>,
      ): EnumeratorLike<readonly [Option<T>, T]> => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        return instance as EnumeratorLike<readonly [Option<T>, T]>;
      };

    return <T>() => pipe(pairwiseEnumerator<T>(), lift);
  })();

export const pairwiseT: Pairwise<EnumerableLike> = {
  pairwise,
};

export const scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    reducer: none as unknown as Reducer<any, any>,
    current: none as unknown,
  };

  const prototype = {
    ...delegatingDisposableEnumeratorPrototype,
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
      const acc = hasCurrent(this) ? getCurrent(this) : none;

      const { delegate, reducer } = this;
      if (isSome(acc) && move(delegate)) {
        try {
          this[EnumeratorLike_current] = reducer(acc, getCurrent(delegate));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }
    },
  };

  const createInstance = createObjectFactory(prototype, properties);

  const scanEnumerator =
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: TAcc) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<TAcc> => {
      const instance = createInstance();
      delegatingDisposableEnumeratorInit(instance, delegate);
      instance.reducer = reducer;
      instance.current = initialValue;
      return instance as EnumeratorLike<TAcc>;
    };

  return pipe(scanEnumerator, createScanOperator(liftT));
})();

export const scanT: Scan<EnumerableLike> = {
  scan,
};

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableEnumeratorProperties,
      skipCount: 0 as number,
      count: 0 as number,
    };

    const prototype = {
      ...delegatingDisposableEnumeratorPrototype,
      [InteractiveSourceLike_move](this: typeof properties & EnumeratorLike) {
        const { delegate, skipCount } = this;

        for (let { count } = this; count < skipCount; count++) {
          if (!move(delegate)) {
            break;
          }
        }

        this.count = skipCount;
        move(delegate);
      },
    };

    const createInstance = createObjectFactory(prototype, properties);
    const skipFirstEnumerator =
      <T>(skipCount: number) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.skipCount = skipCount;
        return instance as EnumeratorLike<T>;
      };

    return pipe(skipFirstEnumerator, createSkipFirstOperator(liftT));
  })();

export const skipFirstT: SkipFirst<EnumerableLike> = {
  skipFirst,
};

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableProperties,
      ...delegatingEnumeratorProperties,
      maxCount: 0 as number,
      count: 0 as number,
    };

    const prototype = {
      ...delegatingDisposablePrototype,
      ...delegatingEnumeratorPrototype,
      [InteractiveSourceLike_move](this: typeof properties & DisposableLike) {
        if (this.count < this.maxCount) {
          this.count++;
          delegatingEnumeratorMove(this);
        } else {
          pipe(this, dispose());
        }
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    const takeFirstEnumerator =
      <T>(maxCount: number) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const instance = createInstance();
        delegatingDisposableInit(instance, delegate);
        delegatingEnumeratorInit(instance, delegate);
        instance.maxCount = maxCount;
        return instance as EnumeratorLike<T>;
      };

    return pipe(
      takeFirstEnumerator,
      createTakeFirstOperator({ ...liftT, ...fromArrayT }),
    );
  })();

export const takeFirstT: TakeFirst<EnumerableLike> = {
  takeFirst,
};

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...delegatingEnumeratorProperties,
      maxCount: 0,
      isStarted: false,
    };

    const prototype = {
      ...disposablePrototype,
      ...delegatingEnumeratorPrototype,
      [InteractiveSourceLike_move]<T>(
        this: typeof properties & EnumeratorLike<T>,
      ) {
        if (!isDisposed(this) && !this.isStarted) {
          this.isStarted = true;

          const last: Array<T> = [];

          while (delegatingEnumeratorMove(this)) {
            last.push(getCurrent(this));

            if (getLength(last) > this.maxCount) {
              last.shift();
            }
          }

          const enumerator = pipe(last, fromArray(), enumerate(), bindTo(this));
          delegatingEnumeratorInit(this, enumerator);
        }

        delegatingEnumeratorMove(this);
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    return <T>(
      options: { readonly count?: number } = {},
    ): ContainerOperator<EnumerableLike, T, T> => {
      const { count = 1 } = options;

      const operator = (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const instance = createInstance();
        disposableInit(instance);
        delegatingEnumeratorInit(instance, delegate);
        pipe(instance, add(delegate));
        instance.maxCount = count;
        return instance as unknown as EnumeratorLike<T>;
      };

      return enumerable =>
        count > 0
          ? pipe(enumerable, lift(operator))
          : // FIXME: why do we need the annotations?
            empty<EnumerableLike<unknown>, T>(fromArrayT);
    };
  })();

export const takeLastT: TakeLast<EnumerableLike> = { takeLast };

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableProperties,
      ...delegatingEnumeratorProperties,
      predicate: none as unknown as Predicate<any>,
      inclusive: false,
      done: false,
    };

    const prototype = {
      ...delegatingDisposableEnumeratorPrototype,
      ...delegatingEnumeratorPrototype,
      [InteractiveSourceLike_move](this: typeof properties & EnumeratorLike) {
        const { inclusive, predicate } = this;

        if (this.done && !isDisposed(this)) {
          pipe(this, dispose());
        } else if (delegatingEnumeratorMove(this)) {
          const current = getCurrent(this);

          try {
            const satisfiesPredicate = predicate(current);

            if (!satisfiesPredicate && inclusive) {
              this.done = true;
            } else if (!satisfiesPredicate) {
              pipe(this, dispose());
            }
          } catch (cause) {
            pipe(this, dispose({ cause }));
          }
        }
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    const takeWhileEnumerator =
      <T>(predicate: Predicate<T>, inclusive: boolean) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const instance = createInstance();
        delegatingDisposableInit(instance, delegate);
        delegatingEnumeratorInit(instance, delegate);
        instance.predicate = predicate;
        instance.inclusive = inclusive;
        return instance as EnumeratorLike<T>;
      };

    return pipe(takeWhileEnumerator, createTakeWhileOperator(liftT));
  })();

export const takeWhileT: TakeWhile<EnumerableLike> = {
  takeWhile,
};

export const TContainerOf: EnumerableLike = undefined as any;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...delegatingEnumeratorProperties,
      isEmpty: true,
    };

    const prototype = {
      ...disposablePrototype,
      ...delegatingEnumeratorPrototype,
      [InteractiveSourceLike_move](this: typeof properties) {
        if (delegatingEnumeratorMove(this)) {
          this.isEmpty = false;
        }
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    const throwIfEmptyEnumerator =
      <T>() =>
      (
        delegate: EnumeratorLike<T>,
      ): typeof properties & typeof prototype & EnumeratorLike<T> => {
        const instance = createInstance();
        disposableInit(instance);
        delegatingEnumeratorInit(instance, delegate);

        return instance as typeof properties &
          typeof prototype &
          EnumeratorLike<T>;
      };

    return pipe(throwIfEmptyEnumerator, createThrowIfEmptyOperator(liftT));
  })();

export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike> = {
  throwIfEmpty,
};

export const toEnumerable = <T>(): Identity<EnumerableLike<T>> => identity;

export const toEnumerableT: ToEnumerable<EnumerableLike> = {
  toEnumerable,
};

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  /*@__PURE__*/ (() => {
    class EnumerableIterable<T = unknown> implements Iterable<T> {
      constructor(private readonly enumerable: EnumerableLike<T>) {}

      *[Symbol.iterator]() {
        const enumerator = pipe(this.enumerable, enumerate());
        while (move(enumerator)) {
          yield getCurrent(enumerator);
        }
      }
    }

    // FIXME: InstanceFactory?
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
  })();

export const toIterableT: ToIterable<EnumerableLike<unknown>> = {
  toIterable,
};

const zip: Zip<EnumerableLike>["zip"] = /*@__PURE__*/ (() => {
  const moveAll = (enumerators: readonly EnumeratorLike<any>[]) => {
    for (const enumerator of enumerators) {
      move(enumerator);
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike<any>[]) =>
    pipe(enumerators, every(hasCurrent));

  const properties = {
    ...disposableProperties,
    ...enumeratorProperties,
    enumerators: none as unknown as readonly EnumeratorLike<unknown>[],
  };

  const prototype = {
    ...disposablePrototype,
    ...enumeratorPrototype,
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
      if (!isDisposed(this)) {
        const { enumerators } = this;
        moveAll(enumerators);

        if (allHaveCurrent(enumerators)) {
          this[EnumeratorLike_current] = pipe(
            enumerators,
            mapReadonlyArray(getCurrent),
          );
        } else {
          pipe(this, dispose());
        }
      }
    },
  };

  const createInstance = createObjectFactory(prototype, properties);

  const zipEnumerators = (
    enumerators: ReadonlyArrayLike<EnumeratorLike<any>>,
  ): EnumeratorLike<readonly any[]> => {
    const instance = createInstance();
    disposableInit(instance);
    instance.enumerators = enumerators;

    pipe(enumerators, forEachReadonlyArray(addTo(instance)));
    return instance as EnumeratorLike<readonly any[]>;
  };

  const zip = (
    enumerables: readonly EnumerableLike<any>[],
  ): EnumerableLike<any> =>
    createEnumerable(() =>
      pipe(enumerables, mapReadonlyArray(enumerate()), zipEnumerators),
    );

  return zip as unknown as Zip<EnumerableLike>["zip"];
})();

export const zipT: Zip<EnumerableLike<unknown>> = {
  zip,
};
