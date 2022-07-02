[Reactive-JS](../README.md) / [asyncEnumerator](../modules/asyncEnumerator.md) / AsyncEnumerator

# Class: AsyncEnumerator<T\>

[asyncEnumerator](../modules/asyncEnumerator.md).AsyncEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableLiftable`](liftable.DisposableLiftable.md)<[`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`AsyncEnumerator`**

  ↳↳ [`AbstractDelegatingAsyncEnumerator`](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md)

## Implements

- [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)
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
- [error](asyncEnumerator.AsyncEnumerator.md#error)
- [isDisposed](asyncEnumerator.AsyncEnumerator.md#isdisposed)
- [liftableStateType](asyncEnumerator.AsyncEnumerator.md#liftablestatetype)
- [type](asyncEnumerator.AsyncEnumerator.md#type)

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

[DisposableLiftable](liftable.DisposableLiftable.md).[constructor](liftable.DisposableLiftable.md#constructor)

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

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[T](../interfaces/liftable.LiftableStateLike.md#t)

#### Inherited from

DisposableLiftable.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

LiftableStateLike.error

#### Inherited from

DisposableLiftable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

LiftableStateLike.isDisposed

#### Inherited from

DisposableLiftable.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

StreamLike.liftableStateType

#### Inherited from

DisposableLiftable.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[type](../interfaces/liftable.LiftableStateLike.md#type)

#### Inherited from

DisposableLiftable.type

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

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[add](../interfaces/liftable.LiftableStateLike.md#add)

#### Inherited from

[DisposableLiftable](liftable.DisposableLiftable.md).[add](liftable.DisposableLiftable.md#add)

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

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[dispose](../interfaces/liftable.LiftableStateLike.md#dispose)

#### Inherited from

[DisposableLiftable](liftable.DisposableLiftable.md).[dispose](liftable.DisposableLiftable.md#dispose)

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
