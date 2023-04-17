[Reactive-JS](../README.md) / util/EventListener

# Module: util/EventListener

## Table of contents

### Functions

- [create](util_EventListener.md#create)
- [toErrorSafeEventListener](util_EventListener.md#toerrorsafeeventlistener)

## Functions

### create

▸ **create**<`T`\>(`notify`): [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | [`Method1`](functions.md#method1)<[`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`T`\>, `T`, `void`\> |

#### Returns

[`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`T`\>

___

### toErrorSafeEventListener

▸ **toErrorSafeEventListener**<`T`\>(): [`Function1`](functions.md#function1)<[`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`T`\>, [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`T`\>, [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`T`\>\>
