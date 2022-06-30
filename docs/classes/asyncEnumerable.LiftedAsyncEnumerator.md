[Reactive-JS](../README.md) / [asyncEnumerable](../modules/asyncEnumerable.md) / LiftedAsyncEnumerator

# Class: LiftedAsyncEnumerator<T\>

[asyncEnumerable](../modules/asyncEnumerable.md).LiftedAsyncEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AsyncEnumerator`](asyncEnumerator.AsyncEnumerator.md)<`T`\>

  ↳ **`LiftedAsyncEnumerator`**

## Table of contents

### Constructors

- [constructor](asyncEnumerable.LiftedAsyncEnumerator.md#constructor)

### Properties

- [isEnumerable](asyncEnumerable.LiftedAsyncEnumerator.md#isenumerable)
- [op](asyncEnumerable.LiftedAsyncEnumerator.md#op)
- [scheduler](asyncEnumerable.LiftedAsyncEnumerator.md#scheduler)

### Accessors

- [T](asyncEnumerable.LiftedAsyncEnumerator.md#t)
- [liftableStateType](asyncEnumerable.LiftedAsyncEnumerator.md#liftablestatetype)
- [observerCount](asyncEnumerable.LiftedAsyncEnumerator.md#observercount)
- [replay](asyncEnumerable.LiftedAsyncEnumerator.md#replay)
- [type](asyncEnumerable.LiftedAsyncEnumerator.md#type)

### Methods

- [dispatch](asyncEnumerable.LiftedAsyncEnumerator.md#dispatch)
- [sink](asyncEnumerable.LiftedAsyncEnumerator.md#sink)

## Constructors

### constructor

• **new LiftedAsyncEnumerator**<`T`\>(`op`, `scheduler`, `replay`)

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

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[constructor](asyncEnumerator.AsyncEnumerator.md#constructor)

## Properties

### isEnumerable

• `Optional` **isEnumerable**: ``false``

#### Inherited from

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[isEnumerable](asyncEnumerator.AsyncEnumerator.md#isenumerable)

___

### op

• `Readonly` **op**: [`ObservableOperator`](../modules/observable.md#observableoperator)<`void`, `T`\>

___

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[scheduler](asyncEnumerator.AsyncEnumerator.md#scheduler)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

AsyncEnumerator.T

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Inherited from

AsyncEnumerator.liftableStateType

___

### observerCount

• `get` **observerCount**(): `number`

#### Returns

`number`

#### Overrides

AsyncEnumerator.observerCount

___

### replay

• `get` **replay**(): `number`

#### Returns

`number`

#### Overrides

AsyncEnumerator.replay

___

### type

• `get` **type**(): `this`

#### Returns

`this`

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

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)

___

### sink

▸ **sink**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[sink](asyncEnumerator.AsyncEnumerator.md#sink)
