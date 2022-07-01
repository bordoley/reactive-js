[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduler](../modules/scheduler.md).PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Properties

- [inContinuation](scheduler.PrioritySchedulerLike.md#incontinuation)
- [now](scheduler.PrioritySchedulerLike.md#now)
- [shouldYield](scheduler.PrioritySchedulerLike.md#shouldyield)

### Methods

- [requestYield](scheduler.PrioritySchedulerLike.md#requestyield)
- [schedule](scheduler.PrioritySchedulerLike.md#schedule)

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

▸ **requestYield**(`this`): `void`

Request the scheduler to yield.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PrioritySchedulerLike`](scheduler.PrioritySchedulerLike.md) |

#### Returns

`void`

___

### schedule

▸ **schedule**(`this`, `continuation`, `options`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`PrioritySchedulerLike`](scheduler.PrioritySchedulerLike.md) | - |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options` | `Object` | - |
| `options.delay?` | `number` | - |
| `options.priority` | `number` | - |

#### Returns

`void`
