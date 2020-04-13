
# @reactive-js/parser-combinators

## Index

### Interfaces

* [CharStreamLike](interfaces/charstreamlike.md)

### Type aliases

* [CharCode](README.md#charcode)
* [Parser](README.md#parser)

### Variables

* [isParseError](README.md#const-isparseerror)
* [pAsterisk](README.md#const-pasterisk)
* [pCloseParen](README.md#const-pcloseparen)
* [pColon](README.md#const-pcolon)
* [pComma](README.md#const-pcomma)
* [pDash](README.md#const-pdash)
* [pDquote](README.md#const-pdquote)
* [pEquals](README.md#const-pequals)
* [pForwardSlash](README.md#const-pforwardslash)
* [pOpenParen](README.md#const-popenparen)
* [pPeriod](README.md#const-pperiod)
* [pSemicolon](README.md#const-psemicolon)
* [pSpace](README.md#const-pspace)
* [throwParseError](README.md#const-throwparseerror)

### Functions

* [char](README.md#const-char)
* [compute](README.md#const-compute)
* [concat](README.md#concat)
* [createCharStream](README.md#const-createcharstream)
* [eof](README.md#const-eof)
* [flatMap](README.md#const-flatmap)
* [followedBy](README.md#const-followedby)
* [many](README.md#const-many)
* [manySatisfy](README.md#const-manysatisfy)
* [map](README.md#const-map)
* [mapTo](README.md#const-mapto)
* [notFollowedBy](README.md#const-notfollowedby)
* [ofValue](README.md#const-ofvalue)
* [optional](README.md#const-optional)
* [or](README.md#const-or)
* [orDefault](README.md#const-ordefault)
* [pEof](README.md#const-peof)
* [parseWith](README.md#const-parsewith)
* [parseWithOrThrow](README.md#const-parsewithorthrow)
* [regexp](README.md#const-regexp)
* [satisfy](README.md#const-satisfy)
* [sepBy](README.md#const-sepby)
* [sepBy1](README.md#const-sepby1)
* [string](README.md#const-string)
* [throws](README.md#const-throws)

## Type aliases

###  CharCode

Ƭ **CharCode**: *number*

___

###  Parser

Ƭ **Parser**: *function*

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

## Variables

### `Const` isParseError

• **isParseError**: *isParseErrorProd* = 
  process.env.NODE_ENV === "production" ? isParseErrorProd : isParseErrorDev

___

### `Const` pAsterisk

• **pAsterisk**: *function* =  char("*")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pCloseParen

• **pCloseParen**: *function* =  char(")")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pColon

• **pColon**: *function* =  char(":")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pComma

• **pComma**: *function* =  char(",")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pDash

• **pDash**: *function* =  char("-")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pDquote

• **pDquote**: *function* =  char('"')

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pEquals

• **pEquals**: *function* =  char("=")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pForwardSlash

• **pForwardSlash**: *function* =  char("/")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pOpenParen

• **pOpenParen**: *function* =  char("(")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pPeriod

• **pPeriod**: *function* =  char(".")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pSemicolon

• **pSemicolon**: *function* =  char(";")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` pSpace

• **pSpace**: *function* =  char(" ")

#### Type declaration:

▸ (`input`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](interfaces/charstreamlike.md) |

___

### `Const` throwParseError

• **throwParseError**: *throwParseErrorProd* = 
  process.env.NODE_ENV === "production"
    ? throwParseErrorProd
    : throwParseErrorDev

## Functions

### `Const` char

▸ **char**(`c`: string): *[Parser](README.md#parser)‹[CharCode](README.md#charcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

**Returns:** *[Parser](README.md#parser)‹[CharCode](README.md#charcode)›*

___

### `Const` compute

▸ **compute**<**T**>(`f`: function): *[Parser](README.md#parser)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *T*

**Returns:** *[Parser](README.md#parser)‹T›*

___

###  concat

▸ **concat**<**TA**, **TB**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›): *[Parser](README.md#parser)‹[TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB]›*

▸ **concat**<**TA**, **TB**, **TC**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›): *[Parser](README.md#parser)‹[TA, TB, TC]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›, `d`: [Parser](README.md#parser)‹TD›): *[Parser](README.md#parser)‹[TA, TB, TC, TD]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |
`d` | [Parser](README.md#parser)‹TD› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC, TD]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›, `d`: [Parser](README.md#parser)‹TD›, `e`: [Parser](README.md#parser)‹TE›): *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |
`d` | [Parser](README.md#parser)‹TD› |
`e` | [Parser](README.md#parser)‹TE› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›, `d`: [Parser](README.md#parser)‹TD›, `e`: [Parser](README.md#parser)‹TE›, `f`: [Parser](README.md#parser)‹TF›): *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |
`d` | [Parser](README.md#parser)‹TD› |
`e` | [Parser](README.md#parser)‹TE› |
`f` | [Parser](README.md#parser)‹TF› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›, `d`: [Parser](README.md#parser)‹TD›, `e`: [Parser](README.md#parser)‹TE›, `f`: [Parser](README.md#parser)‹TF›, `g`: [Parser](README.md#parser)‹TG›): *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF, TG]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |
`d` | [Parser](README.md#parser)‹TD› |
`e` | [Parser](README.md#parser)‹TE› |
`f` | [Parser](README.md#parser)‹TF› |
`g` | [Parser](README.md#parser)‹TG› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›, `d`: [Parser](README.md#parser)‹TD›, `e`: [Parser](README.md#parser)‹TE›, `f`: [Parser](README.md#parser)‹TF›, `g`: [Parser](README.md#parser)‹TG›, `h`: [Parser](README.md#parser)‹TH›): *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |
`d` | [Parser](README.md#parser)‹TD› |
`e` | [Parser](README.md#parser)‹TE› |
`f` | [Parser](README.md#parser)‹TF› |
`g` | [Parser](README.md#parser)‹TG› |
`h` | [Parser](README.md#parser)‹TH› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [Parser](README.md#parser)‹TA›, `b`: [Parser](README.md#parser)‹TB›, `c`: [Parser](README.md#parser)‹TC›, `d`: [Parser](README.md#parser)‹TD›, `e`: [Parser](README.md#parser)‹TE›, `f`: [Parser](README.md#parser)‹TF›, `g`: [Parser](README.md#parser)‹TG›, `h`: [Parser](README.md#parser)‹TH›, `i`: [Parser](README.md#parser)‹TI›): *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](README.md#parser)‹TA› |
`b` | [Parser](README.md#parser)‹TB› |
`c` | [Parser](README.md#parser)‹TC› |
`d` | [Parser](README.md#parser)‹TD› |
`e` | [Parser](README.md#parser)‹TE› |
`f` | [Parser](README.md#parser)‹TF› |
`g` | [Parser](README.md#parser)‹TG› |
`h` | [Parser](README.md#parser)‹TH› |
`i` | [Parser](README.md#parser)‹TI› |

**Returns:** *[Parser](README.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` createCharStream

▸ **createCharStream**(`input`: string): *[CharStreamLike](interfaces/charstreamlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *[CharStreamLike](interfaces/charstreamlike.md)*

___

### `Const` eof

▸ **eof**<**T**>(`parser`: [Parser](README.md#parser)‹T›): *[Parser](README.md#parser)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parser` | [Parser](README.md#parser)‹T› |

**Returns:** *[Parser](README.md#parser)‹T›*

___

### `Const` flatMap

▸ **flatMap**<**TA**, **TB**>(`mapper`: function): *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *[Parser](README.md#parser)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TB››*

___

### `Const` followedBy

▸ **followedBy**(`pnext`: [Parser](README.md#parser)‹unknown›): *[Parser](README.md#parser)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`pnext` | [Parser](README.md#parser)‹unknown› |

**Returns:** *[Parser](README.md#parser)‹unknown›*

___

### `Const` many

▸ **many**<**T**>(`options`: object): *Operator‹[Parser](README.md#parser)‹T›, [Parser](README.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object |  {} |

**Returns:** *Operator‹[Parser](README.md#parser)‹T›, [Parser](README.md#parser)‹keyof T[]››*

___

### `Const` manySatisfy

▸ **manySatisfy**(`options`: object): *Operator‹[Parser](README.md#parser)‹[CharCode](README.md#charcode)›, [Parser](README.md#parser)‹string››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object |  {} |

**Returns:** *Operator‹[Parser](README.md#parser)‹[CharCode](README.md#charcode)›, [Parser](README.md#parser)‹string››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TB››*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TB››*

___

### `Const` notFollowedBy

▸ **notFollowedBy**(`pnext`: [Parser](README.md#parser)‹unknown›): *[Parser](README.md#parser)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`pnext` | [Parser](README.md#parser)‹unknown› |

**Returns:** *[Parser](README.md#parser)‹unknown›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T): *[Parser](README.md#parser)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Parser](README.md#parser)‹T›*

___

### `Const` optional

▸ **optional**<**T**>(`parse`: [Parser](README.md#parser)‹T›): *[Parser](README.md#parser)‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](README.md#parser)‹T› |

**Returns:** *[Parser](README.md#parser)‹T | undefined›*

___

### `Const` or

▸ **or**<**TA**, **TB**>(`otherParse`: [Parser](README.md#parser)‹TB›): *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TA | TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`otherParse` | [Parser](README.md#parser)‹TB› |

**Returns:** *Operator‹[Parser](README.md#parser)‹TA›, [Parser](README.md#parser)‹TA | TB››*

___

### `Const` orDefault

▸ **orDefault**<**T**>(`default_`: T): *Operator‹[Parser](README.md#parser)‹T | undefined›, [Parser](README.md#parser)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`default_` | T |

**Returns:** *Operator‹[Parser](README.md#parser)‹T | undefined›, [Parser](README.md#parser)‹T››*

___

### `Const` pEof

▸ **pEof**(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)): *undefined*

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md) |

**Returns:** *undefined*

___

### `Const` parseWith

▸ **parseWith**<**T**>(`parse`: [Parser](README.md#parser)‹T›): *Operator‹string, T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](README.md#parser)‹T› |

**Returns:** *Operator‹string, T | undefined›*

___

### `Const` parseWithOrThrow

▸ **parseWithOrThrow**<**T**>(`parse`: [Parser](README.md#parser)‹T›): *Operator‹string, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](README.md#parser)‹T› |

**Returns:** *Operator‹string, T›*

___

### `Const` regexp

▸ **regexp**(`input`: string, `options`: object): *[Parser](README.md#parser)‹string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | string | - |
`options` | object |  {} |

**Returns:** *[Parser](README.md#parser)‹string›*

___

### `Const` satisfy

▸ **satisfy**(`f`: function): *[Parser](README.md#parser)‹[CharCode](README.md#charcode)›*

**Parameters:**

▪ **f**: *function*

▸ (`char`: [CharCode](README.md#charcode)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`char` | [CharCode](README.md#charcode) |

**Returns:** *[Parser](README.md#parser)‹[CharCode](README.md#charcode)›*

___

### `Const` sepBy

▸ **sepBy**<**T**>(`separator`: [Parser](README.md#parser)‹unknown›): *Operator‹[Parser](README.md#parser)‹T›, [Parser](README.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [Parser](README.md#parser)‹unknown› |

**Returns:** *Operator‹[Parser](README.md#parser)‹T›, [Parser](README.md#parser)‹keyof T[]››*

___

### `Const` sepBy1

▸ **sepBy1**<**T**>(`separator`: [Parser](README.md#parser)‹unknown›): *Operator‹[Parser](README.md#parser)‹T›, [Parser](README.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [Parser](README.md#parser)‹unknown› |

**Returns:** *Operator‹[Parser](README.md#parser)‹T›, [Parser](README.md#parser)‹keyof T[]››*

___

### `Const` string

▸ **string**(`str`: string): *[Parser](README.md#parser)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[Parser](README.md#parser)‹string›*

___

### `Const` throws

▸ **throws**<**T**>(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md) |

**Returns:** *T*
