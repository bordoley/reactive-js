[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PauseableObservableLike

# Interface: PauseableObservableLike<T\>

[concurrent](../modules/concurrent.md).PauseableObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\>

- [`PauseableLike`](concurrent.PauseableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[PauseableLike\_isPaused]](concurrent.PauseableObservableLike.md#[pauseablelike_ispaused])
- [[ReplayObservableLike\_buffer]](concurrent.PauseableObservableLike.md#[replayobservablelike_buffer])

### Methods

- [[PauseableLike\_pause]](concurrent.PauseableObservableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](concurrent.PauseableObservableLike.md#[pauseablelike_resume])

## Properties

### [PauseableLike\_isPaused]

• `Readonly` **[PauseableLike\_isPaused]**: [`StoreLike`](events.StoreLike.md)<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[PauseableLike](concurrent.PauseableLike.md).[[PauseableLike_isPaused]](concurrent.PauseableLike.md#[pauseablelike_ispaused])

___

### [ReplayObservableLike\_buffer]

• `Readonly` **[ReplayObservableLike\_buffer]**: [`IndexedLike`](collections.IndexedLike.md)<`T`\>

#### Inherited from

[ReplayObservableLike](concurrent.ReplayObservableLike.md).[[ReplayObservableLike_buffer]](concurrent.ReplayObservableLike.md#[replayobservablelike_buffer])

## Methods

### [PauseableLike\_pause]

▸ **[PauseableLike_pause]**(): `void`

Imperatively pause the source.

#### Returns

`void`

#### Inherited from

[PauseableLike](concurrent.PauseableLike.md).[[PauseableLike_pause]](concurrent.PauseableLike.md#[pauseablelike_pause])

___

### [PauseableLike\_resume]

▸ **[PauseableLike_resume]**(): `void`

Imperatively resume the source.

#### Returns

`void`

#### Inherited from

[PauseableLike](concurrent.PauseableLike.md).[[PauseableLike_resume]](concurrent.PauseableLike.md#[pauseablelike_resume])
