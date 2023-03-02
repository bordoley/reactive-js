[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[streaming](../modules/streaming.md).AsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`void`, `T`\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [[ContainerLike\_T]](streaming.AsyncEnumerableLike.md#[containerlike_t])
- [[ContainerLike\_type]](streaming.AsyncEnumerableLike.md#[containerlike_type])

### Methods

- [[StreamableLike\_stream]](streaming.AsyncEnumerableLike.md#[streamablelike_stream])

## Properties

### [ContainerLike\_T]

• `Optional` `Readonly` **[ContainerLike\_T]**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_T]](containers.ContainerLike.md#[containerlike_t])

___

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`StreamLike`](streaming.StreamLike.md)<`void`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](streaming.StreamLike.md)<`void`, `T`\>

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])
