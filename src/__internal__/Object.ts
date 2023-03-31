import {
  Function1,
  Function2,
  SideEffect2,
  TypePredicate,
  alwaysTrue,
  isNone,
} from "../functions.js";

const { create, getOwnPropertyDescriptors, prototype } = Object;

export { create, getOwnPropertyDescriptors, prototype };

export type ReadonlyRecord<TKey extends string | number | symbol, T> = Readonly<
  Record<TKey, T>
>;

const hasOwn = (obj: object, key: PropertyKey): boolean =>
  prototype.hasOwnProperty.call(obj, key);

const _empty = /*@__PURE__*/ create(null);
export const empty = <
  TKey extends string | symbol | number,
  T,
>(): ReadonlyRecord<TKey, T> => _empty;

export const forEach =
  <TKey extends string | symbol | number, T>(
    effect: SideEffect2<T, TKey>,
  ): Function1<ReadonlyRecord<TKey, T>, ReadonlyRecord<TKey, T>> =>
  (obj: ReadonlyRecord<TKey, T>): ReadonlyRecord<TKey, T> => {
    for (const key in obj) {
      if (hasOwn(obj, key)) {
        const v: T = obj[key];

        effect(v, key);
      }
    }
    return obj;
  };

export const keep =
  <TKey extends string | symbol | number, T>(
    predicate: Function2<T, TKey, boolean>,
  ): Function1<ReadonlyRecord<TKey, T>, ReadonlyRecord<TKey, T>> =>
  (obj: ReadonlyRecord<TKey, T>): ReadonlyRecord<TKey, T> => {
    const result: Record<TKey, T> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        const v = obj[key];
        if (predicate(v, key)) {
          result[key] = v;
        }
      }
    }
    return result;
  };

export const keepType =
  <TKey extends string | symbol | number, TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): Function1<ReadonlyRecord<TKey, TA>, ReadonlyRecord<TKey, TB>> =>
  (obj: ReadonlyRecord<TKey, TA>): ReadonlyRecord<TKey, TB> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        const v = obj[key];
        if (predicate(v)) {
          result[key] = v;
        }
      }
    }
    return result;
  };

export const keys =
  <TKey extends string | symbol | number, T = unknown>(
    predicate: Function2<T, TKey, boolean> = alwaysTrue,
  ) =>
  (obj: ReadonlyRecord<TKey, T>): ReadonlySet<TKey> => {
    const keys = new Set<TKey>();

    for (const key in obj) {
      const v: T = obj[key];
      if (hasOwn(obj, key) && predicate(v, key)) {
        keys.add(key);
      }
    }
    return keys;
  };

export const map =
  <TKey extends string | symbol | number, TA, TB>(
    mapper: Function2<TA, TKey, TB>,
  ): Function1<ReadonlyRecord<TKey, TA>, ReadonlyRecord<TKey, TB>> =>
  (obj: ReadonlyRecord<TKey, TA>): ReadonlyRecord<TKey, TB> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        result[key] = mapper(obj[key], key);
      }
    }
    return result;
  };

export const union = <TKey extends string | symbol | number, T>(
  m1: ReadonlyRecord<TKey, T>,
  m2: ReadonlyRecord<TKey, T>,
): ReadonlyRecord<TKey, T> => {
  const result: Record<TKey, T> = create(null);

  for (const key in m1) {
    if (hasOwn(m1, key)) {
      result[key] = m1[key];
    }
  }

  for (const key in m2) {
    if (hasOwn(m2, key) && isNone(result[key])) {
      result[key] = m2[key];
    }
  }

  return result;
};
