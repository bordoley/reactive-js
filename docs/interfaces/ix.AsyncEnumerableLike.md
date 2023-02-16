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
- [[ContainerLike\_T]](ix.AsyncEnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.AsyncEnumerableLike.md#[containerlike_type])
- [[StatefulContainerLike\_state]](ix.AsyncEnumerableLike.md#[statefulcontainerlike_state])

### Methods

- [[InteractiveContainerLike\_interact]](ix.AsyncEnumerableLike.md#[interactivecontainerlike_interact])
- [[StreamableLike\_stream]](ix.AsyncEnumerableLike.md#[streamablelike_stream])

## Properties

### [AsyncEnumerableLike\_isEnumerable]

• `Readonly` **[AsyncEnumerableLike\_isEnumerable]**: `boolean`

___

### [AsyncEnumerableLike\_isRunnable]

• `Readonly` **[AsyncEnumerableLike\_isRunnable]**: `boolean`

___

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[ContainerLike_T]](ix.InteractiveContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[ContainerLike_type]](ix.InteractiveContainerLike.md#[containerlike_type])

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[StatefulContainerLike_state]](ix.InteractiveContainerLike.md#[statefulcontainerlike_state])

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

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])

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

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])
