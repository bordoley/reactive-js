[Reactive-JS](../README.md) / [asyncEnumerator](../modules/asyncEnumerator.md) / AsyncEnumerator

# Class: AsyncEnumerator<T\>

[asyncEnumerator](../modules/asyncEnumerator.md).AsyncEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`AsyncEnumerator`**

## Implements

- [`InteractiveSourceLike`](../interfaces/interactiveSource.InteractiveSourceLike.md)
- [`StreamLike`](../interfaces/stream.StreamLike.md)<`void`, `T`\>

## Table of contents

### Constructors

- [constructor](asyncEnumerator.AsyncEnumerator.md#constructor)

### Properties

- [observableType](asyncEnumerator.AsyncEnumerator.md#observabletype)
- [observerCount](asyncEnumerator.AsyncEnumerator.md#observercount)
- [replay](asyncEnumerator.AsyncEnumerator.md#replay)
- [scheduler](asyncEnumerator.AsyncEnumerator.md#scheduler)

### Accessors

- [T](asyncEnumerator.AsyncEnumerator.md#t)
- [TContainerOf](asyncEnumerator.AsyncEnumerator.md#tcontainerof)
- [TLiftableContainerState](asyncEnumerator.AsyncEnumerator.md#tliftablecontainerstate)
- [error](asyncEnumerator.AsyncEnumerator.md#error)
- [isDisposed](asyncEnumerator.AsyncEnumerator.md#isdisposed)

### Methods

- [add](asyncEnumerator.AsyncEnumerator.md#add)
- [dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)
- [dispose](asyncEnumerator.AsyncEnumerator.md#dispose)
- [move](asyncEnumerator.AsyncEnumerator.md#move)
- [sinkInto](asyncEnumerator.AsyncEnumerator.md#sinkinto)

## Constructors

### constructor

• **new AsyncEnumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Properties

### observableType

• `Readonly` **observableType**: ``0``

#### Implementation of

StreamLike.observableType

___

### observerCount

• `Abstract` **observerCount**: `number`

#### Implementation of

StreamLike.observerCount

___

### replay

• `Abstract` **replay**: `number`

#### Implementation of

StreamLike.replay

___

### scheduler

• `Abstract` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Implementation of

StreamLike.scheduler

## Accessors

### T

• `get` **T**(): `T`

#### Returns

`T`

#### Implementation of

StreamLike.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

StreamLike.TContainerOf

___

### TLiftableContainerState

• `get` **TLiftableContainerState**(): [`Observer`](observer.Observer.md)<`this`[``"T"``]\>

#### Returns

[`Observer`](observer.Observer.md)<`this`[``"T"``]\>

#### Implementation of

StreamLike.TLiftableContainerState

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
| `this` | [`AsyncEnumerator`](asyncEnumerator.AsyncEnumerator.md)<`T`\> |
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

### dispatch

▸ `Abstract` **dispatch**(`this`, `req`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`void`\> |
| `req` | `void` |

#### Returns

`void`

#### Implementation of

StreamLike.dispatch

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AsyncEnumerator`](asyncEnumerator.AsyncEnumerator.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

[InteractiveSourceLike](../interfaces/interactiveSource.InteractiveSourceLike.md).[dispose](../interfaces/interactiveSource.InteractiveSourceLike.md#dispose)

#### Inherited from

[Disposable](disposable.Disposable.md).[dispose](disposable.Disposable.md#dispose)

___

### move

▸ **move**(): `void`

#### Returns

`void`

#### Implementation of

[InteractiveSourceLike](../interfaces/interactiveSource.InteractiveSourceLike.md).[move](../interfaces/interactiveSource.InteractiveSourceLike.md#move)

___

### sinkInto

▸ `Abstract` **sinkInto**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |
| `sink` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

StreamLike.sinkInto
