[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PauseableObservableLike

# Interface: PauseableObservableLike<T\>

[concurrent](../modules/concurrent.md).PauseableObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

- [`PauseableLike`](rx.PauseableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[PauseableLike\_isPaused]](concurrent.PauseableObservableLike.md#[pauseablelike_ispaused])

### Methods

- [[PauseableLike\_pause]](concurrent.PauseableObservableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](concurrent.PauseableObservableLike.md#[pauseablelike_resume])

## Properties

### [PauseableLike\_isPaused]

• `Readonly` **[PauseableLike\_isPaused]**: [`StoreLike`](rx.StoreLike.md)<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[PauseableLike](rx.PauseableLike.md).[[PauseableLike_isPaused]](rx.PauseableLike.md#[pauseablelike_ispaused])

## Methods

### [PauseableLike\_pause]

▸ **[PauseableLike_pause]**(): `void`

Imperatively pause the source.

#### Returns

`void`

#### Inherited from

[PauseableLike](rx.PauseableLike.md).[[PauseableLike_pause]](rx.PauseableLike.md#[pauseablelike_pause])

___

### [PauseableLike\_resume]

▸ **[PauseableLike_resume]**(): `void`

Imperatively resume the source.

#### Returns

`void`

#### Inherited from

[PauseableLike](rx.PauseableLike.md).[[PauseableLike_resume]](rx.PauseableLike.md#[pauseablelike_resume])
