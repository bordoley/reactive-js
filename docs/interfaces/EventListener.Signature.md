[Reactive-JS](../README.md) / [EventListener](../modules/EventListener.md) / Signature

# Interface: Signature

[EventListener](../modules/EventListener.md).Signature

## Table of contents

### Methods

- [create](EventListener.Signature.md#create)

## Methods

### create

▸ **create**<`T`\>(`notify`): [`EventListenerLike`](types.EventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](types.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |

#### Returns

[`EventListenerLike`](types.EventListenerLike.md)<`T`\>

▸ **create**<`T`\>(`notify`, `options`): [`ErrorSafeEventListenerLike`](types.ErrorSafeEventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](types.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |
| `options` | `Object` |
| `options.errorSafe` | ``true`` |

#### Returns

[`ErrorSafeEventListenerLike`](types.ErrorSafeEventListenerLike.md)<`T`\>

▸ **create**<`T`\>(`notify`, `options?`): [`EventListenerLike`](types.EventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](types.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |
| `options?` | `Object` |
| `options.errorSafe?` | `boolean` |

#### Returns

[`EventListenerLike`](types.EventListenerLike.md)<`T`\>
