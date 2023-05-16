[Reactive-JS](../README.md) / Scheduler

# Module: Scheduler

## Table of contents

### Interfaces

- [SchedulerModule](../interfaces/Scheduler.SchedulerModule.md)

### Type Aliases

- [Signature](Scheduler.md#signature)

### Functions

- [createHostScheduler](Scheduler.md#createhostscheduler)
- [createPausableScheduler](Scheduler.md#createpausablescheduler)
- [createVirtualTimeScheduler](Scheduler.md#createvirtualtimescheduler)

## Type Aliases

### Signature

Ƭ **Signature**: [`SchedulerModule`](../interfaces/Scheduler.SchedulerModule.md)

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

### createPausableScheduler

▸ **createPausableScheduler**(`hostScheduler`): [`PauseableSchedulerLike`](../interfaces/types.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostScheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/types.PauseableSchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)

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
