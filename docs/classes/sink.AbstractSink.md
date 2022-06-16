[Reactive-JS](../README.md) / [sink](../modules/sink.md) / AbstractSink

# Class: AbstractSink<T\>

[sink](../modules/sink.md).AbstractSink

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposable`](disposable.AbstractDisposable.md)

  ↳ **`AbstractSink`**

## Implements

- [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](sink.AbstractSink.md#constructor)

### Methods

- [assertState](sink.AbstractSink.md#assertstate)
- [notify](sink.AbstractSink.md#notify)

## Constructors

### constructor

• **new AbstractSink**<`T`\>()

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
| `this` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> |

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
