[Reactive-JS](../README.md) / core/EventListener

# Module: core/EventListener

## Table of contents

### Functions

- [create](core_EventListener.md#create)

## Functions

### create

▸ **create**<`T`\>(`notify`): [`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T`\>, `a`: `T`) => `void` |

#### Returns

[`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T`\>

▸ **create**<`T_1`\>(`notify`, `options`): [`ErrorSafeEventListenerLike`](../interfaces/core.ErrorSafeEventListenerLike.md)<`T_1`\>

#### Type parameters

| Name |
| :------ |
| `T_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T_1`\>, `a`: `T_1`) => `void` |
| `options` | `Object` |
| `options.errorSafe` | ``true`` |

#### Returns

[`ErrorSafeEventListenerLike`](../interfaces/core.ErrorSafeEventListenerLike.md)<`T_1`\>

▸ **create**<`T_2`\>(`notify`, `options?`): [`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T_2`\>

#### Type parameters

| Name |
| :------ |
| `T_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notify` | (`this`: [`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T_2`\>, `a`: `T_2`) => `void` |
| `options?` | `Object` |
| `options.errorSafe?` | `boolean` |

#### Returns

[`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T_2`\>
