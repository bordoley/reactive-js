[Reactive-JS](../README.md) / [interactiveContainer](../modules/interactiveContainer.md) / InteractiveContainerLike

# Interface: InteractiveContainerLike

[interactiveContainer](../modules/interactiveContainer.md).InteractiveContainerLike

## Hierarchy

- [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md)

  ↳ **`InteractiveContainerLike`**

  ↳↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](enumerable.EnumerableLike.md)

## Table of contents

### Properties

- [T](interactiveContainer.InteractiveContainerLike.md#t)
- [TContainerOf](interactiveContainer.InteractiveContainerLike.md#tcontainerof)
- [TCtx](interactiveContainer.InteractiveContainerLike.md#tctx)
- [TLiftableContainerState](interactiveContainer.InteractiveContainerLike.md#tliftablecontainerstate)

### Methods

- [source](interactiveContainer.InteractiveContainerLike.md#source)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftableContainerLike](liftableContainer.LiftableContainerLike.md).[T](liftableContainer.LiftableContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[LiftableContainerLike](liftableContainer.LiftableContainerLike.md).[TContainerOf](liftableContainer.LiftableContainerLike.md#tcontainerof)

___

### TCtx

• `Readonly` **TCtx**: `unknown`

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)

#### Overrides

[LiftableContainerLike](liftableContainer.LiftableContainerLike.md).[TLiftableContainerState](liftableContainer.LiftableContainerLike.md#tliftablecontainerstate)

## Methods

### source

▸ **source**(`this`, `_`): [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveContainerLike`](interactiveContainer.InteractiveContainerLike.md) |
| `_` | `unknown` |

#### Returns

[`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)
