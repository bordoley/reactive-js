[Reactive-JS](../README.md) / [observer](../modules/observer.md) / Observer

# Class: Observer<T\>

[observer](../modules/observer.md).Observer

Abstract base class for implementing the `ObserverLike` interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`Observer`**

## Implements

- [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observer.Observer.md#constructor)

### Properties

- [scheduler](observer.Observer.md#scheduler)

### Accessors

- [TLiftableContainerStateType](observer.Observer.md#tliftablecontainerstatetype)
- [dispatcher](observer.Observer.md#dispatcher)
- [error](observer.Observer.md#error)
- [isDisposed](observer.Observer.md#isdisposed)

### Methods

- [add](observer.Observer.md#add)
- [assertState](observer.Observer.md#assertstate)
- [dispose](observer.Observer.md#dispose)
- [notify](observer.Observer.md#notify)

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

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Properties

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

## Accessors

### TLiftableContainerStateType

• `get` **TLiftableContainerStateType**(): ``0``

#### Returns

``0``

#### Implementation of

[ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md).[TLiftableContainerStateType](../interfaces/reactiveSink.ReactiveSinkLike.md#tliftablecontainerstatetype)

___

### dispatcher

• `get` **dispatcher**(): [`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

#### Returns

[`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

ReactiveSinkLike.error

#### Inherited from

Disposable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

ReactiveSinkLike.isDisposed

#### Inherited from

Disposable.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Observer`](observer.Observer.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

[ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md).[add](../interfaces/reactiveSink.ReactiveSinkLike.md#add)

#### Inherited from

[Disposable](disposable.Disposable.md).[add](disposable.Disposable.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md).[assertState](../interfaces/reactiveSink.ReactiveSinkLike.md#assertstate)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Observer`](observer.Observer.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

[ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md).[dispose](../interfaces/reactiveSink.ReactiveSinkLike.md#dispose)

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

[ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md).[notify](../interfaces/reactiveSink.ReactiveSinkLike.md#notify)
