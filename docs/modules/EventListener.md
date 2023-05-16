[Reactive-JS](../README.md) / EventListener

# Module: EventListener

## Table of contents

### Interfaces

- [EventListenerModule](../interfaces/EventListener.EventListenerModule.md)

### Type Aliases

- [Signature](EventListener.md#signature)

### Functions

- [create](EventListener.md#create)

## Type Aliases

### Signature

Ƭ **Signature**: [`EventListenerModule`](../interfaces/EventListener.EventListenerModule.md)

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
