[Reactive-JS](../README.md) / [sink](../modules/sink.md) / DelegatingSinkLike

# Interface: DelegatingSinkLike<TA, TB\>

[sink](../modules/sink.md).DelegatingSinkLike

## Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Hierarchy

- [`SinkLike`](sink.SinkLike.md)<`TA`\>

  ↳ **`DelegatingSinkLike`**

## Table of contents

### Properties

- [delegate](sink.DelegatingSinkLike.md#delegate)
- [error](sink.DelegatingSinkLike.md#error)
- [isDisposed](sink.DelegatingSinkLike.md#isdisposed)

### Methods

- [add](sink.DelegatingSinkLike.md#add)
- [assertState](sink.DelegatingSinkLike.md#assertstate)
- [dispose](sink.DelegatingSinkLike.md#dispose)
- [notify](sink.DelegatingSinkLike.md#notify)

## Properties

### delegate

• `Readonly` **delegate**: [`SinkLike`](sink.SinkLike.md)<`TB`\>

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[SinkLike](sink.SinkLike.md).[error](sink.SinkLike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SinkLike](sink.SinkLike.md).[isDisposed](sink.SinkLike.md#isdisposed)

## Methods

### add

▸ **add**(`this`, `disposable`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableLike`](disposable.DisposableLike.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |

#### Returns

`void`

`this`

#### Inherited from

[SinkLike](sink.SinkLike.md).[add](sink.SinkLike.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](sink.SinkLike.md)<`TA`\> |

#### Returns

`void`

#### Inherited from

[SinkLike](sink.SinkLike.md).[assertState](sink.SinkLike.md#assertstate)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource. Must be idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`DisposableLike`](disposable.DisposableLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[SinkLike](sink.SinkLike.md).[dispose](sink.SinkLike.md#dispose)

___

### notify

▸ **notify**(`this`, `next`): `void`

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`SinkLike`](sink.SinkLike.md)<`TA`\> | - |
| `next` | `TA` | The next notification value. |

#### Returns

`void`

#### Inherited from

[SinkLike](sink.SinkLike.md).[notify](sink.SinkLike.md#notify)
