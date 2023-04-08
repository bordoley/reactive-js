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

- [[\_\_\_PauseableSchedulerLike\_isPaused]](scheduling.PauseableSchedulerLike.md#[___pauseableschedulerlike_ispaused])

### Methods

- [[\_\_\_PauseableSchedulerLike\_pause]](scheduling.PauseableSchedulerLike.md#[___pauseableschedulerlike_pause])
- [[\_\_\_PauseableSchedulerLike\_resume]](scheduling.PauseableSchedulerLike.md#[___pauseableschedulerlike_resume])

## Properties

### [\_\_\_PauseableSchedulerLike\_isPaused]

• `Readonly` **[\_\_\_PauseableSchedulerLike\_isPaused]**: `boolean`

Boolean flag indicating if the scheduler is currently paused or not.

## Methods

### [\_\_\_PauseableSchedulerLike\_pause]

▸ **[___PauseableSchedulerLike_pause]**(): `void`

Imperatively pause the scheduler.

#### Returns

`void`

___

### [\_\_\_PauseableSchedulerLike\_resume]

▸ **[___PauseableSchedulerLike_resume]**(): `void`

Imperatively resume the scheduler.

#### Returns

`void`
