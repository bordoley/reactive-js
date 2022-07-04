import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
} from "./container";
import { Disposable } from "./disposable";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
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
