[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / Enumerator

# Class: Enumerator<T\>

[enumerable](../modules/enumerable.md).Enumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`Enumerator`**

  ↳↳ [`AbstractEnumerator`](enumerable.AbstractEnumerator.md)

## Implements

- [`LiftedStateLike`](../interfaces/liftable.LiftedStateLike.md)

## Table of contents

### Constructors

- [constructor](enumerable.Enumerator.md#constructor)

### Accessors

- [T](enumerable.Enumerator.md#t)
- [current](enumerable.Enumerator.md#current)
- [hasCurrent](enumerable.Enumerator.md#hascurrent)
- [type](enumerable.Enumerator.md#type)

### Methods

- [move](enumerable.Enumerator.md#move)

## Constructors

### constructor

• **new Enumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[constructor](container.AbstractDisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftedStateLike](../interfaces/liftable.LiftedStateLike.md).[T](../interfaces/liftable.LiftedStateLike.md#t)

#### Inherited from

AbstractDisposableContainer.T

___

### current

• `Abstract` `get` **current**(): `T`

#### Returns

`T`

___

### hasCurrent

• `Abstract` `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftedStateLike](../interfaces/liftable.LiftedStateLike.md).[type](../interfaces/liftable.LiftedStateLike.md#type)

#### Inherited from

AbstractDisposableContainer.type

## Methods

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`
