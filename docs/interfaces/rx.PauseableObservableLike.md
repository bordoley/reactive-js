[Reactive-JS](../README.md) / [rx](../modules/rx.md) / PauseableObservableLike

# Interface: PauseableObservableLike<T\>

[rx](../modules/rx.md).PauseableObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

- [`PauseableLike`](concurrent.PauseableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[PauseableLike\_isPaused]](rx.PauseableObservableLike.md#[pauseablelike_ispaused])

### Methods

- [[PauseableLike\_pause]](rx.PauseableObservableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](rx.PauseableObservableLike.md#[pauseablelike_resume])

## Properties

### [PauseableLike\_isPaused]

• `Readonly` **[PauseableLike\_isPaused]**: [`StoreLike`](events.StoreLike.md)<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[PauseableLike](concurrent.PauseableLike.md).[[PauseableLike_isPaused]](concurrent.PauseableLike.md#[pauseablelike_ispaused])

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
