[Reactive-JS](../README.md) / [ix](../modules/ix.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[ix](../modules/ix.md).AsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`void`, `T`, [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>\>

- [`InteractiveContainerLike`](ix.InteractiveContainerLike.md)<[`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>, [`SchedulerLike`](scheduling.SchedulerLike.md)\>

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [[ContainerLike\_T]](ix.AsyncEnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](ix.AsyncEnumerableLike.md#[containerlike_type])
- [[StableContainerLike\_state]](ix.AsyncEnumerableLike.md#[stablecontainerlike_state])

### Methods

- [[InteractiveContainerLike\_interact]](ix.AsyncEnumerableLike.md#[interactivecontainerlike_interact])
- [[StreamableLike\_stream]](ix.AsyncEnumerableLike.md#[streamablelike_stream])

## Properties

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

### [StableContainerLike\_state]

• `Optional` `Readonly` **[StableContainerLike\_state]**: [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[StableContainerLike_state]](ix.InteractiveContainerLike.md#[stablecontainerlike_state])

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SchedulerLike`](scheduling.SchedulerLike.md) |

#### Returns

[`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])

___

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])
