[Reactive-JS](../README.md) / [core](../modules/core.md) / DeferredObservableLike

# Interface: DeferredObservableLike<T\>

[core](../modules/core.md).DeferredObservableLike

An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](core.ObservableLike.md)<`T`\>

  ↳ **`DeferredObservableLike`**

  ↳↳ [`RunnableLike`](core.RunnableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](core.DeferredObservableLike.md#[___observablelike_isdeferred])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](core.ObservableLike.md).[[___ObservableLike_isDeferred]](core.ObservableLike.md#[___observablelike_isdeferred])
