[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PauseableSchedulerLike

# Interface: PauseableSchedulerLike

[scheduling](../modules/scheduling.md).PauseableSchedulerLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- [`PauseableLike`](scheduling.PauseableLike.md)

- [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ **`PauseableSchedulerLike`**

## Table of contents

### Properties

- [[DispatcherLike\_scheduler]](scheduling.PauseableSchedulerLike.md#[dispatcherlike_scheduler])
- [[DisposableLike\_error]](scheduling.PauseableSchedulerLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling.PauseableSchedulerLike.md#[disposablelike_isdisposed])
- [[SchedulerLike\_inContinuation]](scheduling.PauseableSchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling.PauseableSchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.PauseableSchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[DispatcherLike\_dispatch]](scheduling.PauseableSchedulerLike.md#[dispatcherlike_dispatch])
- [[DisposableLike\_add]](scheduling.PauseableSchedulerLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling.PauseableSchedulerLike.md#[disposablelike_dispose])
- [[SchedulerLike\_requestYield]](scheduling.PauseableSchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.PauseableSchedulerLike.md#[schedulerlike_schedule])

## Properties

### [DispatcherLike\_scheduler]

• `Readonly` **[DispatcherLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

#### Inherited from

[PauseableLike](scheduling.PauseableLike.md).[[DispatcherLike_scheduler]](scheduling.PauseableLike.md#[dispatcherlike_scheduler])

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[DisposableLike_error]](scheduling.SchedulerLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[DisposableLike_isDisposed]](scheduling.SchedulerLike.md#[disposablelike_isdisposed])

___

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_inContinuation]](scheduling.SchedulerLike.md#[schedulerlike_incontinuation])

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_now]](scheduling.SchedulerLike.md#[schedulerlike_now])

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_shouldYield]](scheduling.SchedulerLike.md#[schedulerlike_shouldyield])

## Methods

### [DispatcherLike\_dispatch]

▸ **[DispatcherLike_dispatch]**(`req`): `void`

Dispatches the next request

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Updater`](../modules/functions.md#updater)<[`PauseableState`](../modules/scheduling.md#pauseablestate)\> |

#### Returns

`void`

#### Inherited from

[PauseableLike](scheduling.PauseableLike.md).[[DispatcherLike_dispatch]](scheduling.PauseableLike.md#[dispatcherlike_dispatch])

___

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[DisposableLike_add]](scheduling.SchedulerLike.md#[disposablelike_add])

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

[SchedulerLike](scheduling.SchedulerLike.md).[[DisposableLike_dispose]](scheduling.SchedulerLike.md#[disposablelike_dispose])

___

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_requestYield]](scheduling.SchedulerLike.md#[schedulerlike_requestyield])

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])
