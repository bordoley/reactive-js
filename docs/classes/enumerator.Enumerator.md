[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / Enumerator

# Class: Enumerator<T\>

[enumerator](../modules/enumerator.md).Enumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`Enumerator`**

  ↳↳ [`AbstractDelegatingEnumerator`](enumerator.AbstractDelegatingEnumerator.md)

  ↳↳ [`AbstractEnumerator`](enumerator.AbstractEnumerator.md)

  ↳↳ [`VirtualTimeSchedulerLike`](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

## Implements

- [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)

## Table of contents

### Constructors

- [constructor](enumerator.Enumerator.md#constructor)

### Accessors

- [T](enumerator.Enumerator.md#t)
- [current](enumerator.Enumerator.md#current)
- [hasCurrent](enumerator.Enumerator.md#hascurrent)
- [type](enumerator.Enumerator.md#type)

### Methods

- [move](enumerator.Enumerator.md#move)

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

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[T](../interfaces/liftable.LiftableStateLike.md#t)

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

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[type](../interfaces/liftable.LiftableStateLike.md#type)

#### Inherited from

AbstractDisposableContainer.type

## Methods

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`
