[Reactive-JS](../README.md) / [rx](../modules/rx.md) / PauseableLike

# Interface: PauseableLike

[rx](../modules/rx.md).PauseableLike

## Hierarchy

- **`PauseableLike`**

  ↳ [`PauseableSchedulerLike`](concurrent.PauseableSchedulerLike.md)

  ↳ [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)

## Table of contents

### Properties

- [[PauseableLike\_isPaused]](rx.PauseableLike.md#[pauseablelike_ispaused])

### Methods

- [[PauseableLike\_pause]](rx.PauseableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](rx.PauseableLike.md#[pauseablelike_resume])

## Properties

### [PauseableLike\_isPaused]

• `Readonly` **[PauseableLike\_isPaused]**: [`StoreLike`](rx.StoreLike.md)<`boolean`\>

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
