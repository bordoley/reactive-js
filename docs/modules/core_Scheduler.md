[Reactive-JS](../README.md) / core/Scheduler

# Module: core/Scheduler

## Table of contents

### Functions

- [createHostScheduler](core_Scheduler.md#createhostscheduler)
- [createVirtualTimeScheduler](core_Scheduler.md#createvirtualtimescheduler)
- [toPausableScheduler](core_Scheduler.md#topausablescheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/core.SchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/core.SchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](../interfaces/core.VirtualTimeSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](../interfaces/core.VirtualTimeSchedulerLike.md)

___

### toPausableScheduler

▸ **toPausableScheduler**(`a`): [`PauseableSchedulerLike`](../interfaces/core.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/core.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)
