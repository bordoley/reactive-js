[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / PauseableLike

# Interface: PauseableLike

## Extends

- [`DisposableContainerLike`](DisposableContainerLike.md)

## Extended by

- [`AnimationGroupStreamLike`](../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)
- [`AnimationStreamLike`](../../computations/Streamable/interfaces/AnimationStreamLike.md)
- [`PauseableSchedulerLike`](PauseableSchedulerLike.md)

## Properties

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](../../computations/interfaces/StoreLike.md)\<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

## Methods

### \[PauseableLike\_pause\]()

> **\[PauseableLike\_pause\]**(): `void`

Imperatively pause the source.

#### Returns

`void`

***

### \[PauseableLike\_resume\]()

> **\[PauseableLike\_resume\]**(): `void`

Imperatively resume the source.

#### Returns

`void`
