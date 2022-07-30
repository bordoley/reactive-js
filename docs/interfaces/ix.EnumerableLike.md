[Reactive-JS](../README.md) / [ix](../modules/ix.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[ix](../modules/ix.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`InteractiveContainerLike`](ix.InteractiveContainerLike.md)<[`EnumeratorLike`](util.EnumeratorLike.md)<`T`\>\>

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [T](ix.EnumerableLike.md#t)
- [TContainerOf](ix.EnumerableLike.md#tcontainerof)
- [TStatefulContainerState](ix.EnumerableLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveContainerLike\_interact]](ix.EnumerableLike.md#[interactivecontainerlike_interact])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[T](ix.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`EnumerableLike`](ix.EnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[TContainerOf](ix.InteractiveContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`EnumeratorLike`](util.EnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[TStatefulContainerState](ix.InteractiveContainerLike.md#tstatefulcontainerstate)

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`_`): [`EnumeratorLike`](util.EnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `void` |

#### Returns

[`EnumeratorLike`](util.EnumeratorLike.md)<`T`\>

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])
