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

## Implements

- [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)
- [`StreamLike`](../interfaces/stream.StreamLike.md)<`void`, `T`\>

## Table of contents

### Constructors

- [constructor](asyncEnumerator.AsyncEnumerator.md#constructor)

### Properties

- [op](asyncEnumerator.AsyncEnumerator.md#op)
- [scheduler](asyncEnumerator.AsyncEnumerator.md#scheduler)

### Accessors

- [T](asyncEnumerator.AsyncEnumerator.md#t)
- [liftableStateType](asyncEnumerator.AsyncEnumerator.md#liftablestatetype)
- [observerCount](asyncEnumerator.AsyncEnumerator.md#observercount)
- [replay](asyncEnumerator.AsyncEnumerator.md#replay)
- [type](asyncEnumerator.AsyncEnumerator.md#type)

### Methods

- [dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)
- [sink](asyncEnumerator.AsyncEnumerator.md#sink)

## Constructors

### constructor

• **new AsyncEnumerator**<`T`\>(`op`, `scheduler`, `replay`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ObservableOperator`](../modules/observable.md#observableoperator)<`void`, `T`\> |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `replay` | `number` |

#### Overrides

[AbstractDisposableLiftable](liftable.AbstractDisposableLiftable.md).[constructor](liftable.AbstractDisposableLiftable.md#constructor)

## Properties

### op

• `Readonly` **op**: [`ObservableOperator`](../modules/observable.md#observableoperator)<`void`, `T`\>

___

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

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

▸ **dispatch**(`req`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `void` |

#### Returns

`void`

#### Implementation of

StreamLike.dispatch

___

### sink

▸ **sink**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

StreamLike.sink
