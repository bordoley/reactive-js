[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / AbstractEnumerable

# Class: AbstractEnumerable<T\>

[enumerable](../modules/enumerable.md).AbstractEnumerable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `AbstractLiftable`<[`Enumerator`](enumerator.Enumerator.md)<`T`\>\>

  ↳ **`AbstractEnumerable`**

## Implements

- [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](enumerable.AbstractEnumerable.md#constructor)

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

AbstractLiftable<Enumerator<T\>\>.constructor

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
