[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / Enumerator

# Class: Enumerator<T\>

[enumerator](../modules/enumerator.md).Enumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`Enumerator`**

  ↳↳ [`VirtualTimeSchedulerLike`](../interfaces/scheduler.VirtualTimeSchedulerLike.md)

## Implements

- [`InteractiveSourceLike`](../interfaces/interactiveSource.InteractiveSourceLike.md)

## Table of contents

### Constructors

- [constructor](enumerator.Enumerator.md#constructor)

### Accessors

- [current](enumerator.Enumerator.md#current)
- [error](enumerator.Enumerator.md#error)
- [hasCurrent](enumerator.Enumerator.md#hascurrent)
- [isDisposed](enumerator.Enumerator.md#isdisposed)

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

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Accessors

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

InteractiveSourceLike.error

#### Inherited from

Disposable.error

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

InteractiveSourceLike.isDisposed

#### Inherited from

Disposable.isDisposed

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

[InteractiveSourceLike](../interfaces/interactiveSource.InteractiveSourceLike.md).[add](../interfaces/interactiveSource.InteractiveSourceLike.md#add)

#### Inherited from

[Disposable](disposable.Disposable.md).[add](disposable.Disposable.md#add)

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

[InteractiveSourceLike](../interfaces/interactiveSource.InteractiveSourceLike.md).[dispose](../interfaces/interactiveSource.InteractiveSourceLike.md#dispose)

#### Inherited from

[Disposable](disposable.Disposable.md).[dispose](disposable.Disposable.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[InteractiveSourceLike](../interfaces/interactiveSource.InteractiveSourceLike.md).[move](../interfaces/interactiveSource.InteractiveSourceLike.md#move)
