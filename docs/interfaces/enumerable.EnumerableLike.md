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
- [liftedStateType](enumerable.EnumerableLike.md#liftedstatetype)
- [type](enumerable.EnumerableLike.md#type)

### Methods

- [enumerate](enumerable.EnumerableLike.md#enumerate)

## Properties

### T

• **T**: `unknown`

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[T](liftable.LiftableLike.md#t)

___

### liftedStateType

• `Readonly` **liftedStateType**: [`Enumerator`](../classes/enumerator.Enumerator.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[liftedStateType](liftable.LiftableLike.md#liftedstatetype)

___

### type

• `Readonly` **type**: [`EnumerableLike`](enumerable.EnumerableLike.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[type](liftable.LiftableLike.md#type)

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
