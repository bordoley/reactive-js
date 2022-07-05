[Reactive-JS](../README.md) / [reactiveSink](../modules/reactiveSink.md) / ReactiveSinkLike

# Interface: ReactiveSinkLike<T\>

[reactiveSink](../modules/reactiveSink.md).ReactiveSinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`ReactiveSinkLike`**

## Implemented by

- [`Observer`](../classes/observer.Observer.md)
- [`RunnableSink`](../classes/runnableSink.RunnableSink.md)

## Table of contents

### Properties

- [T](reactiveSink.ReactiveSinkLike.md#t)
- [TContainerOf](reactiveSink.ReactiveSinkLike.md#tcontainerof)

### Accessors

- [error](reactiveSink.ReactiveSinkLike.md#error)
- [isDisposed](reactiveSink.ReactiveSinkLike.md#isdisposed)

### Methods

- [add](reactiveSink.ReactiveSinkLike.md#add)
- [assertState](reactiveSink.ReactiveSinkLike.md#assertstate)
- [dispose](reactiveSink.ReactiveSinkLike.md#dispose)
- [notify](reactiveSink.ReactiveSinkLike.md#notify)

## Properties

### T

• **T**: `T`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[TContainerOf](container.ContainerLike.md#tcontainerof)

## Accessors

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

#### Inherited from

Disposable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

Disposable.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[add](../classes/disposable.Disposable.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> |

#### Returns

`void`

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)

___

### notify

▸ **notify**(`this`, `next`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> | - |
| `next` | `T` | The next notification value. |

#### Returns

`void`
