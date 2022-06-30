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
- [liftableStateType](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#liftablestatetype)
- [observerCount](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#observercount)
- [replay](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#replay)
- [scheduler](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#scheduler)
- [type](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#type)

### Methods

- [dispatch](asyncEnumerator.AbstractDelegatingAsyncEnumerator.md#dispatch)
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

[StreamLike](../interfaces/stream.StreamLike.md).[scheduler](../interfaces/stream.StreamLike.md#scheduler)

#### Overrides

AsyncEnumerator.scheduler

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

StreamLike.type

#### Inherited from

AsyncEnumerator.type

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

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)

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
