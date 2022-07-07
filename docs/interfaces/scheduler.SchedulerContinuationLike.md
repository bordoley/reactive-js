[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerContinuationLike

# Interface: SchedulerContinuationLike

[scheduler](../modules/scheduler.md).SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`SchedulerContinuationLike`**

## Table of contents

### Methods

- [continue](scheduler.SchedulerContinuationLike.md#continue)

## Methods

### continue

▸ **continue**(`this`): `void`

Work function to be invoked by the scheduler after the specified delay.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) |

#### Returns

`void`
