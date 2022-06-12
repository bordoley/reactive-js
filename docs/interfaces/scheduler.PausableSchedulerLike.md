[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / PausableSchedulerLike

# Interface: PausableSchedulerLike

[scheduler](../modules/scheduler.md).PausableSchedulerLike

## Hierarchy

- [`SchedulerLike`](scheduler.SchedulerLike.md)

  ↳ **`PausableSchedulerLike`**

## Table of contents

### Properties

- [inContinuation](scheduler.PausableSchedulerLike.md#incontinuation)
- [now](scheduler.PausableSchedulerLike.md#now)
- [shouldYield](scheduler.PausableSchedulerLike.md#shouldyield)

### Methods

- [pause](scheduler.PausableSchedulerLike.md#pause)
- [requestYield](scheduler.PausableSchedulerLike.md#requestyield)
- [resume](scheduler.PausableSchedulerLike.md#resume)
- [schedule](scheduler.PausableSchedulerLike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[inContinuation](scheduler.SchedulerLike.md#incontinuation)

___

### now

• `Readonly` **now**: `number`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[now](scheduler.SchedulerLike.md#now)

___

### shouldYield

• `Readonly` **shouldYield**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[shouldYield](scheduler.SchedulerLike.md#shouldyield)

## Methods

### pause

▸ **pause**(): `void`

#### Returns

`void`

___

### requestYield

▸ **requestYield**(): `void`

Request the scheduler to yield.

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[requestYield](scheduler.SchedulerLike.md#requestyield)

___

### resume

▸ **resume**(): `void`

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

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[schedule](scheduler.SchedulerLike.md#schedule)
