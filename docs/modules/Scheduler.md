[Reactive-JS](../README.md) / Scheduler

# Module: Scheduler

## Table of contents

### Functions

- [createHostScheduler](Scheduler.md#createhostscheduler)
- [createVirtualTimeScheduler](Scheduler.md#createvirtualtimescheduler)
- [toPausableScheduler](Scheduler.md#topausablescheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](../interfaces/types.VirtualTimeSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](../interfaces/types.VirtualTimeSchedulerLike.md)

___

### toPausableScheduler

▸ **toPausableScheduler**(`a`): [`PauseableSchedulerLike`](../interfaces/types.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/types.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)
