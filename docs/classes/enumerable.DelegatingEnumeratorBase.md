[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / DelegatingEnumeratorBase

# Class: DelegatingEnumeratorBase<T\>

[enumerable](../modules/enumerable.md).DelegatingEnumeratorBase

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerable.Enumerator.md)<`T`\>

  ↳ **`DelegatingEnumeratorBase`**

## Table of contents

### Constructors

- [constructor](enumerable.DelegatingEnumeratorBase.md#constructor)

### Properties

- [delegate](enumerable.DelegatingEnumeratorBase.md#delegate)

### Accessors

- [T](enumerable.DelegatingEnumeratorBase.md#t)
- [current](enumerable.DelegatingEnumeratorBase.md#current)
- [hasCurrent](enumerable.DelegatingEnumeratorBase.md#hascurrent)
- [type](enumerable.DelegatingEnumeratorBase.md#type)

### Methods

- [move](enumerable.DelegatingEnumeratorBase.md#move)

## Constructors

### constructor

• **new DelegatingEnumeratorBase**<`T`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Enumerator`](enumerable.Enumerator.md)<`T`\> |

#### Overrides

[Enumerator](enumerable.Enumerator.md).[constructor](enumerable.Enumerator.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`Enumerator`](enumerable.Enumerator.md)<`T`\>

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
