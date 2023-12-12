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

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`PauseableObservableLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](concurrent.PauseableObservableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](concurrent.PauseableObservableLike.md#[disposablelike_isdisposed])
- [[ObservableLike\_isDeferred]](concurrent.PauseableObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isRunnable]](concurrent.PauseableObservableLike.md#[observablelike_isrunnable])
- [[PauseableLike\_isPaused]](concurrent.PauseableObservableLike.md#[pauseablelike_ispaused])

### Methods

- [[DisposableLike\_add]](concurrent.PauseableObservableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](concurrent.PauseableObservableLike.md#[disposablelike_dispose])
- [[PauseableLike\_pause]](concurrent.PauseableObservableLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](concurrent.PauseableObservableLike.md#[pauseablelike_resume])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_error]](utils.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_isDisposed]](utils.DisposableLike.md#[disposablelike_isdisposed])

___

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

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) | The disposable to add. |

#### Returns

`void`

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_add]](utils.DisposableLike.md#[disposablelike_add])

▸ **[DisposableLike_add]**(`teardown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\> |

#### Returns

`void`

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_add]](utils.DisposableLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](utils.DisposableLike.md).[[DisposableLike_dispose]](utils.DisposableLike.md#[disposablelike_dispose])

___

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
