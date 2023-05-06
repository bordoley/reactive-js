[Reactive-JS](../README.md) / util/Scheduler

# Module: util/Scheduler

## Table of contents

### Functions

- [createHostScheduler](util_Scheduler.md#createhostscheduler)
- [createVirtualTimeScheduler](util_Scheduler.md#createvirtualtimescheduler)
- [toPausableScheduler](util_Scheduler.md#topausablescheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/util.SchedulerLike.md) & [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/util.SchedulerLike.md) & [`DisposableLike`](../interfaces/util.DisposableLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](../interfaces/util.VirtualTimeSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](../interfaces/util.VirtualTimeSchedulerLike.md)

___

### toPausableScheduler

▸ **toPausableScheduler**(`a`): [`PauseableSchedulerLike`](../interfaces/util.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/util.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/util.DisposableLike.md)
