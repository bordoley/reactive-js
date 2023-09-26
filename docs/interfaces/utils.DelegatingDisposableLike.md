[Reactive-JS](../README.md) / [utils](../modules/utils.md) / DelegatingDisposableLike

# Interface: DelegatingDisposableLike<TDisposable\>

[utils](../modules/utils.md).DelegatingDisposableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) = [`DisposableLike`](utils.DisposableLike.md) |

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`DelegatingDisposableLike`**

## Table of contents

### Properties

- [[DelegatingDisposableLike\_delegate]](utils.DelegatingDisposableLike.md#[delegatingdisposablelike_delegate])
- [[DisposableLike\_error]](utils.DelegatingDisposableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](utils.DelegatingDisposableLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](utils.DelegatingDisposableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](utils.DelegatingDisposableLike.md#[disposablelike_dispose])

## Properties

### [DelegatingDisposableLike\_delegate]

• `Readonly` **[DelegatingDisposableLike\_delegate]**: `TDisposable`

___

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
