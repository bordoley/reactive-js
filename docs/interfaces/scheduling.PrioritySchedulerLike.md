[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduling](../modules/scheduling.md).PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Methods

- [[SchedulerLike\_schedule]](scheduling.PrioritySchedulerLike.md#[schedulerlike_schedule])

## Methods

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.priority?` | `number` |

#### Returns

`void`

#### Overrides

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])
