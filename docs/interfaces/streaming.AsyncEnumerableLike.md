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
- [[StreamableLike\_isEnumerable]](streaming.AsyncEnumerableLike.md#[streamablelike_isenumerable])
- [[StreamableLike\_isInteractive]](streaming.AsyncEnumerableLike.md#[streamablelike_isinteractive])
- [[StreamableLike\_isRunnable]](streaming.AsyncEnumerableLike.md#[streamablelike_isrunnable])

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

___

### [StreamableLike\_isEnumerable]

• `Readonly` **[StreamableLike\_isEnumerable]**: `boolean`

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isEnumerable]](streaming.StreamableLike.md#[streamablelike_isenumerable])

___

### [StreamableLike\_isInteractive]

• `Readonly` **[StreamableLike\_isInteractive]**: ``true``

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isInteractive]](streaming.StreamableLike.md#[streamablelike_isinteractive])

___

### [StreamableLike\_isRunnable]

• `Readonly` **[StreamableLike\_isRunnable]**: `boolean`

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isRunnable]](streaming.StreamableLike.md#[streamablelike_isrunnable])

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
