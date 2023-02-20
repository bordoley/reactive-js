[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[rx](../modules/rx.md).MulticastObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`MulticastObservableLike`**

  ↳↳ [`SubjectLike`](rx.SubjectLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [[MulticastObservableLike\_observerCount]](rx.MulticastObservableLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx.MulticastObservableLike.md#[multicastobservablelike_replay])

## Properties

### [MulticastObservableLike\_observerCount]

• `Readonly` **[MulticastObservableLike\_observerCount]**: `number`

The number of observers currently observing.

___

### [MulticastObservableLike\_replay]

• `Readonly` **[MulticastObservableLike\_replay]**: `number`
