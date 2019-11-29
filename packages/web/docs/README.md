[@reactive-js/web](README.md)

# @reactive-js/web

## Index

### Interfaces

* [Location](interfaces/location.md)

### Functions

* [createLocationStore](README.md#const-createlocationstore)
* [fromEvent](README.md#const-fromevent)

## Functions

### `Const` createLocationStore

▸ **createLocationStore**(`scheduler`: SchedulerLike): *AsyncIteratorResourceLike‹StateUpdater‹[Location](interfaces/location.md)›, [Location](interfaces/location.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *AsyncIteratorResourceLike‹StateUpdater‹[Location](interfaces/location.md)›, [Location](interfaces/location.md)›*

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
