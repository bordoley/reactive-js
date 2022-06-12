[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerLike

# Interface: SchedulerLike

[scheduler](../modules/scheduler.md).SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

- **`SchedulerLike`**

  ↳ [`ObserverLike`](observable.ObserverLike.md)

  ↳ [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md)

  ↳ [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [inContinuation](scheduler.SchedulerLike.md#incontinuation)
- [now](scheduler.SchedulerLike.md#now)
- [shouldYield](scheduler.SchedulerLike.md#shouldyield)

### Methods

- [requestYield](scheduler.SchedulerLike.md#requestyield)
- [schedule](scheduler.SchedulerLike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: `boolean`

___

### now

• `Readonly` **now**: `number`

___

### shouldYield

• `Readonly` **shouldYield**: `boolean`

## Methods

### requestYield

▸ **requestYield**(): `void`

Request the scheduler to yield.

#### Returns

`void`

___

### schedule

▸ **schedule**(`continuation`, `options?`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

`void`
