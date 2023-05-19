[Reactive-JS](../README.md) / Promise

# Module: Promise

## Table of contents

### Container Interfaces

- [PromiseContainer](../interfaces/Promise.PromiseContainer.md)

### Other Interfaces

- [PromiseModule](../interfaces/Promise.PromiseModule.md)

### Type Aliases

- [Signature](Promise.md#signature)
- [Type](Promise.md#type)

### Functions

- [toEventSource](Promise.md#toeventsource)
- [toObservable](Promise.md#toobservable)

## Type Aliases

### Signature

Ƭ **Signature**: [`PromiseModule`](../interfaces/Promise.PromiseModule.md)

___

### Type

Ƭ **Type**: [`PromiseContainer`](../interfaces/Promise.PromiseContainer.md)

## Functions

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>
