[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / Enumerator

# Class: Enumerator<T\>

[enumerator](../modules/enumerator.md).Enumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableContainer`](container.DisposableContainer.md)

  ↳ **`Enumerator`**

  ↳↳ [`AbstractEnumerator`](enumerator.AbstractEnumerator.md)

  ↳↳ [`AbstractPassThroughEnumerator`](enumerator.AbstractPassThroughEnumerator.md)

  ↳↳ [`VirtualTimeSchedulerLike`](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

## Implements

- [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)

## Table of contents

### Constructors

- [constructor](enumerator.Enumerator.md#constructor)

### Accessors

- [T](enumerator.Enumerator.md#t)
- [current](enumerator.Enumerator.md#current)
- [error](enumerator.Enumerator.md#error)
- [hasCurrent](enumerator.Enumerator.md#hascurrent)
- [isDisposed](enumerator.Enumerator.md#isdisposed)
- [type](enumerator.Enumerator.md#type)

### Methods

- [add](enumerator.Enumerator.md#add)
- [dispose](enumerator.Enumerator.md#dispose)
- [move](enumerator.Enumerator.md#move)

## Constructors

### constructor

• **new Enumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[DisposableContainer](container.DisposableContainer.md).[constructor](container.DisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[T](../interfaces/liftable.LiftableStateLike.md#t)

#### Inherited from

DisposableContainer.T

___

### current

• `Abstract` `get` **current**(): `T`

#### Returns

`T`

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

LiftableStateLike.error

#### Inherited from

DisposableContainer.error

___

### hasCurrent

• `Abstract` `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

LiftableStateLike.isDisposed

#### Inherited from

DisposableContainer.isDisposed

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[type](../interfaces/liftable.LiftableStateLike.md#type)

#### Inherited from

DisposableContainer.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Enumerator`](enumerator.Enumerator.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[add](../interfaces/liftable.LiftableStateLike.md#add)

#### Inherited from

[DisposableContainer](container.DisposableContainer.md).[add](container.DisposableContainer.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Enumerator`](enumerator.Enumerator.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[dispose](../interfaces/liftable.LiftableStateLike.md#dispose)

#### Inherited from

[DisposableContainer](container.DisposableContainer.md).[dispose](container.DisposableContainer.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`
