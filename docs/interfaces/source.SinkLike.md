[Reactive-JS](../README.md) / [source](../modules/source.md) / SinkLike

# Interface: SinkLike<T\>

[source](../modules/source.md).SinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`LiftableStateLike`](liftable.LiftableStateLike.md)

  ↳ **`SinkLike`**

## Implemented by

- [`Observer`](../classes/observer.Observer.md)
- [`RunnableSink`](../classes/runnableSink.RunnableSink.md)

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

[LiftableStateLike](liftable.LiftableStateLike.md).[T](liftable.LiftableStateLike.md#t)

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[LiftableStateLike](liftable.LiftableStateLike.md).[error](liftable.LiftableStateLike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[LiftableStateLike](liftable.LiftableStateLike.md).[isDisposed](liftable.LiftableStateLike.md#isdisposed)

___

### type

• `Optional` `Readonly` **type**: `unknown`

#### Inherited from

[LiftableStateLike](liftable.LiftableStateLike.md).[type](liftable.LiftableStateLike.md#type)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](source.SinkLike.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[LiftableStateLike](liftable.LiftableStateLike.md).[add](liftable.LiftableStateLike.md#add)

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

[LiftableStateLike](liftable.LiftableStateLike.md).[dispose](liftable.LiftableStateLike.md#dispose)

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
