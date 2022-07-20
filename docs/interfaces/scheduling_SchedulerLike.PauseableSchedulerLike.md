[Reactive-JS](../README.md) / [scheduling/SchedulerLike](../modules/scheduling_SchedulerLike.md) / PauseableSchedulerLike

# Interface: PauseableSchedulerLike

[scheduling/SchedulerLike](../modules/scheduling_SchedulerLike.md).PauseableSchedulerLike

## Hierarchy

- [`PauseableLike`](util_PauseableLike.PauseableLike.md)

- [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

  ↳ **`PauseableSchedulerLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[disposablelike_isdisposed])
- [[SchedulerLike\_inContinuation]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[DisposableLike\_add]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[disposablelike_dispose])
- [[PauseableLike\_pause]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[pauseablelike_pause])
- [[PauseableLike\_resume]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[pauseablelike_resume])
- [[SchedulerLike\_requestYield]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling_SchedulerLike.PauseableSchedulerLike.md#[schedulerlike_schedule])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[DisposableLike_error]](scheduling_SchedulerLike.SchedulerLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[DisposableLike_isDisposed]](scheduling_SchedulerLike.SchedulerLike.md#[disposablelike_isdisposed])

___

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[SchedulerLike_inContinuation]](scheduling_SchedulerLike.SchedulerLike.md#[schedulerlike_incontinuation])

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[SchedulerLike_now]](scheduling_SchedulerLike.SchedulerLike.md#[schedulerlike_now])

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[SchedulerLike_shouldYield]](scheduling_SchedulerLike.SchedulerLike.md#[schedulerlike_shouldyield])

## Methods

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util_DisposableLike.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[DisposableLike_add]](scheduling_SchedulerLike.SchedulerLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/util_DisposableLike.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[DisposableLike_dispose]](scheduling_SchedulerLike.SchedulerLike.md#[disposablelike_dispose])

___

### [PauseableLike\_pause]

▸ **[PauseableLike_pause]**(): `void`

#### Returns

`void`

#### Inherited from

[PauseableLike](util_PauseableLike.PauseableLike.md).[[PauseableLike_pause]](util_PauseableLike.PauseableLike.md#[pauseablelike_pause])

___

### [PauseableLike\_resume]

▸ **[PauseableLike_resume]**(): `void`

#### Returns

`void`

#### Inherited from

[PauseableLike](util_PauseableLike.PauseableLike.md).[[PauseableLike_resume]](util_PauseableLike.PauseableLike.md#[pauseablelike_resume])

___

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[SchedulerLike_requestYield]](scheduling_SchedulerLike.SchedulerLike.md#[schedulerlike_requestyield])

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling_ContinuationLike.ContinuationLike.md) |
| `options?` | [`SchedulerOptions`](../modules/scheduling_SchedulerLike.md#scheduleroptions) |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling_SchedulerLike.SchedulerLike.md).[[SchedulerLike_schedule]](scheduling_SchedulerLike.SchedulerLike.md#[schedulerlike_schedule])
