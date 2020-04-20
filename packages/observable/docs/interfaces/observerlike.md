[@reactive-js/observable - v0.0.35](../README.md) › [ObserverLike](observerlike.md)

# Interface: ObserverLike <**T**>

An observer of push-based notifications within an observable source.

## Type parameters

▪ **T**

## Hierarchy

* **ObserverLike**

## Index

### Methods

* [onDispose](observerlike.md#ondispose)
* [onNotify](observerlike.md#onnotify)

## Methods

###  onDispose

▸ **onDispose**(`error?`: Exception): *void*

Notifies the observer that the provider has finished sending push-based notifications.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | Exception | If present, indicates that the provider experienced an error condition.  |

**Returns:** *void*

___

###  onNotify

▸ **onNotify**(`next`: T): *void*

Provides the observer with the next item to observe.

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *void*
