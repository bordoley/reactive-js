import { createRepeatOperator } from "../__internal__/containers/__internal__ContainerLike";
import { create as createEnumerable } from "../__internal__/ix/__internal__EnumerableLike";
import { disposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/__internal__Enumerators";
import {
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/util/__internal__Objects";
import {
  Concat,
  ConcatAll,
  ContainerOperator,
  DistinctUntilChanged,
  Generate,
  Keep,
  Map,
  Pairwise,
  Repeat,
  Scan,
  SequenceLike,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToReadonlyArray,
  Zip,
} from "../containers";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  Updater,
  callWith,
  getLength,
  isSome,
  none,
  pipe,
  returns,
  strictEquality,
} from "../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
  ToEnumerable,
} from "../ix";
import { dispose, isDisposed } from "../util/DisposableLike";
import { keepType } from "./ContainerLike";
import {
  keepT as keepTArray,
  map as mapArray,
  toSequence as toSequenceReadonlyArray,
} from "./ReadonlyArrayLike";

type SequenceResult<T> = {
  readonly data: T;
  readonly next: SequenceLike<T>;
};

const createNext = <T>(data: T, next: SequenceLike<T>): SequenceResult<T> => ({
  data,
  next,
});

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  <T>() =>
  (seq: SequenceLike<SequenceLike<T>>) => {
    const continueWith = (
      result: Option<SequenceResult<T>>,
      continuation: SequenceLike<SequenceLike<T>>,
    ): Option<SequenceResult<T>> => {
      if (isSome(result)) {
        return createNext(result.data, () =>
          continueWith(result.next(), continuation),
        );
      } else {
        return flattenIter(continuation());
      }
    };

    const flattenIter = (
      result: Option<SequenceResult<SequenceLike<T>>>,
    ): Option<SequenceResult<T>> => {
      if (isSome(result)) {
        return continueWith(result.data(), result.next);
      } else {
        return none;
      }
    };

    return () => flattenIter(seq());
  };

export const concatAllT: ConcatAll<SequenceLike> = {
  concatAll,
};

export function concat<T>(
  fst: SequenceLike<T>,
  snd: SequenceLike<T>,
  ...tail: readonly SequenceLike<T>[]
): SequenceLike<T>;

export function concat<T>(
  ...sequences: readonly SequenceLike<T>[]
): SequenceLike<T> {
  return pipe(sequences, toSequenceReadonlyArray(), concatAll());
}

export const concatT: Concat<SequenceLike> = {
  concat,
};

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const _distinctUntilChanged =
      <T>(
        equality: Equality<T>,
        prevValue: T,
        next: SequenceLike<T>,
      ): SequenceLike<T> =>
      () => {
        let retval = next();
        while (true) {
          if (isSome(retval)) {
            if (!equality(prevValue, retval.data)) {
              return createNext(
                retval.data,
                _distinctUntilChanged(equality, retval.data, retval.next),
              );
            } else {
              retval = retval.next();
            }
          } else {
            return retval;
          }
        }
      };

    return <T>(options: { readonly equality?: Equality<T> } = {}) =>
      (seq: SequenceLike<T>) =>
      () => {
        const { equality = strictEquality } = options;
        const result = seq();
        return isSome(result)
          ? createNext(
              result.data,
              _distinctUntilChanged(equality, result.data, result.next),
            )
          : none;
      };
  })();

export const distinctUntilChangedT: DistinctUntilChanged<SequenceLike> = {
  distinctUntilChanged,
};

export const generate: Generate<SequenceLike>["generate"] =
  /*@__PURE__*/ (() => {
    const _generate =
      <T>(generator: Updater<T>, data: T): SequenceLike<T> =>
      () => ({ data, next: _generate(generator, generator(data)) });

    return <T>(generator: Updater<T>, initialValue: Factory<T>) =>
      () => {
        const acc = generator(initialValue());
        return _generate(generator, acc)();
      };
  })();

export const generateT: Generate<SequenceLike> = {
  generate,
};

export const keep: Keep<SequenceLike>["keep"] = /*@__PURE__*/ (() => {
  const _keep =
    <T>(predicate: Predicate<T>, seq: SequenceLike<T>): SequenceLike<T> =>
    () => {
      let result = seq();
      while (true) {
        if (isSome(result)) {
          if (predicate(result.data)) {
            return createNext(result.data, _keep(predicate, result.next));
          } else {
            result = result.next();
          }
        } else {
          return result;
        }
      }
    };

  return <T>(predicate: Predicate<T>) =>
    (seq: SequenceLike<T>) =>
      _keep(predicate, seq);
})();

export const keepT: Keep<SequenceLike> = { keep };

export const map: Map<SequenceLike>["map"] = /*@__PURE__*/ (() => {
  const _map =
    <TA, TB>(
      mapper: Function1<TA, TB>,
      seq: SequenceLike<TA>,
    ): SequenceLike<TB> =>
    () => {
      const result = seq();

      return isSome(result)
        ? createNext(mapper(result.data), _map(mapper, result.next))
        : none;
    };

  return <TA, TB>(mapper: Function1<TA, TB>) =>
    (seq: SequenceLike<TA>) =>
      _map(mapper, seq);
})();

export const mapT: Map<SequenceLike> = { map };

export const pairwise: Pairwise<SequenceLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const _pairwise =
      <T>(prev: T, seq: SequenceLike<T>): SequenceLike<readonly [T, T]> =>
      () => {
        const result = seq();
        if (isSome(result)) {
          const { data, next } = result;
          const v: [T, T] = [prev, data];
          return createNext(v, _pairwise(data, next));
        } else {
          return none;
        }
      };

    return <T>() =>
      (seq: SequenceLike<T>) => {
        const first = seq();
        if (isSome(first)) {
          return _pairwise(first.data, first.next);
        } else {
          return () => none;
        }
      };
  })();

export const pairwiseT: Pairwise<SequenceLike> = { pairwise };

export const seek =
  <T>(count: number): ContainerOperator<SequenceLike, T, T> =>
  (seq: SequenceLike<T>) => {
    if (count <= 0) {
      return seq;
    } else {
      let retval = seq;

      for (let i = 0; i < count; i++) {
        const result = retval();

        if (isSome(result)) {
          retval = result.next;
        }
      }
      return retval;
    }
  };

export const takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const _takeFirst =
      <T>(count: number, seq: SequenceLike<T>): SequenceLike<T> =>
      () => {
        if (count > 0) {
          const result = seq();
          return isSome(result)
            ? createNext(result.data, _takeFirst(count - 1, result.next))
            : none;
        } else {
          return none;
        }
      };

    return <T>(options: { readonly count?: number } = {}) =>
      (seq: SequenceLike<T>) => {
        const { count = 1 } = options;
        return _takeFirst(count, seq);
      };
  })();

export const takeFirstT: TakeFirst<SequenceLike> = {
  takeFirst,
};

export const repeat: Repeat<SequenceLike>["repeat"] = /*@__PURE__*/ (<T>() => {
  const _repeat =
    (
      src: SequenceLike<T>,
      predicate: Predicate<number>,
      count: number,
      seq: SequenceLike<T>,
    ): SequenceLike<T> =>
    () => {
      const result = seq();
      if (isSome(result)) {
        return createNext(
          result.data,
          _repeat(src, predicate, count, result.next),
        );
      } else if (predicate(count)) {
        return _repeat(src, predicate, count + 1, src)();
      } else {
        return none;
      }
    };
  return createRepeatOperator<SequenceLike, T>((seq, predicate) =>
    _repeat(seq, predicate, 1, seq),
  );
})();

export const repeatT: Repeat<SequenceLike> = { repeat };

export const scan: Scan<SequenceLike>["scan"] = /*@__PURE__*/ (() => {
  const _scan =
    <T, TAcc>(
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
      seq: SequenceLike<T>,
    ): SequenceLike<TAcc> =>
    () => {
      const result = seq();
      if (isSome(result)) {
        const nextAcc = reducer(acc, result.data);
        return createNext(nextAcc, _scan(reducer, nextAcc, result.next));
      } else {
        return none;
      }
    };

  return <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    (seq: SequenceLike<T>) =>
    () =>
      _scan(reducer, initialValue(), seq)();
})();

export const scanT: Scan<SequenceLike> = { scan };

export const skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return seek<T>(count)(seq)();
  };

export const skipFirstT: SkipFirst<SequenceLike> = { skipFirst };

export const takeLast: TakeLast<SequenceLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const _takeLast =
      <T>(maxCount: number, seq: SequenceLike<T>): SequenceLike<T> =>
      () => {
        const last: T[] = [];
        let result = seq();
        while (true) {
          if (isSome(result)) {
            last.push(result.data);
            if (getLength(last) > maxCount) {
              last.shift();
            }
            result = result.next();
          } else {
            break;
          }
        }
        return pipe(last, toSequenceReadonlyArray(), callWith());
      };

    return <T>(options: { readonly count?: number } = {}) =>
      (seq: SequenceLike<T>) => {
        const { count = 1 } = options;
        return _takeLast(count, seq);
      };
  })();

export const takeLastT: TakeLast<SequenceLike> = { takeLast };

export const takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  /*@__PURE__*/ (() => {
    const _takeWhile =
      <T>(
        predicate: Predicate<T>,
        inclusive: boolean,
        seq: SequenceLike<T>,
      ): SequenceLike<T> =>
      () => {
        const result = seq();

        return isSome(result) && predicate(result.data)
          ? createNext(
              result.data,
              _takeWhile(predicate, inclusive, result.next),
            )
          : isSome(result) && inclusive
          ? createNext<T>(result.data, returns(none))
          : none;
      };

    return <T>(
        predicate: Predicate<T>,
        options: { readonly inclusive?: boolean } = {},
      ) =>
      (seq: SequenceLike<T>) => {
        const { inclusive = false } = options;
        return _takeWhile(predicate, inclusive, seq);
      };
  })();

export const takeWhileT: TakeWhile<SequenceLike> = { takeWhile };

export const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumeratorMixin = enumeratorMixin<T>();
    type TProperties = {
      seq: SequenceLike<T>;
    };

    const createSequenceEnumerator = createInstanceFactory(
      mixin(
        include(disposableMixin, typedEnumeratorMixin),
        function SequenceEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            TProperties,
          seq: SequenceLike<T>,
        ): EnumeratorLike<T> {
          init(disposableMixin, instance);
          init(typedEnumeratorMixin, instance);

          instance.seq = seq;

          return instance;
        },
        props<TProperties>({
          seq: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!isDisposed(this)) {
              const next = this.seq();
              if (isSome(next)) {
                this[EnumeratorLike_current] = next.data;
                this.seq = next.next;
              } else {
                pipe(this, dispose());
              }
            }
          },
        },
      ),
    );

    return () => (seq: SequenceLike<T>) =>
      createEnumerable(() => createSequenceEnumerator(seq));
  })();

export const toEnumerableT: ToEnumerable<SequenceLike> = { toEnumerable };

export const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =

    <T>() =>
    (seq: SequenceLike<T>) => {
      const result: T[] = [];

      let next = seq();
      while (isSome(next)) {
        result.push(next.data);
        next = next.next();
      }

      return result;
    };

export const toReadonlyArrayT: ToReadonlyArray<SequenceLike> = {
  toReadonlyArray,
};

/*
export const toRunnable =
  <T>(): Function1<SequenceLike<T>, RunnableLike<T>> =>
  (seq: SequenceLike<T>) =>
    createRunnable(sink => {
      let result = seq();
      while (isSome(result)) {
        sink.notify(result.data);
        result = result.next();
      }
    });

export const toRunnableT: ToRunnable<SequenceLike> = {
  toRunnable,
};*/

export const zip: Zip<SequenceLike>["zip"] = /*@__PURE__*/ (() => {
  const zip =
    (...sequences: readonly SequenceLike[]): SequenceLike<readonly any[]> =>
    () => {
      const nextResults = pipe(
        sequences,
        mapArray(callWith()),
        keepType(keepTArray, isSome),
      );

      return getLength(nextResults) === getLength(sequences)
        ? createNext(
            pipe(
              nextResults,
              mapArray(x => x.data),
            ),
            zip(
              ...pipe(
                nextResults,
                mapArray(x => x.next),
              ),
            ),
          )
        : none;
    };

  return zip as Zip<SequenceLike>["zip"];
})();

export const zipT: Zip<SequenceLike> = { zip };
