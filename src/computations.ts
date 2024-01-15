import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  Tuple2,
  TypePredicate,
  pickUnsafe,
  returns,
} from "./functions.js";

export const Computation_T = Symbol("Computation_T");
export const Computation_type = Symbol("Computation_type");

/**
 * @noInheritDoc
 */
export interface Computation {
  readonly [Computation_T]?: unknown;
  readonly [Computation_type]?: unknown;
}

export type ComputationOf<C extends Computation, T> = C extends {
  readonly [Computation_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [Computation_T]: T;
      })[typeof Computation_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type ComputationOperator<C extends Computation, TA, TB> = Function1<
  ComputationOf<C, TA>,
  ComputationOf<C, TB>
>;

export interface DeferredComputationModule<C extends Computation> {
  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<readonly T[], ComputationOf<C, T>>;
}

export interface PureStatelessComputationModule<C extends Computation> {
  keep<T>(predicate: Predicate<T>): ComputationOperator<C, T, T>;

  map<TA, TB>(selector: Function1<TA, TB>): ComputationOperator<C, TA, TB>;
}

export interface PureStatefulComputationModule<C extends Computation> {
  buffer<T>(options?: {
    count?: number;
  }): ComputationOperator<C, T, readonly T[]>;

  decodeWithCharset(options?: {
    readonly charset?: string;
    readonly fatal?: boolean;
    readonly ignoreBOM?: boolean;
  }): ComputationOperator<C, ArrayBuffer, string>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ComputationOperator<C, T, T>;

  pairwise<T>(): ComputationOperator<C, T, Tuple2<T, T>>;

  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ComputationOperator<C, T, TAcc>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<C, T, T>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<C, T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): ComputationOperator<C, T, T>;
}

interface Signature {
  keepType<C extends Computation, TA, TB>(
    m: Pick<PureStatelessComputationModule<C>, "keep">,
    predicate: TypePredicate<TA, TB>,
  ): ComputationOperator<C, TA, TB>;

  mapTo<C extends Computation, T>(
    m: Pick<PureStatelessComputationModule<C>, "map">,
    value: T,
  ): ComputationOperator<C, unknown, T>;

  pick<C extends Computation, T, TKeyOfT extends keyof T>(
    m: Pick<PureStatelessComputationModule<C>, "map">,
    key: TKeyOfT,
  ): ComputationOperator<C, T, T[TKeyOfT]>;
  pick<
    C extends Computation,
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
  >(
    m: Pick<PureStatelessComputationModule<C>, "map">,
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
  ): ComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB]>;
  pick<
    C extends Computation,
    T,
    TKeyOfTA extends keyof T,
    TKeyOfTB extends keyof T[TKeyOfTA],
    TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB],
  >(
    m: Pick<PureStatelessComputationModule<C>, "map">,
    keyA: TKeyOfTA,
    keyB: TKeyOfTB,
    keyC: TKeyOfTC,
  ): ComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}

export const keepType: Signature["keepType"] = (<C extends Computation, TA, TB>(
  m: Pick<PureStatelessComputationModule<C>, "keep">,
  predicate: TypePredicate<TA, TB>,
) => m.keep(predicate)) as Signature["keepType"];

export const mapTo: Signature["mapTo"] = <C extends Computation, T>(
  m: Pick<PureStatelessComputationModule<C>, "map">,
  v: T,
) => m.map(returns(v));

export const pick: Signature["pick"] = <C extends Computation>(
  m: Pick<PureStatelessComputationModule<C>, "map">,
  ...keys: (string | number | symbol)[]
) => m.map(pickUnsafe(...keys));
