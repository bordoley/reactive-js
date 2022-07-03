[Reactive-JS](../README.md) / [runnableSink](../modules/runnableSink.md) / RunnableSink

# Class: RunnableSink<T\>

[runnableSink](../modules/runnableSink.md).RunnableSink

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`RunnableSink`**

  ↳↳ [`AbstractDelegatingRunnableSink`](runnableSink.AbstractDelegatingRunnableSink.md)

## Implements

- [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\>

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

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[constructor](container.AbstractDisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[SinkLike](../interfaces/source.SinkLike.md).[T](../interfaces/source.SinkLike.md#t)

#### Inherited from

AbstractDisposableContainer.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[SinkLike](../interfaces/source.SinkLike.md).[TContainerOf](../interfaces/source.SinkLike.md#tcontainerof)

#### Inherited from

AbstractDisposableContainer.TContainerOf

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

SinkLike.error

#### Inherited from

AbstractDisposableContainer.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

SinkLike.isDisposed

#### Inherited from

AbstractDisposableContainer.isDisposed

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

[SinkLike](../interfaces/source.SinkLike.md).[add](../interfaces/source.SinkLike.md#add)

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[add](container.AbstractDisposableContainer.md#add)

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

[SinkLike](../interfaces/source.SinkLike.md).[assertState](../interfaces/source.SinkLike.md#assertstate)

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

[SinkLike](../interfaces/source.SinkLike.md).[dispose](../interfaces/source.SinkLike.md#dispose)

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[dispose](container.AbstractDisposableContainer.md#dispose)

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

[SinkLike](../interfaces/source.SinkLike.md).[notify](../interfaces/source.SinkLike.md#notify)
