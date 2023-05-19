[Reactive-JS](../README.md) / [Promise](../modules/Promise.md) / PromiseModule

# Interface: PromiseModule

[Promise](../modules/Promise.md).PromiseModule

## Hierarchy

- [`MulticastableTypeClass`](types.MulticastableTypeClass.md)<[`Type`](../modules/Promise.md#type)\>

  ↳ **`PromiseModule`**

## Table of contents

### Methods

- [toEventSource](Promise.PromiseModule.md#toeventsource)
- [toObservable](Promise.PromiseModule.md#toobservable)

## Methods

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
