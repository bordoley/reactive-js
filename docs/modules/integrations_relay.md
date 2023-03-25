[Reactive-JS](../README.md) / integrations/relay

# Module: integrations/relay

## Table of contents

### Functions

- [fetchQuery](integrations_relay.md#fetchquery)

## Functions

### fetchQuery

▸ **fetchQuery**<`T`\>(`environment`, `taggedNode`, `variables`, `cacheConfig?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`[``"response"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `OperationType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | `default` |
| `taggedNode` | `GraphQLTaggedNode` |
| `variables` | `T`[``"variables"``] |
| `cacheConfig?` | `Object` |
| `cacheConfig.fetchPolicy?` | `FetchQueryFetchPolicy` |
| `cacheConfig.networkCacheConfig?` | `CacheConfig` |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`[``"response"``]\>
