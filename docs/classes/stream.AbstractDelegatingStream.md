[Reactive-JS](../README.md) / [stream](../modules/stream.md) / AbstractDelegatingStream

# Class: AbstractDelegatingStream<TReqA, TA, TReqB, TB\>

[stream](../modules/stream.md).AbstractDelegatingStream

## Type parameters

| Name |
| :------ |
| `TReqA` |
| `TA` |
| `TReqB` |
| `TB` |

## Hierarchy

- [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)<`TB`\>

  ↳ **`AbstractDelegatingStream`**

## Implements

- [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReqB`, `TB`\>

## Table of contents

### Constructors

- [constructor](stream.AbstractDelegatingStream.md#constructor)

### Properties

- [delegate](stream.AbstractDelegatingStream.md#delegate)

### Accessors

- [T](stream.AbstractDelegatingStream.md#t)
- [error](stream.AbstractDelegatingStream.md#error)
- [isDisposed](stream.AbstractDelegatingStream.md#isdisposed)
- [liftableStateType](stream.AbstractDelegatingStream.md#liftablestatetype)
- [observerCount](stream.AbstractDelegatingStream.md#observercount)
- [replay](stream.AbstractDelegatingStream.md#replay)
- [scheduler](stream.AbstractDelegatingStream.md#scheduler)
- [type](stream.AbstractDelegatingStream.md#type)

### Methods

- [add](stream.AbstractDelegatingStream.md#add)
- [dispatch](stream.AbstractDelegatingStream.md#dispatch)
- [dispose](stream.AbstractDelegatingStream.md#dispose)
- [sink](stream.AbstractDelegatingStream.md#sink)

## Constructors

### constructor

• **new AbstractDelegatingStream**<`TReqA`, `TA`, `TReqB`, `TB`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TReqA` |
| `TA` |
| `TReqB` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReqA`, `TA`\> |

#### Overrides

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[constructor](observable.AbstractDisposableObservable.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReqA`, `TA`\>

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

StreamLike.T

#### Inherited from

AbstractDisposableObservable.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

StreamLike.error

#### Inherited from

AbstractDisposableObservable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

StreamLike.isDisposed

#### Inherited from

AbstractDisposableObservable.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

StreamLike.liftableStateType

#### Inherited from

AbstractDisposableObservable.liftableStateType

___

### observerCount

• `get` **observerCount**(): `number`

#### Returns

`number`

#### Implementation of

StreamLike.observerCount

___

### replay

• `get` **replay**(): `number`

#### Returns

`number`

#### Implementation of

StreamLike.replay

___

### scheduler

• `get` **scheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Implementation of

StreamLike.scheduler

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

StreamLike.type

#### Inherited from

AbstractDisposableObservable.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDelegatingStream`](stream.AbstractDelegatingStream.md)<`TReqA`, `TA`, `TReqB`, `TB`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

StreamLike.add

#### Inherited from

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[add](observable.AbstractDisposableObservable.md#add)

___

### dispatch

▸ `Abstract` **dispatch**(`req`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `TReqB` |

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
| `this` | [`AbstractDelegatingStream`](stream.AbstractDelegatingStream.md)<`TReqA`, `TA`, `TReqB`, `TB`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

StreamLike.dispose

#### Inherited from

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[dispose](observable.AbstractDisposableObservable.md#dispose)

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

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[sink](observable.AbstractDisposableObservable.md#sink)
