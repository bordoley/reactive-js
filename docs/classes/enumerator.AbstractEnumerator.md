[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractEnumerator

# Class: AbstractEnumerator<T\>

[enumerator](../modules/enumerator.md).AbstractEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerator.Enumerator.md)<`T`\>

  ↳ **`AbstractEnumerator`**

## Table of contents

### Constructors

- [constructor](enumerator.AbstractEnumerator.md#constructor)

### Accessors

- [T](enumerator.AbstractEnumerator.md#t)
- [current](enumerator.AbstractEnumerator.md#current)
- [hasCurrent](enumerator.AbstractEnumerator.md#hascurrent)
- [type](enumerator.AbstractEnumerator.md#type)

### Methods

- [move](enumerator.AbstractEnumerator.md#move)
- [reset](enumerator.AbstractEnumerator.md#reset)

## Constructors

### constructor

• **new AbstractEnumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[Enumerator](enumerator.Enumerator.md).[constructor](enumerator.Enumerator.md#constructor)

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

[Enumerator](enumerator.Enumerator.md).[move](enumerator.Enumerator.md#move)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`
