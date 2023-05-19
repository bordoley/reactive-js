[Reactive-JS](../README.md) / [Promise](../modules/Promise.md) / PromiseModule

# Interface: PromiseModule

[Promise](../modules/Promise.md).PromiseModule

## Hierarchy

- [`MulticastableTypeClass`](types.MulticastableTypeClass.md)<[`Type`](../modules/Promise.md#type)\>

  ↳ **`PromiseModule`**

## Table of contents

### Other Methods

- [addEventHandler](Promise.PromiseModule.md#addeventhandler)

### Transform Methods

- [toEventSource](Promise.PromiseModule.md#toeventsource)
- [toObservable](Promise.PromiseModule.md#toobservable)

## Other Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[addEventHandler](types.MulticastableTypeClass.md#addeventhandler)

___

## Transform Methods

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toEventSource](types.MulticastableTypeClass.md#toeventsource)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toObservable](types.MulticastableTypeClass.md#toobservable)
