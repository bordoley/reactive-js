[Reactive-JS](../README.md) / [asyncEnumerator](../modules/asyncEnumerator.md) / AsyncEnumerator

# Class: AsyncEnumerator<T\>

[asyncEnumerator](../modules/asyncEnumerator.md).AsyncEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableLiftable`](liftable.AbstractDisposableLiftable.md)<[`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`AsyncEnumerator`**

  ↳↳ [`LiftedAsyncEnumerator`](asyncEnumerable.LiftedAsyncEnumerator.md)

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
- [liftableStateType](asyncEnumerator.AsyncEnumerator.md#liftablestatetype)
- [type](asyncEnumerator.AsyncEnumerator.md#type)

### Methods

- [dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)
- [sink](asyncEnumerator.AsyncEnumerator.md#sink)

## Constructors

### constructor

• **new AsyncEnumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbstractDisposableLiftable](liftable.AbstractDisposableLiftable.md).[constructor](liftable.AbstractDisposableLiftable.md#constructor)

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

[StreamLike](../interfaces/stream.StreamLike.md).[scheduler](../interfaces/stream.StreamLike.md#scheduler)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[T](../interfaces/liftable.LiftableStateLike.md#t)

#### Inherited from

AbstractDisposableLiftable.T

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

StreamLike.liftableStateType

#### Inherited from

AbstractDisposableLiftable.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableStateLike](../interfaces/liftable.LiftableStateLike.md).[type](../interfaces/liftable.LiftableStateLike.md#type)

#### Inherited from

AbstractDisposableLiftable.type

## Methods

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
