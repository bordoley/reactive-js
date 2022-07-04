[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / LiftableLike

# Interface: LiftableLike

[liftable](../modules/liftable.md).LiftableLike

## Hierarchy

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`LiftableLike`**

  ↳↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](enumerable.EnumerableLike.md)

  ↳↳ [`SourceLike`](source.SourceLike.md)

## Implemented by

- [`AbtractDisposableLiftable`](../classes/liftable.AbtractDisposableLiftable.md)

## Table of contents

### Properties

- [T](liftable.LiftableLike.md#t)
- [TContainerOf](liftable.LiftableLike.md#tcontainerof)
- [TLiftableState](liftable.LiftableLike.md#tliftablestate)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[TContainerOf](container.ContainerLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`Disposable`](../classes/disposable.Disposable.md) & [`ContainerLike`](container.ContainerLike.md)
