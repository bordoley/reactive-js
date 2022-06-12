[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerContinuationLike

# Interface: SchedulerContinuationLike

[scheduler](../modules/scheduler.md).SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`SchedulerContinuationLike`**

## Table of contents

### Methods

- [addListener](scheduler.SchedulerContinuationLike.md#addlistener)
- [continue](scheduler.SchedulerContinuationLike.md#continue)
- [removeListener](scheduler.SchedulerContinuationLike.md#removelistener)

## Methods

### addListener

▸ **addListener**(`ev`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | ``"onRunStatusChanged"`` |
| `listener` | [`SchedulerContinuationRunStatusChangedListenerLike`](scheduler.SchedulerContinuationRunStatusChangedListenerLike.md) |

#### Returns

`void`

___

### continue

▸ **continue**(): `void`

Work function to be invoked by the scheduler after the specified delay.

#### Returns

`void`

___

### removeListener

▸ **removeListener**(`ev`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | ``"onRunStatusChanged"`` |
| `listener` | [`SchedulerContinuationRunStatusChangedListenerLike`](scheduler.SchedulerContinuationRunStatusChangedListenerLike.md) |

#### Returns

`void`
