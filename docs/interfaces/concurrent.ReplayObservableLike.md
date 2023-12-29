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

- [[ReplayObservableLike\_count]](concurrent.ReplayObservableLike.md#[replayobservablelike_count])

### Methods

- [[ReplayObservableLike\_get]](concurrent.ReplayObservableLike.md#[replayobservablelike_get])

## Properties

### [ReplayObservableLike\_count]

• `Readonly` **[ReplayObservableLike\_count]**: `number`

## Methods

### [ReplayObservableLike\_get]

▸ **[ReplayObservableLike_get]**(`index`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`T`
