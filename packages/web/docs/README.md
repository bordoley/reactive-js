[@reactive-js/web](README.md)

# @reactive-js/web

## Index

### Interfaces

* [Location](interfaces/location.md)

### Functions

* [createLocationStoreResource](README.md#const-createlocationstoreresource)
* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [fromEvent](README.md#const-fromevent)

## Functions

### `Const` createLocationStoreResource

▸ **createLocationStoreResource**(`scheduler`: SchedulerLike): *StateStoreResourceLike‹[Location](interfaces/location.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *StateStoreResourceLike‹[Location](interfaces/location.md)›*

___

### `Const` createSchedulerWithPriority

▸ **createSchedulerWithPriority**(`priority`: number): *SchedulerLike*

**Parameters:**

Name | Type |
------ | ------ |
`priority` | number |

**Returns:** *SchedulerLike*

___

### `Const` fromEvent

▸ **fromEvent**<**T**>(`target`: EventTarget, `eventName`: string, `selector`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **target**: *EventTarget*

▪ **eventName**: *string*

▪ **selector**: *function*

▸ (`ev`: Event): *T*

**Parameters:**

Name | Type |
------ | ------ |
`ev` | Event |

**Returns:** *ObservableLike‹T›*
