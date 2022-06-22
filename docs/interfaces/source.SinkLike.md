[Reactive-JS](../README.md) / [source](../modules/source.md) / SinkLike

# Interface: SinkLike<T\>

[source](../modules/source.md).SinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`LiftedStateLike`](liftable.LiftedStateLike.md)

  ↳ **`SinkLike`**

## Implemented by

- [`Observer`](../classes/observable.Observer.md)
- [`Sink`](../classes/runnable.Sink.md)

## Table of contents

### Properties

- [T](source.SinkLike.md#t)
- [error](source.SinkLike.md#error)
- [isDisposed](source.SinkLike.md#isdisposed)
- [type](source.SinkLike.md#type)

### Methods

- [add](source.SinkLike.md#add)
- [assertState](source.SinkLike.md#assertstate)
- [dispose](source.SinkLike.md#dispose)
- [notify](source.SinkLike.md#notify)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftedStateLike](liftable.LiftedStateLike.md).[T](liftable.LiftedStateLike.md#t)

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[LiftedStateLike](liftable.LiftedStateLike.md).[error](liftable.LiftedStateLike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[LiftedStateLike](liftable.LiftedStateLike.md).[isDisposed](liftable.LiftedStateLike.md#isdisposed)

___

### type

• `Optional` `Readonly` **type**: `unknown`

#### Inherited from

[LiftedStateLike](liftable.LiftedStateLike.md).[type](liftable.LiftedStateLike.md#type)

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

[LiftedStateLike](liftable.LiftedStateLike.md).[add](liftable.LiftedStateLike.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](source.SinkLike.md)<`T`\> |

#### Returns

`void`

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

[LiftedStateLike](liftable.LiftedStateLike.md).[dispose](liftable.LiftedStateLike.md#dispose)

___

### notify

▸ **notify**(`this`, `next`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`SinkLike`](source.SinkLike.md)<`T`\> | - |
| `next` | `T` | The next notification value. |

#### Returns

`void`
