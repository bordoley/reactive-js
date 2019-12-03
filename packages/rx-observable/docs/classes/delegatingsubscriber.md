[@reactive-js/rx-observable](../README.md) › [DelegatingSubscriber](delegatingsubscriber.md)

# Class: DelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperators.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriberImpl‹TA›

  ↳ **DelegatingSubscriber**

## Implements

* SubscriberLike‹TA›

## Index

### Constructors

* [constructor](delegatingsubscriber.md#constructor)

### Properties

* [delegate](delegatingsubscriber.md#delegate)

### Methods

* [onComplete](delegatingsubscriber.md#protected-abstract-oncomplete)
* [onNext](delegatingsubscriber.md#protected-abstract-onnext)

## Constructors

###  constructor

\+ **new DelegatingSubscriber**(`delegate`: SubscriberLike‹TB›): *[DelegatingSubscriber](delegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | SubscriberLike‹TB› |

**Returns:** *[DelegatingSubscriber](delegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *ObserverLike‹TB›*

## Methods

### `Protected` `Abstract` onComplete

▸ **onComplete**(`error?`: ErrorLike): *void*

Override to handle complete notification. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | ErrorLike |   |

**Returns:** *void*

___

### `Protected` `Abstract` onNext

▸ **onNext**(`data`: TA): *void*

Overried to handle incoming next notifications. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | TA |   |

**Returns:** *void*
