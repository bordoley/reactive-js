[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ContinuationLike

# Interface: ContinuationLike

[concurrent](../modules/concurrent.md).ContinuationLike

An interface for types that support buffering items with backpressure.

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

- [`QueueableLike`](utils.QueueableLike.md)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

- [`CollectionLike`](collections.CollectionLike.md)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

  ↳ **`ContinuationLike`**

## Table of contents

### Properties

- [[CollectionLike\_count]](concurrent.ContinuationLike.md#[collectionlike_count])
- [[ContinuationLike\_activeChild]](concurrent.ContinuationLike.md#[continuationlike_activechild])
- [[ContinuationLike\_parent]](concurrent.ContinuationLike.md#[continuationlike_parent])
- [[ContinuationLike\_scheduler]](concurrent.ContinuationLike.md#[continuationlike_scheduler])
- [[DisposableLike\_error]](concurrent.ContinuationLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](concurrent.ContinuationLike.md#[disposablelike_isdisposed])
- [[QueueableLike\_backpressureStrategy]](concurrent.ContinuationLike.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](concurrent.ContinuationLike.md#[queueablelike_capacity])

### Methods

- [[ContinuationLike\_run]](concurrent.ContinuationLike.md#[continuationlike_run])
- [[ContinuationLike\_yield]](concurrent.ContinuationLike.md#[continuationlike_yield])
- [[DisposableLike\_add]](concurrent.ContinuationLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](concurrent.ContinuationLike.md#[disposablelike_dispose])
- [[QueueableLike\_enqueue]](concurrent.ContinuationLike.md#[queueablelike_enqueue])

## Properties

### [CollectionLike\_count]

• `Readonly` **[CollectionLike\_count]**: `number`

#### Inherited from

[CollectionLike](collections.CollectionLike.md).[[CollectionLike_count]](collections.CollectionLike.md#[collectionlike_count])

___

### [ContinuationLike\_activeChild]

• `Readonly` **[ContinuationLike\_activeChild]**: [`Optional`](../modules/functions.md#optional)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

___

### [ContinuationLike\_parent]

• **[ContinuationLike\_parent]**: [`Optional`](../modules/functions.md#optional)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

___

### [ContinuationLike\_scheduler]

• `Readonly` **[ContinuationLike\_scheduler]**: [`ContinuationSchedulerLike`](concurrent.ContinuationSchedulerLike.md)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_error]](utils.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_isDisposed]](utils.DisposableLike.md#[disposablelike_isdisposed])

___

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_backpressureStrategy]](utils.QueueableLike.md#[queueablelike_backpressurestrategy])

___

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_capacity]](utils.QueueableLike.md#[queueablelike_capacity])

## Methods

### [ContinuationLike\_run]

▸ **[ContinuationLike_run]**(): `void`

#### Returns

`void`

___

### [ContinuationLike\_yield]

▸ **[ContinuationLike_yield]**(`delay?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |

#### Returns

`void`

___

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) | The disposable to add. |

#### Returns

`void`

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_add]](utils.DisposableLike.md#[disposablelike_add])

▸ **[DisposableLike_add]**(`teardown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\> |

#### Returns

`void`

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_add]](utils.DisposableLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_dispose]](utils.DisposableLike.md#[disposablelike_dispose])

___

### [QueueableLike\_enqueue]

▸ **[QueueableLike_enqueue]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | [`ContinuationLike`](concurrent.ContinuationLike.md) | The value to enqueue. |

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_enqueue]](utils.QueueableLike.md#[queueablelike_enqueue])
