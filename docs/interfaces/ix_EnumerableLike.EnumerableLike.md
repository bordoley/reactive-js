[Reactive-JS](../README.md) / [ix/EnumerableLike](../modules/ix_EnumerableLike.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[ix/EnumerableLike](../modules/ix_EnumerableLike.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`InteractiveContainerLike`](ix_InteractiveContainerLike.InteractiveContainerLike.md)

  ↳ **`EnumerableLike`**

## Table of contents

### Properties

- [T](ix_EnumerableLike.EnumerableLike.md#t)
- [TContainerOf](ix_EnumerableLike.EnumerableLike.md#tcontainerof)
- [TCtx](ix_EnumerableLike.EnumerableLike.md#tctx)
- [TStatefulContainerState](ix_EnumerableLike.EnumerableLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveContainerLike\_interact]](ix_EnumerableLike.EnumerableLike.md#[interactivecontainerlike_interact])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[T](ix_InteractiveContainerLike.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`EnumerableLike`](ix_EnumerableLike.EnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[TContainerOf](ix_InteractiveContainerLike.InteractiveContainerLike.md#tcontainerof)

___

### TCtx

• `Optional` `Readonly` **TCtx**: `void`

#### Overrides

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[TCtx](ix_InteractiveContainerLike.InteractiveContainerLike.md#tctx)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`EnumeratorLike`](ix_EnumeratorLike.EnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[TStatefulContainerState](ix_InteractiveContainerLike.InteractiveContainerLike.md#tstatefulcontainerstate)

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`_`): [`EnumeratorLike`](ix_EnumeratorLike.EnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `void` |

#### Returns

[`EnumeratorLike`](ix_EnumeratorLike.EnumeratorLike.md)<`T`\>

#### Overrides

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix_InteractiveContainerLike.InteractiveContainerLike.md#[interactivecontainerlike_interact])
