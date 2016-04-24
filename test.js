import isAlpha from './index';
import test from 'ava';

[
  { value: `127.0.0.1`, expected: true },
  { value: `452.22.2`, expected: false },
  { value: `192.168.1.1`, expected: true },
  { value: `912.456.123.123`, expected: false },
  { value: `000.0000.00.0`, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'isvalidIP'), Case.expected)) );

[
  { value: `!23rt.com`, expected: false },
  { value: `google.com`, expected: true },
  { value: `jkdd@dks.co`, expected: false },
  { value: `test.foo.bar`, expected: true }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'isvalidHOST'), Case.expected)) );

[
  { value: `00236a2ae558018ed13b5222ef1bd977`, expected: true },
  { value: `boobba`, expected: false },
  { value: `bar!34`, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'isvalidMD5'), Case.expected)) );

[
  { value: `Dude bro....`, expected: true },
  { value: `Hello 1 am an a1phanum3ric string`, expected: true },
  { value: `Hello dude I am also a string with punctuations, and stuff`, expected: true },
  { value: `\t#include<iostream.h>\n\tint main()\n\t{\n\t\treturn (0);\n\t}`, expected: true },
  { value: `Hello @bogas04, some #LSBD shit going on.`, expected: true },
  { value: ``, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'devCode'), Case.expected)) );

[
  { value: `Dude bro....`, expected: false },
  { value: `STRING`, expected: true },
  { value: `Hello dude I am also a string with punctuations; & stuff`, expected: false },
  { value: ``, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'upAlpha'), Case.expected)) );

[
  { value: `dudebro`, expected: true },
  { value: `Hello 1 am an a1phanum3ric string`, expected: false },
  { value: `Hello dude I am also a string with punctuations; & stuff`, expected: false },
  { value: ``, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'lowAlpha'), Case.expected)) );

[
  { value: `32486359`, expected: true },
  { value: `Hello 1 am an a1phanum3ric string`, expected: false },
  { value: `Hello 007`, expected: false },
  { value: ``, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'digits'), Case.expected)) );

[
  { value: `Dudebro`, expected: true },
  { value: `Hello1ama1phanum3ricstring`, expected: true },
  { value: `Hello dude I am also a string with punctuations; & stuff`, expected: false },
  { value: ``, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value, 'alphaNum'), Case.expected)) );

[
  { value: `Dude bro....`, expected: true },
  { value: `Hello 1 am an a1phanum3ric string`, expected: false },
  { value: `Hello dude I am also a string with punctuations; & stuff`, expected: true },
  { value: ``, expected: false }
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value), Case.expected)) );
