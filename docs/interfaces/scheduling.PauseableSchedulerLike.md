[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PauseableSchedulerLike

# Interface: PauseableSchedulerLike

[scheduling](../modules/scheduling.md).PauseableSchedulerLike

A `SchedulerLike` that supports imperative pausing and resuming
of it's run loop.

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ **`PauseableSchedulerLike`**

## Table of contents

### Properties

- [[PauseableSchedulerLike\_isPaused]](scheduling.PauseableSchedulerLike.md#[pauseableschedulerlike_ispaused])

### Methods

- [[PauseableSchedulerLike\_pause]](scheduling.PauseableSchedulerLike.md#[pauseableschedulerlike_pause])
- [[PauseableSchedulerLike\_resume]](scheduling.PauseableSchedulerLike.md#[pauseableschedulerlike_resume])

## Properties

### [PauseableSchedulerLike\_isPaused]

• `Readonly` **[PauseableSchedulerLike\_isPaused]**: `boolean`

Boolean flag indicating if the scheduler is currently paused or not.

## Methods

### [PauseableSchedulerLike\_pause]

▸ **[PauseableSchedulerLike_pause]**(): `void`

Imperatively pause the scheduler.

#### Returns

`void`

___

### [PauseableSchedulerLike\_resume]

▸ **[PauseableSchedulerLike_resume]**(): `void`

Imperatively resume the scheduler.

#### Returns

`void`
