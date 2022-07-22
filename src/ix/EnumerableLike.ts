import {
  Lift,
  TInteractive,
  createScanOperator,
  createSkipFirstOperator,
  //createTakeFirstOperator,
  interactive,
} from "../__internal__/containers/StatefulContainerLike";
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
import { createObjectFactory } from "../__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  DistinctUntilChanged,
  Keep,
  Map,
  Pairwise,
  Scan,
  SkipFirst,
  //TakeFirst,
} from "../containers/ContainerLike";
import { empty as emptyArray } from "../containers/ReadonlyArrayLike";
import { dispose } from "../util/DisposableLike";
import { Option, isSome, none } from "../util/Option";
import {
  Equality,
  Function1,
  Identity,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  identity,
  newInstance,
  pipe,
  pipeUnsafe,
  strictEquality,
} from "../util/functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  //EnumeratorLike_hasCurrent,
  getCurrent,
  hasCurrent,
  move,
} from "./EnumeratorLike";
import {
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

const enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

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

const lift =
  <TA, TB>(
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

const liftT: Lift<EnumerableLike, TInteractive> = {
  lift,
  variance: interactive,
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
      [InteractiveSourceLike_move](
        this: typeof properties & MutableEnumeratorLike,
      ) {
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
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
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
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
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
          this.current = reducer(acc, getCurrent(delegate));
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
      [InteractiveSourceLike_move](
        this: typeof properties & MutableEnumeratorLike,
      ) {
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
/*
export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ /*(() => {
    const properties = {
      ...delegatingDisposableProperties,
      delegate: none as unknown as EnumeratorLike,
      maxCount: 0 as number,
      count: 0 as number,
    };

    const prototype = {
       ...delegatingDisposableEnumeratorPrototype,
      get [EnumeratorLike_current](): unknown {
        const self = this as unknown as typeof properties;
        return self.delegate[EnumeratorLike_current]
      },
      get [EnumeratorLike_hasCurrent](): boolean {
        const self = this as unknown as typeof properties;
        return self.delegate[EnumeratorLike_hasCurrent]
      },
      [InteractiveSourceLike_move](
        this: typeof properties & MutableEnumeratorLike,
      ) {
        if (this.count < this.maxCount) {
          this.count++;
          pipe(this.delegate, move);
        } else {
          pipe(this, dispose());
        }
      },
    };

    const createInstance = createObjectFactory(prototype, properties);

    const takeFirstEnumerator = <T>(maxCount: number) => (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
      const instance = createInstance();
      delegatingDisposableInit(instance, delegate);
      instance.delegate = delegate;
      instance.maxCount = maxCount;
      return instance as EnumeratorLike<T>;
    }

    return pipe(takeFirstEnumerator, createTakeFirstOperator(liftT));
  })();

  export const takeFirstT: TakeFirst<EnumerableLike> = {
    takeFirst,
  };*/

export const TContainerOf: EnumerableLike = undefined as any;

export const toEnumerable = <T>(): Identity<EnumerableLike<T>> => identity;

export const toEnumerableT: ToEnumerable<EnumerableLike> = {
  toEnumerable,
};
