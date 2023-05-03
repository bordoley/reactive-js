[Reactive-JS](../README.md) / [rx](../modules/rx.md) / CacheLike

# Interface: CacheLike<T\>

[rx](../modules/rx.md).CacheLike

A cache stream that support transaction updates of a collection of keys
and observing the changing values of individual keys.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](rx.StreamableLike.md)<[`ReadonlyObjectMapLike`](../modules/keyed_containers.md#readonlyobjectmaplike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`\>

  ↳ **`CacheLike`**

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](rx.CacheLike.md#[___streamablelike_tstream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](rx.StreamLike.md)<[`ReadonlyObjectMapLike`](../modules/keyed_containers.md#readonlyobjectmaplike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`\> & [`AssociativeCollectionLike`](util.AssociativeCollectionLike.md)<`string`, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

#### Overrides

[StreamableLike](rx.StreamableLike.md).[[___StreamableLike_TStream]](rx.StreamableLike.md#[___streamablelike_tstream])
