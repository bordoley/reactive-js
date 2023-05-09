[Reactive-JS](../README.md) / [types](../modules/types.md) / DeferredObservableLike

# Interface: DeferredObservableLike<T\>

[types](../modules/types.md).DeferredObservableLike

An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](types.ObservableLike.md)<`T`\>

  ↳ **`DeferredObservableLike`**

  ↳↳ [`RunnableLike`](types.RunnableLike.md)

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isDeferred]](types.DeferredObservableLike.md#[___observablelike_isdeferred])

## Properties

### [\_\_\_ObservableLike\_isDeferred]

• `Readonly` **[\_\_\_ObservableLike\_isDeferred]**: ``true``

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[ObservableLike](types.ObservableLike.md).[[___ObservableLike_isDeferred]](types.ObservableLike.md#[___observablelike_isdeferred])
