PR['registerLangHandler'](
  PR['createSimpleLexer'](
    [
      // Whitespace
      [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
      // Double quoted strings, but single quotes must be ONE char to not whack attributes
      [PR['PR_STRING'], /^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\']|\\.)')/, null, '"\'']
    ],
    [
      [PR['PR_COMMENT'], /^(?:--[^\r\n]*)/],
      [PR['PR_KEYWORD'], /^(?:abort|begin|elsif|in|others|rem|terminate|abs|body|end|is|out|renames|then|abstract|case|entry|limited|package|requeue|type|accept|constant|exception|loop|pragma|return|until|access|declare|entry|mod|private|reverse|use|aliased|delay|for|new|procedure|select|when|all|delta|function|not|protected|seperate|while|and|digits|generic|null|raise|subtype|with|array|do|goto|of|range|tagged|xor|at|else|if|or|record|task)\b/i],
      // Numbers not yet done.
      [PR['PR_LITERAL'], /^[+-]?(?:\d\d?#[\da-f]+#|(?:\d+(?:\.\d+)?)(?:e[+\-]?\d+)?)/i],
      [PR['PR_PLAIN'], /^[a-z_][\w]*/i],
      [PR['PR_PUNCTUATION'], /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]
    ]),
  ['ada']);
