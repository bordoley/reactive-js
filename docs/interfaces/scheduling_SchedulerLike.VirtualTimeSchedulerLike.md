[Reactive-JS](../README.md) / [scheduling/SchedulerLike](../modules/scheduling_SchedulerLike.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[scheduling/SchedulerLike](../modules/scheduling_SchedulerLike.md).VirtualTimeSchedulerLike

## Hierarchy

- [`EnumeratorLike`](ix_EnumeratorLike.EnumeratorLike.md)<`void`\>

- [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[disposablelike_isdisposed])
- [[EnumeratorLike\_current]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[enumeratorlike_hascurrent])
- [[SchedulerLike\_inContinuation]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[DisposableLike\_add]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[disposablelike_dispose])
- [[InteractiveSourceLike\_move]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[interactivesourcelike_move])
- [[SchedulerLike\_requestYield]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md#[schedulerlike_schedule])

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

### [EnumeratorLike\_current]

• `Readonly` **[EnumeratorLike\_current]**: `void`

#### Inherited from

[EnumeratorLike](ix_EnumeratorLike.EnumeratorLike.md).[[EnumeratorLike_current]](ix_EnumeratorLike.EnumeratorLike.md#[enumeratorlike_current])

___

### [EnumeratorLike\_hasCurrent]

• `Readonly` **[EnumeratorLike\_hasCurrent]**: `boolean`

#### Inherited from

[EnumeratorLike](ix_EnumeratorLike.EnumeratorLike.md).[[EnumeratorLike_hasCurrent]](ix_EnumeratorLike.EnumeratorLike.md#[enumeratorlike_hascurrent])

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

### [InteractiveSourceLike\_move]

▸ **[InteractiveSourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[EnumeratorLike](ix_EnumeratorLike.EnumeratorLike.md).[[InteractiveSourceLike_move]](ix_EnumeratorLike.EnumeratorLike.md#[interactivesourcelike_move])

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
