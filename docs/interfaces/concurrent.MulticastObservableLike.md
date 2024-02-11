[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[concurrent](../modules/concurrent.md).MulticastObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>

  ↳ **`MulticastObservableLike`**

  ↳↳ [`SubjectLike`](concurrent.SubjectLike.md)

  ↳↳ [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)

  ↳↳ [`StreamLike`](concurrent.StreamLike.md)

  ↳↳ [`WindowLocationLike`](integrations_web.WindowLocationLike.md)

## Table of contents

### Properties

- [[ObservableLike\_isDeferred]](concurrent.MulticastObservableLike.md#[observablelike_isdeferred])
- [[ObservableLike\_isMulticasted]](concurrent.MulticastObservableLike.md#[observablelike_ismulticasted])
- [[ObservableLike\_isRunnable]](concurrent.MulticastObservableLike.md#[observablelike_isrunnable])

## Properties

### [ObservableLike\_isDeferred]

• `Readonly` **[ObservableLike\_isDeferred]**: ``false``

#### Overrides

PureObservableLike.\_\_@ObservableLike\_isDeferred@43859

___

### [ObservableLike\_isMulticasted]

• `Readonly` **[ObservableLike\_isMulticasted]**: ``true``

#### Overrides

PureObservableLike.\_\_@ObservableLike\_isMulticasted@43860

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``false``

#### Overrides

PureObservableLike.\_\_@ObservableLike\_isRunnable@43862
