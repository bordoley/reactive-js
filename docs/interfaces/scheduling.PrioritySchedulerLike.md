[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduling](../modules/scheduling.md).PrioritySchedulerLike

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Methods

- [[SchedulerLike\_schedule]](scheduling.PrioritySchedulerLike.md#[schedulerlike_schedule])

## Methods

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): [`DisposableLike`](util.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ContinuationContextLike`](scheduling.ContinuationContextLike.md)\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.priority?` | `number` |

#### Returns

[`DisposableLike`](util.DisposableLike.md)

#### Overrides

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])
