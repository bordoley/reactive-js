[Reactive-JS](../README.md) / [scheduling/PrioritySchedulerLike](../modules/scheduling_PrioritySchedulerLike.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduling/PrioritySchedulerLike](../modules/scheduling_PrioritySchedulerLike.md).PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

- [`DisposableLike`](util_DisposableLike.DisposableLike.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[SchedulerLike\_requestYield]](scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling_PrioritySchedulerLike.PrioritySchedulerLike.md#[schedulerlike_schedule])

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
| `continuation` | [`ContinuationLike`](scheduling_ContinuationLike.ContinuationLike.md) |
| `options` | [`PrioritySchedulerOptions`](../modules/scheduling_PrioritySchedulerLike.md#priorityscheduleroptions) |

#### Returns

`void`
