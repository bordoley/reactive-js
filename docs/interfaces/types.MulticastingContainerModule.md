[Reactive-JS](../README.md) / [types](../modules/types.md) / MulticastingContainerModule

# Interface: MulticastingContainerModule<C\>

[types](../modules/types.md).MulticastingContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`MulticastingContainerModule`**

  ↳ [`EventSourceModule`](EventSource.EventSourceModule.md)

  ↳ [`PromiseModule`](Promise.PromiseModule.md)

  ↳ [`StoreModule`](Store.StoreModule.md)

## Table of contents

### Other Methods

- [addEventHandler](types.MulticastingContainerModule.md#addeventhandler)

### Transform Methods

- [toEventSource](types.MulticastingContainerModule.md#toeventsource)
- [toObservable](types.MulticastingContainerModule.md#toobservable)
- [toReadonlyArrayAsync](types.MulticastingContainerModule.md#toreadonlyarrayasync)

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

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `Promise`<readonly `T`[]\>\>
