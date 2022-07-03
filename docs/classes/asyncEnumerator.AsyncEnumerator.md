[Reactive-JS](../README.md) / [asyncEnumerator](../modules/asyncEnumerator.md) / AsyncEnumerator

# Class: AsyncEnumerator<T\>

[asyncEnumerator](../modules/asyncEnumerator.md).AsyncEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbtractDisposableLiftable`](liftable.AbtractDisposableLiftable.md)<[`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`AsyncEnumerator`**

## Implements

- [`ContainerLike`](../interfaces/container.ContainerLike.md)
- [`StreamLike`](../interfaces/stream.StreamLike.md)<`void`, `T`\>

## Table of contents

### Constructors

- [constructor](asyncEnumerator.AsyncEnumerator.md#constructor)

### Properties

- [isEnumerable](asyncEnumerator.AsyncEnumerator.md#isenumerable)
- [observerCount](asyncEnumerator.AsyncEnumerator.md#observercount)
- [replay](asyncEnumerator.AsyncEnumerator.md#replay)
- [scheduler](asyncEnumerator.AsyncEnumerator.md#scheduler)

### Accessors

- [T](asyncEnumerator.AsyncEnumerator.md#t)
- [TContainerOf](asyncEnumerator.AsyncEnumerator.md#tcontainerof)
- [TLiftableState](asyncEnumerator.AsyncEnumerator.md#tliftablestate)
- [error](asyncEnumerator.AsyncEnumerator.md#error)
- [isDisposed](asyncEnumerator.AsyncEnumerator.md#isdisposed)

### Methods

- [add](asyncEnumerator.AsyncEnumerator.md#add)
- [dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)
- [dispose](asyncEnumerator.AsyncEnumerator.md#dispose)
- [sink](asyncEnumerator.AsyncEnumerator.md#sink)

## Constructors

### constructor

• **new AsyncEnumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[constructor](liftable.AbtractDisposableLiftable.md#constructor)

## Properties

### isEnumerable

• `Optional` **isEnumerable**: ``false``

#### Implementation of

StreamLike.isEnumerable

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

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ContainerLike](../interfaces/container.ContainerLike.md).[T](../interfaces/container.ContainerLike.md#t)

#### Inherited from

AbtractDisposableLiftable.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[ContainerLike](../interfaces/container.ContainerLike.md).[TContainerOf](../interfaces/container.ContainerLike.md#tcontainerof)

#### Inherited from

AbtractDisposableLiftable.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

StreamLike.TLiftableState

#### Inherited from

AbtractDisposableLiftable.TLiftableState

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

StreamLike.error

#### Inherited from

AbtractDisposableLiftable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

StreamLike.isDisposed

#### Inherited from

AbtractDisposableLiftable.isDisposed

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

StreamLike.add

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[add](liftable.AbtractDisposableLiftable.md#add)

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

StreamLike.dispose

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[dispose](liftable.AbtractDisposableLiftable.md#dispose)

___

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |
| `sink` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

StreamLike.sink
