[Reactive-JS](../README.md) / [types](../modules/types.md) / MulticastableTypeClass

# Interface: MulticastableTypeClass<C\>

[types](../modules/types.md).MulticastableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`MulticastableTypeClass`**

  ↳ [`DisposableModule`](Disposable.DisposableModule.md)

  ↳ [`EventSourceModule`](EventSource.EventSourceModule.md)

  ↳ [`PromiseModule`](Promise.PromiseModule.md)

  ↳ [`StoreModule`](Store.StoreModule.md)

## Table of contents

### Methods

- [toObservable](types.MulticastableTypeClass.md#toobservable)

## Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>
