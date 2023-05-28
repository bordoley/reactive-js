[Reactive-JS](../README.md) / [types](../modules/types.md) / EventSourceContainerModule

# Interface: EventSourceContainerModule<C\>

[types](../modules/types.md).EventSourceContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`IndexedContainer`](types.IndexedContainer.md) |

## Hierarchy

- [`ConcreteIndexedContainerModule`](types.ConcreteIndexedContainerModule.md)<`C`\>

  ↳ **`EventSourceContainerModule`**

  ↳↳ [`EventSourceModule`](EventSource.EventSourceModule.md)

## Table of contents

### Other Methods

- [addEventHandler](types.EventSourceContainerModule.md#addeventhandler)
- [toObservable](types.EventSourceContainerModule.md#toobservable)

### Transform Methods

- [toEventSource](types.EventSourceContainerModule.md#toeventsource)
- [toReadonlyArrayAsync](types.EventSourceContainerModule.md#toreadonlyarrayasync)

## Other Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`DisposableLike`](types.DisposableLike.md)\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

___

## Transform Methods

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `Promise`<readonly `T`[]\>\>
