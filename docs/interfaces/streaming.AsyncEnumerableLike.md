[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[streaming](../modules/streaming.md).AsyncEnumerableLike

A container that returns an interactive stream that produces
exactly one value for every enqueued void request.

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

- [[ContainerLike\_type]](streaming.AsyncEnumerableLike.md#[containerlike_type])
- [[StreamableLike\_isInteractive]](streaming.AsyncEnumerableLike.md#[streamablelike_isinteractive])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

___

### [StreamableLike\_isInteractive]

• `Readonly` **[StreamableLike\_isInteractive]**: ``true``

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_isInteractive]](streaming.StreamableLike.md#[streamablelike_isinteractive])
