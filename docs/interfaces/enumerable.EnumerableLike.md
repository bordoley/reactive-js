[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumerableLike

# Interface: EnumerableLike<T\>

[enumerable](../modules/enumerable.md).EnumerableLike

Interface for iterating a Container of items.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`EnumerableLike`**

## Implemented by

- [`AbstractEnumerable`](../classes/enumerable.AbstractEnumerable.md)

## Table of contents

### Properties

- [T](enumerable.EnumerableLike.md#t)
- [TContainerOf](enumerable.EnumerableLike.md#tcontainerof)
- [TLiftableState](enumerable.EnumerableLike.md#tliftablestate)

### Methods

- [enumerate](enumerable.EnumerableLike.md#enumerate)

## Properties

### T

• **T**: `unknown`

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[T](liftable.LiftableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[TContainerOf](liftable.LiftableLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`Enumerator`](../classes/enumerator.Enumerator.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[TLiftableState](liftable.LiftableLike.md#tliftablestate)

## Methods

### enumerate

▸ **enumerate**(`this`): [`Enumerator`](../classes/enumerator.Enumerator.md)<[`T`](enumerable.EnumerableLike.md#t)\>

Returns an `EnumeratorLike` to iterate through the Container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumerableLike`](enumerable.EnumerableLike.md)<[`T`](enumerable.EnumerableLike.md#t)\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<[`T`](enumerable.EnumerableLike.md#t)\>
