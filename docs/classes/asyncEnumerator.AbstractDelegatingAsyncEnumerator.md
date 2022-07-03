[Reactive-JS](../README.md) / [asyncEnumerator](../modules/asyncEnumerator.md) / AbstractDelegatingAsyncEnumerator

# Class: AbstractDelegatingAsyncEnumerator<TA, TB\>

[asyncEnumerator](../modules/asyncEnumerator.md).AbstractDelegatingAsyncEnumerator

## Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Hierarchy

- [`AsyncEnumerator`](asyncEnumerator.AsyncEnumerator.md)<`TB`\>

  ↳ **`AbstractDelegatingAsyncEnumerator`**

## Implements

- [`StreamLike`](../interfaces/stream.StreamLike.md)<`void`, `TB`\>

## Table of contents

### Constructors

- [constructor](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#constructor)

### Properties

- [delegate](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#delegate)
- [isEnumerable](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#isenumerable)

### Accessors

- [T](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#t)
- [TContainerOf](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#tcontainerof)
- [error](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#error)
- [isDisposed](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#isdisposed)
- [liftableStateType](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#liftablestatetype)
- [observerCount](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#observercount)
- [replay](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#replay)
- [scheduler](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#scheduler)

### Methods

- [add](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#add)
- [dispatch](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#dispatch)
- [dispose](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#dispose)
- [sink](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#sink)

## Constructors

### constructor

• **new AbstractDelegatingAsyncEnumerator**<`TA`, `TB`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`StreamLike`](../interfaces/stream.StreamLike.md)<`void`, `TA`\> |

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[constructor](asyncEnumerator.AsyncEnumerator.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`StreamLike`](../interfaces/stream.StreamLike.md)<`void`, `TA`\>

___

### isEnumerable

• `Optional` **isEnumerable**: ``false``

#### Implementation of

StreamLike.isEnumerable

#### Inherited from

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[isEnumerable](asyncEnumerator.AsyncEnumerator.md#isenumerable)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

StreamLike.T

#### Inherited from

AsyncEnumerator.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

StreamLike.TContainerOf

#### Inherited from

AsyncEnumerator.TContainerOf

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

StreamLike.error

#### Inherited from

AsyncEnumerator.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

StreamLike.isDisposed

#### Inherited from

AsyncEnumerator.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

StreamLike.liftableStateType

#### Inherited from

AsyncEnumerator.liftableStateType

___

### observerCount

• `get` **observerCount**(): `number`

#### Returns

`number`

#### Implementation of

StreamLike.observerCount

#### Overrides

AsyncEnumerator.observerCount

___

### replay

• `get` **replay**(): `number`

#### Returns

`number`

#### Implementation of

StreamLike.replay

#### Overrides

AsyncEnumerator.replay

___

### scheduler

• `get` **scheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Implementation of

StreamLike.scheduler

#### Overrides

AsyncEnumerator.scheduler

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDelegatingAsyncEnumerator`](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md)<`TA`, `TB`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

StreamLike.add

#### Inherited from

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[add](asyncEnumerator.AsyncEnumerator.md#add)

___

### dispatch

▸ **dispatch**(`req`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `void` |

#### Returns

`void`

#### Implementation of

StreamLike.dispatch

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractDelegatingAsyncEnumerator`](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md)<`TA`, `TB`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

StreamLike.dispose

#### Inherited from

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[dispose](asyncEnumerator.AsyncEnumerator.md#dispose)

___

### sink

▸ `Abstract` **sink**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](observer.Observer.md)<`TB`\> |

#### Returns

`void`

#### Implementation of

StreamLike.sink

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[sink](asyncEnumerator.AsyncEnumerator.md#sink)
