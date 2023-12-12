[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / PauseableObservableLike

# Interface: PauseableObservableLike<T\>

[concurrent](../modules/concurrent.md).PauseableObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

- [`PauseableLike`](concurrent.PauseableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.PauseableObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isRunnable]](concurrent.PauseableObservableLike.md#[observablelike_isrunnable])
- [[PauseableLike\_isPaused]](concurrent.PauseableObservableLike.md#[pauseablelike_ispaused])

### Methods

- [[PauseableLike\_pause]](concurrent.PauseableObservableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](concurrent.PauseableObservableLike.md#[pauseablelike_resume])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``false``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[MulticastObservableLike](concurrent.MulticastObservableLike.md).[[ObservableLike_isDeferred]](concurrent.MulticastObservableLike.md#[observablelike_isdeferred])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[MulticastObservableLike](concurrent.MulticastObservableLike.md).[[ObservableLike_isRunnable]](concurrent.MulticastObservableLike.md#[observablelike_isrunnable])

___

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
