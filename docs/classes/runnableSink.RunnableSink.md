[Reactive-JS](../README.md) / [runnableSink](../modules/runnableSink.md) / RunnableSink

# Class: RunnableSink<T\>

[runnableSink](../modules/runnableSink.md).RunnableSink

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`RunnableSink`**

## Implements

- [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](runnableSink.RunnableSink.md#constructor)

### Accessors

- [T](runnableSink.RunnableSink.md#t)
- [TContainerOf](runnableSink.RunnableSink.md#tcontainerof)
- [error](runnableSink.RunnableSink.md#error)
- [isDisposed](runnableSink.RunnableSink.md#isdisposed)

### Methods

- [add](runnableSink.RunnableSink.md#add)
- [assertState](runnableSink.RunnableSink.md#assertstate)
- [dispose](runnableSink.RunnableSink.md#dispose)
- [notify](runnableSink.RunnableSink.md#notify)

## Constructors

### constructor

• **new RunnableSink**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Accessors

### T

• `get` **T**(): `T`

#### Returns

`T`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[T](../interfaces/sink.SinkLike.md#t)

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[TContainerOf](../interfaces/sink.SinkLike.md#tcontainerof)

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

SinkLike.error

#### Inherited from

Disposable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

SinkLike.isDisposed

#### Inherited from

Disposable.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RunnableSink`](runnableSink.RunnableSink.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[add](../interfaces/sink.SinkLike.md#add)

#### Inherited from

[Disposable](disposable.Disposable.md).[add](disposable.Disposable.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RunnableSink`](runnableSink.RunnableSink.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[assertState](../interfaces/sink.SinkLike.md#assertstate)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`RunnableSink`](runnableSink.RunnableSink.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[dispose](../interfaces/sink.SinkLike.md#dispose)

#### Inherited from

[Disposable](disposable.Disposable.md).[dispose](disposable.Disposable.md#dispose)

___

### notify

▸ **notify**(`_`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `T` |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/sink.SinkLike.md).[notify](../interfaces/sink.SinkLike.md#notify)
