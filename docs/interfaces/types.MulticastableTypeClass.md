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

### Other Methods

- [addEventHandler](types.MulticastableTypeClass.md#addeventhandler)

### Transform Methods

- [toEventSource](types.MulticastableTypeClass.md#toeventsource)
- [toObservable](types.MulticastableTypeClass.md#toobservable)

## Other Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`DisposableLike`](types.DisposableLike.md)\>

___

## Transform Methods

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>
