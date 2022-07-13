[Reactive-JS](../README.md) / [scheduling/SchedulerImplementationLike](../modules/scheduling_SchedulerImplementationLike.md) / SchedulerImplementationLike

# Interface: SchedulerImplementationLike

[scheduling/SchedulerImplementationLike](../modules/scheduling_SchedulerImplementationLike.md).SchedulerImplementationLike

## Hierarchy

- [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

  ↳ **`SchedulerImplementationLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[disposablelike_isdisposed])
- [[SchedulerLike\_inContinuation]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[schedulerlike_shouldyield])

### Methods

- [[DisposableLike\_add]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[disposablelike_dispose])
- [[SchedulerLike\_requestYield]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md#[schedulerlike_schedule])

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

• **[SchedulerLike\_inContinuation]**: `boolean`

#### Overrides

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
