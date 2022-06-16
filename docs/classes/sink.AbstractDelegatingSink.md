[Reactive-JS](../README.md) / [sink](../modules/sink.md) / AbstractDelegatingSink

# Class: AbstractDelegatingSink<TA, TB\>

[sink](../modules/sink.md).AbstractDelegatingSink

## Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Hierarchy

- [`AbstractSink`](sink.AbstractSink.md)<`TA`\>

  ↳ **`AbstractDelegatingSink`**

## Table of contents

### Constructors

- [constructor](sink.AbstractDelegatingSink.md#constructor)

### Properties

- [assertState](sink.AbstractDelegatingSink.md#assertstate)
- [delegate](sink.AbstractDelegatingSink.md#delegate)

### Methods

- [notify](sink.AbstractDelegatingSink.md#notify)

## Constructors

### constructor

• **new AbstractDelegatingSink**<`TA`, `TB`\>(`delegate`)

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
