[Reactive-JS](../README.md) / [ix](../modules/ix.md) / RunnableAsyncEnumerableLike

# Interface: RunnableAsyncEnumerableLike<T\>

[ix](../modules/ix.md).RunnableAsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`T`\>

  ↳ **`RunnableAsyncEnumerableLike`**

  ↳↳ [`EnumerableAsyncEnumerableLike`](ix.EnumerableAsyncEnumerableLike.md)

## Table of contents

### Properties

- [[AsyncEnumerableLike\_isEnumerable]](ix.RunnableAsyncEnumerableLike.md#[asyncenumerablelike_isenumerable])
- [[AsyncEnumerableLike\_isRunnable]](ix.RunnableAsyncEnumerableLike.md#[asyncenumerablelike_isrunnable])
- [[ContainerLike\_T]](ix.RunnableAsyncEnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.RunnableAsyncEnumerableLike.md#[containerlike_type])
- [[StatefulContainerLike\_state]](ix.RunnableAsyncEnumerableLike.md#[statefulcontainerlike_state])

### Methods

- [[InteractiveContainerLike\_interact]](ix.RunnableAsyncEnumerableLike.md#[interactivecontainerlike_interact])
- [[StreamableLike\_stream]](ix.RunnableAsyncEnumerableLike.md#[streamablelike_stream])

## Properties

### [AsyncEnumerableLike\_isEnumerable]

• `Readonly` **[AsyncEnumerableLike\_isEnumerable]**: `boolean`

#### Inherited from

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[AsyncEnumerableLike_isEnumerable]](ix.AsyncEnumerableLike.md#[asyncenumerablelike_isenumerable])

___

### [AsyncEnumerableLike\_isRunnable]

• `Readonly` **[AsyncEnumerableLike\_isRunnable]**: ``true``

#### Overrides

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[AsyncEnumerableLike_isRunnable]](ix.AsyncEnumerableLike.md#[asyncenumerablelike_isrunnable])

___

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[ContainerLike_T]](ix.AsyncEnumerableLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`RunnableAsyncEnumerableLike`](ix.RunnableAsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[ContainerLike_type]](ix.AsyncEnumerableLike.md#[containerlike_type])

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`unknown`\>

#### Inherited from

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[StatefulContainerLike_state]](ix.AsyncEnumerableLike.md#[statefulcontainerlike_state])

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SchedulerLike`](scheduling.SchedulerLike.md) |

#### Returns

[`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[InteractiveContainerLike_interact]](ix.AsyncEnumerableLike.md#[interactivecontainerlike_interact])

___

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[AsyncEnumerableLike](ix.AsyncEnumerableLike.md).[[StreamableLike_stream]](ix.AsyncEnumerableLike.md#[streamablelike_stream])
