[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / Sink

# Class: Sink<T\>

[runnable](../modules/runnable.md).Sink

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`Sink`**

## Implements

- [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](runnable.Sink.md#constructor)

### Accessors

- [T](runnable.Sink.md#t)
- [type](runnable.Sink.md#type)

### Methods

- [assertState](runnable.Sink.md#assertstate)
- [notify](runnable.Sink.md#notify)

## Constructors

### constructor

• **new Sink**<`T`\>()

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
| `this` | [`Sink`](runnable.Sink.md)<`T`\> |

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
