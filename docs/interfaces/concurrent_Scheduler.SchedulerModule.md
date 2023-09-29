[Reactive-JS](../README.md) / [concurrent/Scheduler](../modules/concurrent_Scheduler.md) / SchedulerModule

# Interface: SchedulerModule

[concurrent/Scheduler](../modules/concurrent_Scheduler.md).SchedulerModule

## Table of contents

### Methods

- [createHostScheduler](concurrent_Scheduler.SchedulerModule.md#createhostscheduler)
- [toPausableScheduler](concurrent_Scheduler.SchedulerModule.md#topausablescheduler)

## Methods

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)

___

### toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`): [`PauseableSchedulerLike`](concurrent.PauseableSchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](concurrent.PauseableSchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)
