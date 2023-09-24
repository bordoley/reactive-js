[Reactive-JS](../README.md) / [utils](../modules/utils.md) / SerialDisposableLike

# Interface: SerialDisposableLike<TDisposable\>

[utils](../modules/utils.md).SerialDisposableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) = [`DisposableLike`](utils.DisposableLike.md) |

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`SerialDisposableLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](utils.SerialDisposableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](utils.SerialDisposableLike.md#[disposablelike_isdisposed])

### Accessors

- [[SerialDisposableLike\_current]](utils.SerialDisposableLike.md#[serialdisposablelike_current])

### Methods

- [[DisposableLike\_add]](utils.SerialDisposableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](utils.SerialDisposableLike.md#[disposablelike_dispose])

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

## Accessors

### [SerialDisposableLike\_current]

• `get` **[SerialDisposableLike_current]**(): `TDisposable`

#### Returns

`TDisposable`

• `set` **[SerialDisposableLike_current]**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `TDisposable` |

#### Returns

`void`

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
