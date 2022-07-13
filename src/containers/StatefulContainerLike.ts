import { DisposableLike } from "../util/DisposableLike";
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
} from "../util/functions";
import {
  ConcatAll,
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Map,
} from "./ContainerLike";

export interface StatefulContainerLike<T = unknown> extends ContainerLike<T> {
  readonly TStatefulContainerState?: DisposableLike;
  readonly TContainerOf?: this;
}

export type StatefulContainerStateOf<
  C extends StatefulContainerLike,
  T,
> = C extends {
  readonly TStatefulContainerState?: DisposableLike;
}
  ? NonNullable<
      (C & {
        readonly T: T;
      })["TStatefulContainerState"]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type CatchError<C extends StatefulContainerLike> = Container<C> & {
  catchError<T>(
    onError: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T>;
};

export type DecodeWithCharset<C extends StatefulContainerLike> =
  Container<C> & {
    decodeWithCharset(
      charset?: string,
    ): ContainerOperator<C, ArrayBuffer, string>;
  };

export type Defer<C extends StatefulContainerLike> = Container<C> & {
  defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
};

export type FromIterable<
  C extends StatefulContainerLike,
  O extends Record<string, never> = Record<string, never>,
> = Container<C> & {
  fromIterable<T>(
    options?: Partial<O>,
  ): Function1<Iterable<T>, ContainerOf<C, T>>;
};

export type FromIterator<
  C extends StatefulContainerLike,
  O extends Record<string, unknown> = Record<string, never>,
> = Container<C> & {
  fromIterator<T, TReturn = any, TNext = unknown>(
    options?: Partial<O>,
  ): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
};

export type ThrowIfEmpty<C extends StatefulContainerLike> = Container<C> & {
  throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
};

export type Using<C extends StatefulContainerLike> = Container<C> & {
  using<TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource>,
    containerFactory: Function1<TResource, ContainerOf<C, T>>,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    T,
  >(
    resourceFactory: Factory<[TResource1, TResource2]>,
    containerFactory: Function2<TResource1, TResource2, ContainerOf<C, T>>,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    TResource3 extends DisposableLike,
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
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    TResource3 extends DisposableLike,
    TResource4 extends DisposableLike,
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
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    TResource3 extends DisposableLike,
    TResource4 extends DisposableLike,
    TResource5 extends DisposableLike,
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

  using<TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    runnableFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T>;
};

export const encodeUtf8 =
  <C extends StatefulContainerLike>(
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
  C extends StatefulContainerLike,
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
