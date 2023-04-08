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

- [[\_\_\_ContainerLike\_type]](streaming.AsyncEnumerableLike.md#[___containerlike_type])
- [[\_\_\_StreamableLike\_isInteractive]](streaming.AsyncEnumerableLike.md#[___streamablelike_isinteractive])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_StreamableLike\_isInteractive]

• `Readonly` **[\_\_\_StreamableLike\_isInteractive]**: ``true``

Indicates if the resulting is stream is interactive,
producing exactly one value for every enqueued request.

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_isInteractive]](streaming.StreamableLike.md#[___streamablelike_isinteractive])
