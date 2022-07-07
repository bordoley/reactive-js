[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[scheduler](../modules/scheduler.md).VirtualTimeSchedulerLike

## Hierarchy

- [`EnumeratorLike`](enumerator.EnumeratorLike.md)<`void`\>

- [`SchedulerLike`](scheduler.SchedulerLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Properties

- [current](scheduler.VirtualTimeSchedulerLike.md#current)
- [error](scheduler.VirtualTimeSchedulerLike.md#error)
- [hasCurrent](scheduler.VirtualTimeSchedulerLike.md#hascurrent)
- [inContinuation](scheduler.VirtualTimeSchedulerLike.md#incontinuation)
- [isDisposed](scheduler.VirtualTimeSchedulerLike.md#isdisposed)
- [now](scheduler.VirtualTimeSchedulerLike.md#now)
- [shouldYield](scheduler.VirtualTimeSchedulerLike.md#shouldyield)

### Methods

- [add](scheduler.VirtualTimeSchedulerLike.md#add)
- [dispose](scheduler.VirtualTimeSchedulerLike.md#dispose)
- [move](scheduler.VirtualTimeSchedulerLike.md#move)
- [requestYield](scheduler.VirtualTimeSchedulerLike.md#requestyield)
- [schedule](scheduler.VirtualTimeSchedulerLike.md#schedule)

## Properties

### current

• `Readonly` **current**: `void`

#### Inherited from

[EnumeratorLike](enumerator.EnumeratorLike.md).[current](enumerator.EnumeratorLike.md#current)

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[error](scheduler.SchedulerLike.md#error)

___

### hasCurrent

• `Readonly` **hasCurrent**: `boolean`

#### Inherited from

[EnumeratorLike](enumerator.EnumeratorLike.md).[hasCurrent](enumerator.EnumeratorLike.md#hascurrent)

___

### inContinuation

• `Readonly` **inContinuation**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[inContinuation](scheduler.SchedulerLike.md#incontinuation)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Overrides

[SchedulerLike](scheduler.SchedulerLike.md).[isDisposed](scheduler.SchedulerLike.md#isdisposed)

___

### now

• `Readonly` **now**: `number`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[now](scheduler.SchedulerLike.md#now)

___

### shouldYield

• `Readonly` **shouldYield**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[shouldYield](scheduler.SchedulerLike.md#shouldyield)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[add](scheduler.SchedulerLike.md#add)

___

### dispose

▸ **dispose**(`this`): `void`

Dispose the resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) |

#### Returns

`void`

#### Overrides

[SchedulerLike](scheduler.SchedulerLike.md).[dispose](scheduler.SchedulerLike.md#dispose)

___

### move

▸ **move**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EnumeratorLike](enumerator.EnumeratorLike.md).[move](enumerator.EnumeratorLike.md#move)

___

### requestYield

▸ **requestYield**(`this`): `void`

Request the scheduler to yield.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[requestYield](scheduler.SchedulerLike.md#requestyield)

___

### schedule

▸ **schedule**(`this`, `continuation`, `options?`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) | - |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[schedule](scheduler.SchedulerLike.md#schedule)
