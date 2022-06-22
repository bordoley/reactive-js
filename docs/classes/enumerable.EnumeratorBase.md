[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumeratorBase

# Class: EnumeratorBase<T\>

[enumerable](../modules/enumerable.md).EnumeratorBase

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerable.Enumerator.md)<`T`\>

  ↳ **`EnumeratorBase`**

## Table of contents

### Constructors

- [constructor](enumerable.EnumeratorBase.md#constructor)

### Accessors

- [T](enumerable.EnumeratorBase.md#t)
- [current](enumerable.EnumeratorBase.md#current)
- [hasCurrent](enumerable.EnumeratorBase.md#hascurrent)
- [type](enumerable.EnumeratorBase.md#type)

### Methods

- [move](enumerable.EnumeratorBase.md#move)
- [reset](enumerable.EnumeratorBase.md#reset)

## Constructors

### constructor

• **new EnumeratorBase**<`T`\>()

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

▸ **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Enumerator](enumerable.Enumerator.md).[move](enumerable.Enumerator.md#move)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`
