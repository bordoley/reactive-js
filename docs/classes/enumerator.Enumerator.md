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

- [`SourceLike`](../interfaces/source.SourceLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](enumerator.Enumerator.md#constructor)

### Accessors

- [T](enumerator.Enumerator.md#t)
- [TContainerOf](enumerator.Enumerator.md#tcontainerof)
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

### T

• `get` **T**(): `T`

#### Returns

`T`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[T](../interfaces/source.SourceLike.md#t)

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[TContainerOf](../interfaces/source.SourceLike.md#tcontainerof)

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

SourceLike.error

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

SourceLike.isDisposed

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

[SourceLike](../interfaces/source.SourceLike.md).[add](../interfaces/source.SourceLike.md#add)

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

[SourceLike](../interfaces/source.SourceLike.md).[dispose](../interfaces/source.SourceLike.md#dispose)

#### Inherited from

[Disposable](disposable.Disposable.md).[dispose](disposable.Disposable.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[move](../interfaces/source.SourceLike.md#move)
