import {
  ConcatAll,
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Defer,
  Map,
} from "./container";
import { Disposable } from "./disposable";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  compose,
  newInstance,
  pipe,
  pipeLazy,
} from "./functions";

export interface LiftableLike extends ContainerLike {
  readonly TLiftableState: Disposable & ContainerLike;
}

export type LiftableStateOf<C extends LiftableLike, T> = C extends {
  readonly TLiftableState: unknown;
}
  ? (C & {
      readonly T: T;
    })["TLiftableState"]
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export interface CatchError<C extends LiftableLike> extends Container<C> {
  catchError<T>(
    onError: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T>;
}

export interface DecodeWithCharset<C extends LiftableLike>
  extends Container<C> {
  decodeWithCharset(
    charset?: string,
  ): ContainerOperator<C, ArrayBuffer, string>;
}

export interface FromIterable<
  C extends LiftableLike,
  O extends Record<string, never> = Record<string, never>,
> extends Container<C> {
  fromIterable<T>(
    options?: Partial<O>,
  ): Function1<Iterable<T>, ContainerOf<C, T>>;
}

export interface FromIterator<
  C extends LiftableLike,
  O extends Record<string, unknown> = Record<string, never>,
> extends Container<C> {
  fromIterator<T, TReturn = any, TNext = unknown>(
    options?: Partial<O>,
  ): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
}

export interface ThrowIfEmpty<C extends LiftableLike> extends Container<C> {
  throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
}

export interface Using<C extends LiftableLike> extends Container<C> {
  using<TResource extends Disposable, T>(
    resourceFactory: Factory<TResource>,
    containerFactory: Function1<TResource, ContainerOf<C, T>>,
  ): ContainerOf<C, T>;

  using<TResource1 extends Disposable, TResource2 extends Disposable, T>(
    resourceFactory: Factory<[TResource1, TResource2]>,
    containerFactory: Function2<TResource1, TResource2, ContainerOf<C, T>>,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends Disposable,
    TResource2 extends Disposable,
    TResource3 extends Disposable,
    T,
  >(
    resourceFactory: Factory<[TResource1, TResource2, TResource3]>,
    containerFactory: Function3<
      TResource1,
      TResource2,
      TResource3,
      ContainerOf<C, T>
    >,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends Disposable,
    TResource2 extends Disposable,
    TResource3 extends Disposable,
    TResource4 extends Disposable,
    T,
  >(
    resourceFactory: Factory<[TResource1, TResource2, TResource3, TResource4]>,
    containerFactory: Function4<
      TResource1,
      TResource2,
      TResource3,
      TResource4,
      ContainerOf<C, T>
    >,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends Disposable,
    TResource2 extends Disposable,
    TResource3 extends Disposable,
    TResource4 extends Disposable,
    TResource5 extends Disposable,
    T,
  >(
    resourceFactory: Factory<
      [TResource1, TResource2, TResource3, TResource4, TResource5]
    >,
    containerFactory: Function5<
      TResource1,
      TResource2,
      TResource3,
      TResource4,
      TResource5,
      ContainerOf<C, T>
    >,
  ): ContainerOf<C, T>;

  using<TResource extends Disposable, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    runnableFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T>;
}

export const encodeUtf8 =
  <C extends LiftableLike>(
    m: Defer<C> & Map<C>,
  ): ContainerOperator<C, string, Uint8Array> =>
  obs =>
    m.defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(
        obs,
        m.map(s => textEncoder.encode(s)),
      );
    });

export const genMap = <
  C extends LiftableLike,
  TA,
  TB,
  OConcatAll extends Record<string, never> = Record<string, never>,
  OFromIterator extends Record<string, never> = Record<string, never>,
  TReturn = any,
  TNext = unknown,
>(
  m: Map<C> & ConcatAll<C, OConcatAll> & FromIterator<C, OFromIterator>,
  mapper: Function1<TA, Generator<TB, TReturn, TNext>>,
  options?: Partial<OConcatAll & OFromIterator>,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator<TB>(options))),
    m.concatAll(options),
  );
