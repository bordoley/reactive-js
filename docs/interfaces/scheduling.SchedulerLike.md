[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / SchedulerLike

# Interface: SchedulerLike

[scheduling](../modules/scheduling.md).SchedulerLike

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SchedulerLike`**

  ↳↳ [`PauseableSchedulerLike`](scheduling.PauseableSchedulerLike.md)

  ↳↳ [`VirtualTimeSchedulerLike`](scheduling.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](scheduling.SchedulerLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling.SchedulerLike.md#[disposablelike_isdisposed])
- [[SchedulerLike\_inContinuation]](scheduling.SchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling.SchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.SchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[DisposableLike\_add]](scheduling.SchedulerLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling.SchedulerLike.md#[disposablelike_dispose])
- [[SchedulerLike\_requestYield]](scheduling.SchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_error]](util.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_isDisposed]](util.DisposableLike.md#[disposablelike_isdisposed])

___

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

## Methods

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

[DisposableLike](util.DisposableLike.md).[[DisposableLike_add]](util.DisposableLike.md#[disposablelike_add])

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

[DisposableLike](util.DisposableLike.md).[[DisposableLike_dispose]](util.DisposableLike.md#[disposablelike_dispose])

___

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling.ContinuationLike.md) |
| `options?` | [`SchedulerOptions`](../modules/scheduling.md#scheduleroptions) |

#### Returns

`void`
