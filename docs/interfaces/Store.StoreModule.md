[Reactive-JS](../README.md) / [Store](../modules/Store.md) / StoreModule

# Interface: StoreModule

[Store](../modules/Store.md).StoreModule

## Hierarchy

- [`MulticastableTypeClass`](types.MulticastableTypeClass.md)<[`Type`](../modules/Store.md#type)\>

  ↳ **`StoreModule`**

## Table of contents

### Other Methods

- [addEventHandler](Store.StoreModule.md#addeventhandler)
- [create](Store.StoreModule.md#create)

### Transform Methods

- [toEventSource](Store.StoreModule.md#toeventsource)
- [toObservable](Store.StoreModule.md#toobservable)
- [toReadonlyArrayAsync](Store.StoreModule.md#toreadonlyarrayasync)

## Other Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[addEventHandler](types.MulticastableTypeClass.md#addeventhandler)

___

### create

▸ **create**<`T`\>(`initialValue`): [`WritableStoreLike`](types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`WritableStoreLike`](types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)

___

## Transform Methods

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toEventSource](types.MulticastableTypeClass.md#toeventsource)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toObservable](types.MulticastableTypeClass.md#toobservable)

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toReadonlyArrayAsync](types.MulticastableTypeClass.md#toreadonlyarrayasync)
