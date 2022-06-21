[Reactive-JS](../README.md) / [observable](../modules/observable.md) / Observer

# Class: Observer<T\>

[observable](../modules/observable.md).Observer

Abstract base class for implementing the `ObserverLike` interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposable`](disposable.AbstractDisposable.md)

  ↳ **`Observer`**

## Implements

- [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\>
- [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

## Table of contents

### Constructors

- [constructor](observable.Observer.md#constructor)

### Properties

- [inContinuation](observable.Observer.md#incontinuation)
- [scheduler](observable.Observer.md#scheduler)

### Methods

- [assertState](observable.Observer.md#assertstate)
- [notify](observable.Observer.md#notify)

## Constructors

### constructor

• **new Observer**<`T`\>(`scheduler`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Overrides

[AbstractDisposable](disposable.AbstractDisposable.md).[constructor](disposable.AbstractDisposable.md#constructor)

## Properties

### inContinuation

• **inContinuation**: `boolean`

#### Implementation of

[SchedulerLike](../interfaces/scheduler.SchedulerLike.md).[inContinuation](../interfaces/scheduler.SchedulerLike.md#incontinuation)

___

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

## Methods

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Observer`](observable.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[assertState](../interfaces/sink.SinkLike.md#assertstate)

___

### notify

▸ **notify**(`_`): `void`

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `T` |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[notify](../interfaces/sink.SinkLike.md#notify)
