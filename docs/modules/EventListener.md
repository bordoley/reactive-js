[Reactive-JS](../README.md) / EventListener

# Module: EventListener

## Table of contents

### Interfaces

- [Signature](../interfaces/EventListener.Signature.md)

### Functions

- [create](EventListener.md#create)

## Functions

### create

▸ **create**<`T`\>(`notify`): [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |

#### Returns

[`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>

▸ **create**<`T`\>(`notify`, `options`): [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |
| `options` | `Object` |
| `options.errorSafe` | ``true`` |

#### Returns

[`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`T`\>

▸ **create**<`T`\>(`notify`, `options?`): [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |
| `options?` | `Object` |
| `options.errorSafe?` | `boolean` |

#### Returns

[`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>
