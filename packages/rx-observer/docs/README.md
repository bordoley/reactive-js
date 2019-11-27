[@reactive-js/rx-observer](README.md)

# @reactive-js/rx-observer

## Index

### Enumerations

* [NotificationKind](enums/notificationkind.md)

### Interfaces

* [ObserverLike](interfaces/observerlike.md)

### Type aliases

* [Notification](README.md#notification)

### Functions

* [notify](README.md#const-notify)

## Type aliases

###  Notification

Ƭ **Notification**: *[[Next](enums/notificationkind.md#next), T] | [[Complete](enums/notificationkind.md#complete), Error | undefined]*

Materialized notification

## Functions

### `Const` notify

▸ **notify**<**T**>(`observer`: [ObserverLike](interfaces/observerlike.md)‹T›, `notification`: [Notification](README.md#notification)‹T›): *void*

Notifies the observer with the materialized notification.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [ObserverLike](interfaces/observerlike.md)‹T› | - |
`notification` | [Notification](README.md#notification)‹T› |   |

**Returns:** *void*
