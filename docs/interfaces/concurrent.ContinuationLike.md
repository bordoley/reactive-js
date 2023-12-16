[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ContinuationLike

# Interface: ContinuationLike

[concurrent](../modules/concurrent.md).ContinuationLike

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

- [`QueueableLike`](utils.QueueableLike.md)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

- [`CollectionLike`](collections.CollectionLike.md)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

  ↳ **`ContinuationLike`**

## Table of contents

### Properties

- [[ContinuationLike\_activeChild]](concurrent.ContinuationLike.md#[continuationlike_activechild])
- [[ContinuationLike\_parent]](concurrent.ContinuationLike.md#[continuationlike_parent])
- [[ContinuationLike\_scheduler]](concurrent.ContinuationLike.md#[continuationlike_scheduler])

### Methods

- [[ContinuationLike\_run]](concurrent.ContinuationLike.md#[continuationlike_run])
- [[ContinuationLike\_yield]](concurrent.ContinuationLike.md#[continuationlike_yield])

## Properties

### [ContinuationLike\_activeChild]

• `Readonly` **[ContinuationLike\_activeChild]**: [`Optional`](../modules/functions.md#optional)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

___

### [ContinuationLike\_parent]

• **[ContinuationLike\_parent]**: [`Optional`](../modules/functions.md#optional)<[`ContinuationLike`](concurrent.ContinuationLike.md)\>

___

### [ContinuationLike\_scheduler]

• `Readonly` **[ContinuationLike\_scheduler]**: [`ContinuationSchedulerLike`](concurrent.ContinuationSchedulerLike.md)

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
