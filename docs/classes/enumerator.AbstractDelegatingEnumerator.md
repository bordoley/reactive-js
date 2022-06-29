[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractDelegatingEnumerator

# Class: AbstractDelegatingEnumerator<TIn, TOut\>

[enumerator](../modules/enumerator.md).AbstractDelegatingEnumerator

## Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

## Hierarchy

- [`AbstractEnumerator`](enumerator.AbstractEnumerator.md)<`TOut`\>

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
- [reset](enumerator.AbstractDelegatingEnumerator.md#reset)

## Constructors

### constructor

• **new AbstractDelegatingEnumerator**<`TIn`, `TOut`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Enumerator`](enumerator.Enumerator.md)<`TIn`\> |

#### Overrides

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[constructor](enumerator.AbstractEnumerator.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`Enumerator`](enumerator.Enumerator.md)<`TIn`\>

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

AbstractEnumerator.T

___

### current

• `get` **current**(): `T`

#### Returns

`T`

#### Inherited from

AbstractEnumerator.current

• `set` **current**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`void`

#### Inherited from

AbstractEnumerator.current

___

### hasCurrent

• `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

AbstractEnumerator.hasCurrent

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

AbstractEnumerator.type

## Methods

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[move](enumerator.AbstractEnumerator.md#move)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[reset](enumerator.AbstractEnumerator.md#reset)
