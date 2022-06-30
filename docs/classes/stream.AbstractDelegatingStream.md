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
- [liftableStateType](stream.AbstractDelegatingStream.md#liftablestatetype)
- [observerCount](stream.AbstractDelegatingStream.md#observercount)
- [replay](stream.AbstractDelegatingStream.md#replay)
- [scheduler](stream.AbstractDelegatingStream.md#scheduler)
- [type](stream.AbstractDelegatingStream.md#type)

### Methods

- [dispatch](stream.AbstractDelegatingStream.md#dispatch)
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

[StreamLike](../interfaces/stream.StreamLike.md).[scheduler](../interfaces/stream.StreamLike.md#scheduler)

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
