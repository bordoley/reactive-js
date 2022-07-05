[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[enumerable](../modules/enumerable.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`InteractiveContainerLike`](interactive.InteractiveContainerLike.md)<`void`\>

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [T](enumerable.EnumerableLike.md#t)
- [TContainerOf](enumerable.EnumerableLike.md#tcontainerof)
- [TLiftableState](enumerable.EnumerableLike.md#tliftablestate)

### Methods

- [enumerate](enumerable.EnumerableLike.md#enumerate)
- [source](enumerable.EnumerableLike.md#source)

## Properties

### T

• **T**: `unknown`

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[T](interactive.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[TContainerOf](interactive.InteractiveContainerLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`Enumerator`](../classes/enumerator.Enumerator.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[TLiftableState](interactive.InteractiveContainerLike.md#tliftablestate)

## Methods

### enumerate

▸ **enumerate**(`this`, `_`): [`Enumerator`](../classes/enumerator.Enumerator.md)<[`T`](enumerable.EnumerableLike.md#t)\>

Returns an `EnumeratorLike` to iterate through the Container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\> |
| `_` | `void` |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<[`T`](enumerable.EnumerableLike.md#t)\>

___

### source

▸ **source**(`this`, `_`): [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveContainerLike`](interactive.InteractiveContainerLike.md)<`void`\> |
| `_` | `void` |

#### Returns

[`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Inherited from

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[source](interactive.InteractiveContainerLike.md#source)
