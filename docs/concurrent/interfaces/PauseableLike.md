[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PauseableLike

# Interface: PauseableLike

## Extends

- [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`PauseableSchedulerLike`](PauseableSchedulerLike.md)
- [`PauseableObservableLike`](PauseableObservableLike.md)

## Properties

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](../../events/interfaces/StoreLike.md)\<`boolean`\>

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
