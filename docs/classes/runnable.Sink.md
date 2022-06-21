[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / Sink

# Class: Sink<T\>

[runnable](../modules/runnable.md).Sink

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposable`](disposable.AbstractDisposable.md)

  ↳ **`Sink`**

## Implements

- [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](runnable.Sink.md#constructor)

### Methods

- [assertState](runnable.Sink.md#assertstate)
- [notify](runnable.Sink.md#notify)

## Constructors

### constructor

• **new Sink**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbstractDisposable](disposable.AbstractDisposable.md).[constructor](disposable.AbstractDisposable.md#constructor)

## Methods

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Sink`](runnable.Sink.md)<`T`\> |

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
