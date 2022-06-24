[Reactive-JS](../README.md) / [observable](../modules/observable.md) / Observer

# Class: Observer<T\>

[observable](../modules/observable.md).Observer

Abstract base class for implementing the `ObserverLike` interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`Observer`**

## Implements

- [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.Observer.md#constructor)

### Properties

- [scheduler](observable.Observer.md#scheduler)

### Accessors

- [T](observable.Observer.md#t)
- [type](observable.Observer.md#type)

### Methods

- [assertState](observable.Observer.md#assertstate)
- [notify](observable.Observer.md#notify)

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

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SinkLike](../interfaces/source.SinkLike.md).[type](../interfaces/source.SinkLike.md#type)

#### Inherited from

AbstractDisposableContainer.type

## Methods

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Observer`](observable.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/source.SinkLike.md).[assertState](../interfaces/source.SinkLike.md#assertstate)

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
