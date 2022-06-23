[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / AbstractEnumerator

# Class: AbstractEnumerator<T\>

[enumerable](../modules/enumerable.md).AbstractEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerable.Enumerator.md)<`T`\>

  ↳ **`AbstractEnumerator`**

## Table of contents

### Constructors

- [constructor](enumerable.AbstractEnumerator.md#constructor)

### Accessors

- [T](enumerable.AbstractEnumerator.md#t)
- [current](enumerable.AbstractEnumerator.md#current)
- [hasCurrent](enumerable.AbstractEnumerator.md#hascurrent)
- [type](enumerable.AbstractEnumerator.md#type)

### Methods

- [move](enumerable.AbstractEnumerator.md#move)
- [reset](enumerable.AbstractEnumerator.md#reset)

## Constructors

### constructor

• **new AbstractEnumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[Enumerator](enumerable.Enumerator.md).[constructor](enumerable.Enumerator.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Enumerator.T

___

### current

• `get` **current**(): `T`

#### Returns

`T`

#### Overrides

Enumerator.current

• `set` **current**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`void`

#### Overrides

Enumerator.current

___

### hasCurrent

• `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

#### Overrides

Enumerator.hasCurrent

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

Enumerator.type

## Methods

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Enumerator](enumerable.Enumerator.md).[move](enumerable.Enumerator.md#move)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`
