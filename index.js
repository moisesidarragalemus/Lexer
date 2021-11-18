const moo = require('moo')
const { isTypedArray } = require('util/types')

let lexer = moo.compile({
    separador:      /[ \t]+/,
    commentarios: /\-\*.*\*(?<=\*)\-/,
    numerico:  /0|[1-9][0-9]*/,
    cadena:  /"(?:\\["\\]|[^\s"\\])*"/,
    lparen:  '(',
    rparen:  ')',
    lcorche: '$~',
    rcorche: '~$',
    asignacion: '>>',
    reservadas: ['dum', 'ita', 'aliter', 'para', 'filum', 'numero'],
    NL:      { match: /\n/, lineBreaks: true },
  })
