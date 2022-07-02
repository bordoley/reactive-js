[Reactive-JS](../README.md) / [observer](../modules/observer.md) / Observer

# Class: Observer<T\>

[observer](../modules/observer.md).Observer

Abstract base class for implementing the `ObserverLike` interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`Observer`**

  ↳↳ [`AbstractDelegatingObserver`](observer.AbstractDelegatingObserver.md)

## Implements

- [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observer.Observer.md#constructor)

### Properties

- [scheduler](observer.Observer.md#scheduler)

### Accessors

- [T](observer.Observer.md#t)
- [dispatcher](observer.Observer.md#dispatcher)
- [error](observer.Observer.md#error)
- [isDisposed](observer.Observer.md#isdisposed)
- [type](observer.Observer.md#type)

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

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[constructor](container.AbstractDisposableContainer.md#constructor)

## Properties

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

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

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SinkLike](../interfaces/source.SinkLike.md).[type](../interfaces/source.SinkLike.md#type)

#### Inherited from

AbstractDisposableContainer.type

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

[SinkLike](../interfaces/source.SinkLike.md).[add](../interfaces/source.SinkLike.md#add)

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[add](container.AbstractDisposableContainer.md#add)

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

[SinkLike](../interfaces/source.SinkLike.md).[assertState](../interfaces/source.SinkLike.md#assertstate)

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
