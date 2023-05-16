[Reactive-JS](../README.md) / [Scheduler](../modules/Scheduler.md) / SchedulerModule

# Interface: SchedulerModule

[Scheduler](../modules/Scheduler.md).SchedulerModule

## Table of contents

### Methods

- [createHostScheduler](Scheduler.SchedulerModule.md#createhostscheduler)
- [createPausableScheduler](Scheduler.SchedulerModule.md#createpausablescheduler)
- [createVirtualTimeScheduler](Scheduler.SchedulerModule.md#createvirtualtimescheduler)

## Methods

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)

___

### createPausableScheduler

▸ **createPausableScheduler**(`hostScheduler`): [`PauseableSchedulerLike`](types.PauseableSchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](types.PauseableSchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)

___

### createVirtualTimeScheduler

▸ **createVirtualTimeScheduler**(`options?`): [`VirtualTimeSchedulerLike`](types.VirtualTimeSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxMicroTaskTicks?` | `number` |

#### Returns

[`VirtualTimeSchedulerLike`](types.VirtualTimeSchedulerLike.md)
