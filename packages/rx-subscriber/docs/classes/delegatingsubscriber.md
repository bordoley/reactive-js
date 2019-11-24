[@reactive-js/rx-subscriber](../README.md) › [DelegatingSubscriber](delegatingsubscriber.md)

# Class: DelegatingSubscriber <**TA, TB**>

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubjectImpl‹TA›

  ↳ **DelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](delegatingsubscriber.md#constructor)

### Properties

* [delegate](delegatingsubscriber.md#delegate)

### Accessors

* [isConnected](delegatingsubscriber.md#isconnected)

### Methods

* [complete](delegatingsubscriber.md#complete)
* [next](delegatingsubscriber.md#next)
* [onComplete](delegatingsubscriber.md#protected-abstract-oncomplete)
* [onNext](delegatingsubscriber.md#protected-abstract-onnext)

## Constructors

###  constructor

\+ **new DelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[DelegatingSubscriber](delegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[DelegatingSubscriber](delegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *ObserverLike‹TB›*

## Accessors

###  isConnected

• **get isConnected**(): *boolean*

*Overrides void*

**Returns:** *boolean*

## Methods

###  complete

▸ **complete**(`error?`: Error): *void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** *void*

___

###  next

▸ **next**(`data`: TA): *void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TA |

**Returns:** *void*

___

### `Protected` `Abstract` onComplete

▸ **onComplete**(`error?`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** *void*

___

### `Protected` `Abstract` onNext

▸ **onNext**(`data`: TA): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TA |

**Returns:** *void*
