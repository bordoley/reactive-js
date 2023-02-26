[Reactive-JS](../README.md) / [ix](../modules/ix.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[ix](../modules/ix.md).AsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`void`, `T`, [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`T`\>\>

- [`InteractiveContainerLike`](ix.InteractiveContainerLike.md)<[`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`T`\>, [`SchedulerLike`](scheduling.SchedulerLike.md)\>

  ↳ **`AsyncEnumerableLike`**

  ↳↳ [`RunnableAsyncEnumerableLike`](ix.RunnableAsyncEnumerableLike.md)

## Table of contents

### Properties

- [[AsyncEnumerableLike\_isEnumerable]](ix.AsyncEnumerableLike.md#[asyncenumerablelike_isenumerable])
- [[AsyncEnumerableLike\_isRunnable]](ix.AsyncEnumerableLike.md#[asyncenumerablelike_isrunnable])
- [[ContainerLike\_type]](ix.AsyncEnumerableLike.md#[containerlike_type])
- [[StatefulContainerLike\_state]](ix.AsyncEnumerableLike.md#[statefulcontainerlike_state])

## Properties

### [AsyncEnumerableLike\_isEnumerable]

• `Readonly` **[AsyncEnumerableLike\_isEnumerable]**: `boolean`

___

### [AsyncEnumerableLike\_isRunnable]

• `Readonly` **[AsyncEnumerableLike\_isRunnable]**: `boolean`

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

InteractiveContainerLike.\_\_@ContainerLike\_type@23131

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`unknown`\>

#### Overrides

InteractiveContainerLike.\_\_@StatefulContainerLike\_state@23155
