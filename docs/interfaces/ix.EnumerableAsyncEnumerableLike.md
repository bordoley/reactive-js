[Reactive-JS](../README.md) / [ix](../modules/ix.md) / EnumerableAsyncEnumerableLike

# Interface: EnumerableAsyncEnumerableLike<T\>

[ix](../modules/ix.md).EnumerableAsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableAsyncEnumerableLike`](ix.RunnableAsyncEnumerableLike.md)<`T`\>

  ↳ **`EnumerableAsyncEnumerableLike`**

## Table of contents

### Properties

- [[AsyncEnumerableLike\_isEnumerable]](ix.EnumerableAsyncEnumerableLike.md#[asyncenumerablelike_isenumerable])
- [[AsyncEnumerableLike\_isRunnable]](ix.EnumerableAsyncEnumerableLike.md#[asyncenumerablelike_isrunnable])
- [[ContainerLike\_T]](ix.EnumerableAsyncEnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.EnumerableAsyncEnumerableLike.md#[containerlike_type])
- [[StatefulContainerLike\_state]](ix.EnumerableAsyncEnumerableLike.md#[statefulcontainerlike_state])

### Methods

- [[InteractiveContainerLike\_interact]](ix.EnumerableAsyncEnumerableLike.md#[interactivecontainerlike_interact])
- [[StreamableLike\_stream]](ix.EnumerableAsyncEnumerableLike.md#[streamablelike_stream])

## Properties

### [AsyncEnumerableLike\_isEnumerable]

• `Readonly` **[AsyncEnumerableLike\_isEnumerable]**: ``true``

#### Overrides

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[AsyncEnumerableLike_isEnumerable]](ix.RunnableAsyncEnumerableLike.md#[asyncenumerablelike_isenumerable])

___

### [AsyncEnumerableLike\_isRunnable]

• `Readonly` **[AsyncEnumerableLike\_isRunnable]**: ``true``

#### Inherited from

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[AsyncEnumerableLike_isRunnable]](ix.RunnableAsyncEnumerableLike.md#[asyncenumerablelike_isrunnable])

___

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[ContainerLike_T]](ix.RunnableAsyncEnumerableLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`EnumerableAsyncEnumerableLike`](ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[ContainerLike_type]](ix.RunnableAsyncEnumerableLike.md#[containerlike_type])

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`unknown`\>

#### Inherited from

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[StatefulContainerLike_state]](ix.RunnableAsyncEnumerableLike.md#[statefulcontainerlike_state])

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

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[InteractiveContainerLike_interact]](ix.RunnableAsyncEnumerableLike.md#[interactivecontainerlike_interact])

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

[RunnableAsyncEnumerableLike](ix.RunnableAsyncEnumerableLike.md).[[StreamableLike_stream]](ix.RunnableAsyncEnumerableLike.md#[streamablelike_stream])
