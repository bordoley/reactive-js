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

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](streaming.AsyncEnumerableLike.md#[___containerlike_type])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[___ContainerLike_type]](rx.ObservableLike.md#[___containerlike_type])
