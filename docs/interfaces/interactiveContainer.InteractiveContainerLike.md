[Reactive-JS](../README.md) / [interactiveContainer](../modules/interactiveContainer.md) / InteractiveContainerLike

# Interface: InteractiveContainerLike

[interactiveContainer](../modules/interactiveContainer.md).InteractiveContainerLike

## Hierarchy

- [`LiftableContainerLike`](liftable.LiftableContainerLike.md)

  ↳ **`InteractiveContainerLike`**

  ↳↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](enumerable.EnumerableLike.md)

## Table of contents

### Properties

- [T](interactiveContainer.InteractiveContainerLike.md#t)
- [TContainerOf](interactiveContainer.InteractiveContainerLike.md#tcontainerof)
- [TCtx](interactiveContainer.InteractiveContainerLike.md#tctx)
- [TLiftableState](interactiveContainer.InteractiveContainerLike.md#tliftablestate)

### Methods

- [source](interactiveContainer.InteractiveContainerLike.md#source)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftableContainerLike](liftable.LiftableContainerLike.md).[T](liftable.LiftableContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[LiftableContainerLike](liftable.LiftableContainerLike.md).[TContainerOf](liftable.LiftableContainerLike.md#tcontainerof)

___

### TCtx

• `Readonly` **TCtx**: `unknown`

___

### TLiftableState

• `Readonly` **TLiftableState**: [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Overrides

[LiftableContainerLike](liftable.LiftableContainerLike.md).[TLiftableState](liftable.LiftableContainerLike.md#tliftablestate)

## Methods

### source

▸ **source**(`this`, `_`): [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveContainerLike`](interactiveContainer.InteractiveContainerLike.md) |
| `_` | `unknown` |

#### Returns

[`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>
