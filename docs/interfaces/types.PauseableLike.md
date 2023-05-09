[Reactive-JS](../README.md) / [types](../modules/types.md) / PauseableLike

# Interface: PauseableLike

[types](../modules/types.md).PauseableLike

## Hierarchy

- **`PauseableLike`**

  ↳ [`PauseableSchedulerLike`](types.PauseableSchedulerLike.md)

  ↳ [`PauseableObservableLike`](types.PauseableObservableLike.md)

## Table of contents

### Properties

- [[\_\_\_PauseableLike\_isPaused]](types.PauseableLike.md#[___pauseablelike_ispaused])

### Methods

- [[\_\_\_PauseableLike\_pause]](types.PauseableLike.md#[___pauseablelike_pause])
- [[\_\_\_PauseableLike\_resume]](types.PauseableLike.md#[___pauseablelike_resume])

## Properties

### [\_\_\_PauseableLike\_isPaused]

• `Readonly` **[\_\_\_PauseableLike\_isPaused]**: [`StoreLike`](types.StoreLike.md)<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

## Methods

### [\_\_\_PauseableLike\_pause]

▸ **[___PauseableLike_pause]**(): `void`

Imperatively pause the source.

#### Returns

`void`

___

### [\_\_\_PauseableLike\_resume]

▸ **[___PauseableLike_resume]**(): `void`

Imperatively resume the source.

#### Returns

`void`
