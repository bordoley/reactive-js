[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ReplayObservableLike

# Interface: ReplayObservableLike<T\>

[concurrent](../modules/concurrent.md).ReplayObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

  ↳ **`ReplayObservableLike`**

  ↳↳ [`SubjectLike`](concurrent.SubjectLike.md)

  ↳↳ [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)

  ↳↳ [`StreamLike`](concurrent.StreamLike.md)

  ↳↳ [`WindowLocationLike`](integrations_web.WindowLocationLike.md)

## Table of contents

### Properties

- [[ReplayObservableLike\_buffer]](concurrent.ReplayObservableLike.md#[replayobservablelike_buffer])

## Properties

### [ReplayObservableLike\_buffer]

• `Readonly` **[ReplayObservableLike\_buffer]**: readonly `T`[]
