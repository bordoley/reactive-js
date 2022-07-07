[Reactive-JS](../README.md) / [observer](../modules/observer.md) / ObserverLike

# Interface: ObserverLike<T\>

[observer](../modules/observer.md).ObserverLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\>

  ↳ **`ObserverLike`**

## Table of contents

### Properties

- [dispatcher](observer.ObserverLike.md#dispatcher)
- [error](observer.ObserverLike.md#error)
- [isDisposed](observer.ObserverLike.md#isdisposed)
- [scheduler](observer.ObserverLike.md#scheduler)

### Methods

- [add](observer.ObserverLike.md#add)
- [dispose](observer.ObserverLike.md#dispose)
- [notify](observer.ObserverLike.md#notify)

## Properties

### dispatcher

• `Readonly` **dispatcher**: [`DispatcherLike`](dispatcher.DispatcherLike.md)<`T`\>

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[ReactiveSinkLike](reactiveSink.ReactiveSinkLike.md).[error](reactiveSink.ReactiveSinkLike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[ReactiveSinkLike](reactiveSink.ReactiveSinkLike.md).[isDisposed](reactiveSink.ReactiveSinkLike.md#isdisposed)

___

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](scheduler.SchedulerLike.md)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObserverLike`](observer.ObserverLike.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[ReactiveSinkLike](reactiveSink.ReactiveSinkLike.md).[add](reactiveSink.ReactiveSinkLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ObserverLike`](observer.ObserverLike.md)<`T`\> | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[ReactiveSinkLike](reactiveSink.ReactiveSinkLike.md).[dispose](reactiveSink.ReactiveSinkLike.md#dispose)

___

### notify

▸ **notify**(`this`, `next`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ObserverLike`](observer.ObserverLike.md)<`T`\> | - |
| `next` | `T` | The next notification value. |

#### Returns

`void`

#### Inherited from

[ReactiveSinkLike](reactiveSink.ReactiveSinkLike.md).[notify](reactiveSink.ReactiveSinkLike.md#notify)
