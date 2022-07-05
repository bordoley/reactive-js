[Reactive-JS](../README.md) / [interactive](../modules/interactive.md) / InteractiveContainerLike

# Interface: InteractiveContainerLike

[interactive](../modules/interactive.md).InteractiveContainerLike

## Hierarchy

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`InteractiveContainerLike`**

  ↳↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](enumerable.EnumerableLike.md)

## Table of contents

### Properties

- [T](interactive.InteractiveContainerLike.md#t)
- [TContainerOf](interactive.InteractiveContainerLike.md#tcontainerof)
- [TCtx](interactive.InteractiveContainerLike.md#tctx)
- [TLiftableState](interactive.InteractiveContainerLike.md#tliftablestate)

### Methods

- [source](interactive.InteractiveContainerLike.md#source)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftableLike](liftable.LiftableLike.md).[T](liftable.LiftableLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[LiftableLike](liftable.LiftableLike.md).[TContainerOf](liftable.LiftableLike.md#tcontainerof)

___

### TCtx

• `Readonly` **TCtx**: `unknown`

___

### TLiftableState

• `Readonly` **TLiftableState**: [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[TLiftableState](liftable.LiftableLike.md#tliftablestate)

## Methods

### source

▸ **source**(`this`, `_`): [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveContainerLike`](interactive.InteractiveContainerLike.md) |
| `_` | `unknown` |

#### Returns

[`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>
