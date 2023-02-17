[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[scheduling](../modules/scheduling.md).VirtualTimeSchedulerLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

- [`ContinuationLike`](scheduling.ContinuationLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](scheduling.VirtualTimeSchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling.VirtualTimeSchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.VirtualTimeSchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[ContinuationLike\_run]](scheduling.VirtualTimeSchedulerLike.md#[continuationlike_run])
- [[SchedulerLike\_requestYield]](scheduling.VirtualTimeSchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.VirtualTimeSchedulerLike.md#[schedulerlike_schedule])

## Properties

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_inContinuation]](scheduling.SchedulerLike.md#[schedulerlike_incontinuation])

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_now]](scheduling.SchedulerLike.md#[schedulerlike_now])

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_shouldYield]](scheduling.SchedulerLike.md#[schedulerlike_shouldyield])

## Methods

### [ContinuationLike\_run]

▸ **[ContinuationLike_run]**(): `void`

#### Returns

`void`

#### Inherited from

[ContinuationLike](scheduling.ContinuationLike.md).[[ContinuationLike_run]](scheduling.ContinuationLike.md#[continuationlike_run])

___

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_requestYield]](scheduling.SchedulerLike.md#[schedulerlike_requestyield])

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])
