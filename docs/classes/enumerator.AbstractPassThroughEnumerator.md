[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractPassThroughEnumerator

# Class: AbstractPassThroughEnumerator<T\>

[enumerator](../modules/enumerator.md).AbstractPassThroughEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerator.Enumerator.md)<`T`\>

  ↳ **`AbstractPassThroughEnumerator`**

## Table of contents

### Constructors

- [constructor](enumerator.AbstractPassThroughEnumerator.md#constructor)

### Properties

- [delegate](enumerator.AbstractPassThroughEnumerator.md#delegate)

### Accessors

- [T](enumerator.AbstractPassThroughEnumerator.md#t)
- [current](enumerator.AbstractPassThroughEnumerator.md#current)
- [hasCurrent](enumerator.AbstractPassThroughEnumerator.md#hascurrent)
- [type](enumerator.AbstractPassThroughEnumerator.md#type)

### Methods

- [move](enumerator.AbstractPassThroughEnumerator.md#move)

## Constructors

### constructor

• **new AbstractPassThroughEnumerator**<`T`\>(`delegate`)

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
