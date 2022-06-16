[Reactive-JS](../README.md) / [sink](../modules/sink.md) / AbstractAutoDisposingDelegatingSink

# Class: AbstractAutoDisposingDelegatingSink<TA, TB\>

[sink](../modules/sink.md).AbstractAutoDisposingDelegatingSink

## Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Hierarchy

- [`AbstractSink`](sink.AbstractSink.md)<`TA`\>

  ↳ **`AbstractAutoDisposingDelegatingSink`**

## Table of contents

### Constructors

- [constructor](sink.AbstractAutoDisposingDelegatingSink.md#constructor)

### Properties

- [assertState](sink.AbstractAutoDisposingDelegatingSink.md#assertstate)
- [delegate](sink.AbstractAutoDisposingDelegatingSink.md#delegate)

### Methods

- [notify](sink.AbstractAutoDisposingDelegatingSink.md#notify)

## Constructors

### constructor

• **new AbstractAutoDisposingDelegatingSink**<`TA`, `TB`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`TB`\> |

#### Overrides

[AbstractSink](sink.AbstractSink.md).[constructor](sink.AbstractSink.md#constructor)

## Properties

### assertState

• **assertState**: (...`_args`: `unknown`[]) => `void`

#### Type declaration

▸ (...`_args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `unknown`[] |

##### Returns

`void`

#### Inherited from

[AbstractSink](sink.AbstractSink.md).[assertState](sink.AbstractSink.md#assertstate)

___

### delegate

• `Readonly` **delegate**: [`SinkLike`](../interfaces/sink.SinkLike.md)<`TB`\>

## Methods

### notify

▸ **notify**(`_`): `void`

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `TA` |

#### Returns

`void`

#### Inherited from

[AbstractSink](sink.AbstractSink.md).[notify](sink.AbstractSink.md#notify)
