[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PauseableLike

# Interface: PauseableLike

[concurrent](../modules/concurrent.md).PauseableLike

## Hierarchy

- **`PauseableLike`**

  ↳ [`PauseableSchedulerLike`](concurrent.PauseableSchedulerLike.md)

  ↳ [`PauseableObservableLike`](rx.PauseableObservableLike.md)

## Table of contents

### Properties

- [[PauseableLike\_isPaused]](concurrent.PauseableLike.md#[pauseablelike_ispaused])

### Methods

- [[PauseableLike\_pause]](concurrent.PauseableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](concurrent.PauseableLike.md#[pauseablelike_resume])

## Properties

### [PauseableLike\_isPaused]

• `Readonly` **[PauseableLike\_isPaused]**: [`StoreLike`](events.StoreLike.md)<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

## Methods

### [PauseableLike\_pause]

▸ **[PauseableLike_pause]**(): `void`

Imperatively pause the source.

#### Returns

`void`

___

### [PauseableLike\_resume]

▸ **[PauseableLike_resume]**(): `void`

Imperatively resume the source.

#### Returns

`void`
