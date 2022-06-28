[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractDelegatingEnumerator

# Class: AbstractDelegatingEnumerator<T\>

[enumerator](../modules/enumerator.md).AbstractDelegatingEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerator.Enumerator.md)<`T`\>

  ↳ **`AbstractDelegatingEnumerator`**

## Table of contents

### Constructors

- [constructor](enumerator.AbstractDelegatingEnumerator.md#constructor)

### Properties

- [delegate](enumerator.AbstractDelegatingEnumerator.md#delegate)

### Accessors

- [T](enumerator.AbstractDelegatingEnumerator.md#t)
- [current](enumerator.AbstractDelegatingEnumerator.md#current)
- [hasCurrent](enumerator.AbstractDelegatingEnumerator.md#hascurrent)
- [type](enumerator.AbstractDelegatingEnumerator.md#type)

### Methods

- [move](enumerator.AbstractDelegatingEnumerator.md#move)

## Constructors

### constructor

• **new AbstractDelegatingEnumerator**<`T`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Enumerator`](enumerator.Enumerator.md)<`T`\> |

#### Overrides

[Enumerator](enumerator.Enumerator.md).[constructor](enumerator.Enumerator.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`Enumerator`](enumerator.Enumerator.md)<`T`\>

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

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Enumerator](enumerator.Enumerator.md).[move](enumerator.Enumerator.md#move)
