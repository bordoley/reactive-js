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
- [error](asyncEnumerable.LiftedAsyncEnumerator.md#error)
- [isDisposed](asyncEnumerable.LiftedAsyncEnumerator.md#isdisposed)
- [liftableStateType](asyncEnumerable.LiftedAsyncEnumerator.md#liftablestatetype)
- [observerCount](asyncEnumerable.LiftedAsyncEnumerator.md#observercount)
- [replay](asyncEnumerable.LiftedAsyncEnumerator.md#replay)
- [type](asyncEnumerable.LiftedAsyncEnumerator.md#type)

### Methods

- [add](asyncEnumerable.LiftedAsyncEnumerator.md#add)
- [dispatch](asyncEnumerable.LiftedAsyncEnumerator.md#dispatch)
- [dispose](asyncEnumerable.LiftedAsyncEnumerator.md#dispose)
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

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

AsyncEnumerator.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

AsyncEnumerator.isDisposed

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

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`LiftedAsyncEnumerator`](asyncEnumerable.LiftedAsyncEnumerator.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

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

#### Overrides

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[dispatch](asyncEnumerator.AsyncEnumerator.md#dispatch)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`LiftedAsyncEnumerator`](asyncEnumerable.LiftedAsyncEnumerator.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[AsyncEnumerator](asyncEnumerator.AsyncEnumerator.md).[dispose](asyncEnumerator.AsyncEnumerator.md#dispose)

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
