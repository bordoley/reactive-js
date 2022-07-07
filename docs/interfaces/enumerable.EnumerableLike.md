[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[enumerable](../modules/enumerable.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`InteractiveContainerLike`](interactiveContainer.InteractiveContainerLike.md)

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [T](enumerable.EnumerableLike.md#t)
- [TContainerOf](enumerable.EnumerableLike.md#tcontainerof)
- [TCtx](enumerable.EnumerableLike.md#tctx)
- [TLiftableContainerState](enumerable.EnumerableLike.md#tliftablecontainerstate)

### Methods

- [enumerate](enumerable.EnumerableLike.md#enumerate)
- [interact](enumerable.EnumerableLike.md#interact)

## Properties

### T

• **T**: `unknown`

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[T](interactiveContainer.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[TContainerOf](interactiveContainer.InteractiveContainerLike.md#tcontainerof)

___

### TCtx

• `Readonly` **TCtx**: `void`

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[TCtx](interactiveContainer.InteractiveContainerLike.md#tctx)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`EnumeratorLike`](enumerator.EnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[TLiftableContainerState](interactiveContainer.InteractiveContainerLike.md#tliftablecontainerstate)

## Methods

### enumerate

▸ **enumerate**(`this`): [`EnumeratorLike`](enumerator.EnumeratorLike.md)<[`T`](enumerable.EnumerableLike.md#t)\>

Returns an `EnumeratorLike` to iterate through the Container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\> |

#### Returns

[`EnumeratorLike`](enumerator.EnumeratorLike.md)<[`T`](enumerable.EnumerableLike.md#t)\>

___

### interact

▸ **interact**(`this`, `_`): [`EnumeratorLike`](enumerator.EnumeratorLike.md)<[`T`](enumerable.EnumerableLike.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\> |
| `_` | `void` |

#### Returns

[`EnumeratorLike`](enumerator.EnumeratorLike.md)<[`T`](enumerable.EnumerableLike.md#t)\>

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[interact](interactiveContainer.InteractiveContainerLike.md#interact)
