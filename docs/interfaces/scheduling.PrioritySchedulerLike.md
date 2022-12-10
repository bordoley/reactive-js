[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduling](../modules/scheduling.md).PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](scheduling.PrioritySchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling.PrioritySchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.PrioritySchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[SchedulerLike\_requestYield]](scheduling.PrioritySchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.PrioritySchedulerLike.md#[schedulerlike_schedule])

## Properties

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

## Methods

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling.ContinuationLike.md) |
| `options` | [`PrioritySchedulerOptions`](../modules/scheduling.md#priorityscheduleroptions) |

#### Returns

`void`
