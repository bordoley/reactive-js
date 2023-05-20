[Reactive-JS](../README.md) / Promise

# Module: Promise

## Table of contents

### Container Interfaces

- [PromiseContainer](../interfaces/Promise.PromiseContainer.md)

### Module Interfaces

- [PromiseModule](../interfaces/Promise.PromiseModule.md)

### Type Aliases

- [Signature](Promise.md#signature)
- [Type](Promise.md#type)

### Other Functions

- [addEventHandler](Promise.md#addeventhandler)

### Transform Functions

- [toEventSource](Promise.md#toeventsource)
- [toObservable](Promise.md#toobservable)
- [toReadonlyArrayAsync](Promise.md#toreadonlyarrayasync)

## Type Aliases

### Signature

Ƭ **Signature**: [`PromiseModule`](../interfaces/Promise.PromiseModule.md)

___

### Type

Ƭ **Type**: [`PromiseContainer`](../interfaces/Promise.PromiseContainer.md)

## Other Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<`Promise`<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<`Promise`<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

## Transform Functions

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<`Promise`<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Promise`<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<`Promise`<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Promise`<`T`\>, `Promise`<readonly `T`[]\>\>
