[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / AbstractEnumerable

# Class: AbstractEnumerable<T\>

[enumerable](../modules/enumerable.md).AbstractEnumerable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractLiftable`](liftable.AbstractLiftable.md)<[`Enumerator`](enumerator.Enumerator.md)<`T`\>\>

  ↳ **`AbstractEnumerable`**

## Implements

- [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](enumerable.AbstractEnumerable.md#constructor)

### Accessors

- [T](enumerable.AbstractEnumerable.md#t)
- [TContainerOf](enumerable.AbstractEnumerable.md#tcontainerof)
- [TLiftableState](enumerable.AbstractEnumerable.md#tliftablestate)

### Methods

- [enumerate](enumerable.AbstractEnumerable.md#enumerate)

## Constructors

### constructor

• **new AbstractEnumerable**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbstractLiftable](liftable.AbstractLiftable.md).[constructor](liftable.AbstractLiftable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[EnumerableLike](../interfaces/enumerable.EnumerableLike.md).[T](../interfaces/enumerable.EnumerableLike.md#t)

#### Inherited from

AbstractLiftable.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[EnumerableLike](../interfaces/enumerable.EnumerableLike.md).[TContainerOf](../interfaces/enumerable.EnumerableLike.md#tcontainerof)

#### Inherited from

AbstractLiftable.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

[EnumerableLike](../interfaces/enumerable.EnumerableLike.md).[TLiftableState](../interfaces/enumerable.EnumerableLike.md#tliftablestate)

#### Inherited from

AbstractLiftable.TLiftableState

## Methods

### enumerate

▸ `Abstract` **enumerate**(`this`): [`Enumerator`](enumerator.Enumerator.md)<`T`\>

Returns an `EnumeratorLike` to iterate through the Container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\> |

#### Returns

[`Enumerator`](enumerator.Enumerator.md)<`T`\>

#### Implementation of

[EnumerableLike](../interfaces/enumerable.EnumerableLike.md).[enumerate](../interfaces/enumerable.EnumerableLike.md#enumerate)
