[Reactive-JS](../README.md) / concurrent/Scheduler

# Module: concurrent/Scheduler

## Table of contents

### Module Interfaces

- [SchedulerModule](../interfaces/concurrent_Scheduler.SchedulerModule.md)

### Type Aliases

- [Signature](concurrent_Scheduler.md#signature)

### Functions

- [createHostScheduler](concurrent_Scheduler.md#createhostscheduler)
- [toPausableScheduler](concurrent_Scheduler.md#topausablescheduler)

## Type Aliases

### Signature

Ƭ **Signature**: [`SchedulerModule`](../interfaces/concurrent_Scheduler.SchedulerModule.md)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxYieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)

___

### toPausableScheduler

▸ **toPausableScheduler**(`hostScheduler`): [`PauseableSchedulerLike`](../interfaces/concurrent.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/concurrent.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/utils.DisposableLike.md)
