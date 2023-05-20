[Reactive-JS](../README.md) / Store

# Module: Store

## Table of contents

### Module Interfaces

- [StoreModule](../interfaces/Store.StoreModule.md)

### Other Interfaces

- [StoreContainer](../interfaces/Store.StoreContainer.md)

### Type Aliases

- [Signature](Store.md#signature)
- [Type](Store.md#type)

### Other Functions

- [addEventHandler](Store.md#addeventhandler)
- [create](Store.md#create)

### Transform Functions

- [toEventSource](Store.md#toeventsource)
- [toObservable](Store.md#toobservable)
- [toReadonlyArrayAsync](Store.md#toreadonlyarrayasync)

## Type Aliases

### Signature

Ƭ **Signature**: [`StoreModule`](../interfaces/Store.StoreModule.md)

___

### Type

Ƭ **Type**: [`StoreContainer`](../interfaces/Store.StoreContainer.md)

## Other Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### create

▸ **create**<`T`\>(`initialValue`): [`WritableStoreLike`](../interfaces/types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`WritableStoreLike`](../interfaces/types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)

___

## Transform Functions

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>
