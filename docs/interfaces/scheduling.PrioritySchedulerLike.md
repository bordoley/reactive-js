[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduling](../modules/scheduling.md).PrioritySchedulerLike

A scheduler that support priority scheduling based upon priority.

Lower priority values indicate higher priority.

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Methods

- [[\_\_\_SchedulerLike\_schedule]](scheduling.PrioritySchedulerLike.md#[___schedulerlike_schedule])

## Methods

### [\_\_\_SchedulerLike\_schedule]

▸ **[___SchedulerLike_schedule]**(`continuation`, `options?`): [`DisposableLike`](util.DisposableLike.md)

Schedule a continuation on the Scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `continuation` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ContinuationContextLike`](scheduling.ContinuationContextLike.md)\> | The continuation to run on the scheduler. |
| `options?` | `Object` |  |
| `options.delay?` | `number` | The amount of time in ms to delay execution of the continuation. |
| `options.priority?` | `number` | The priority to execute the continuation with. The default behavior is implementation specific. |

#### Returns

[`DisposableLike`](util.DisposableLike.md)

#### Overrides

[SchedulerLike](scheduling.SchedulerLike.md).[[___SchedulerLike_schedule]](scheduling.SchedulerLike.md#[___schedulerlike_schedule])
