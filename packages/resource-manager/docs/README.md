[@reactive-js/resource-manager - v0.0.33](README.md)

# @reactive-js/resource-manager - v0.0.33

## Index

### Interfaces

* [ResourceManagerLike](interfaces/resourcemanagerlike.md)

### Functions

* [createResourceManager](README.md#const-createresourcemanager)

## Functions

### `Const` createResourceManager

▸ **createResourceManager**<**TKey**, **TResource**>(`createResource`: function, `hash`: function, `scheduler`: SchedulerLike, `options`: object): *[ResourceManagerLike](interfaces/resourcemanagerlike.md)‹TKey, TResource›*

**Type parameters:**

▪ **TKey**

▪ **TResource**: *DisposableLike*

**Parameters:**

▪ **createResource**: *function*

▸ (`key`: TKey): *TResource*

**Parameters:**

Name | Type |
------ | ------ |
`key` | TKey |

▪ **hash**: *function*

▸ (`key`: TKey): *string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | TKey |

▪ **scheduler**: *SchedulerLike*

▪`Default value`  **options**: *object*=  {}

**Returns:** *[ResourceManagerLike](interfaces/resourcemanagerlike.md)‹TKey, TResource›*
