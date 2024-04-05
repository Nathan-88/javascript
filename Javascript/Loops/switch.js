let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
/**
 * Here the switch starts to compare a from the first case variant that is 3. The match fails.
 * Then 4. That’s a match, so the execution starts from case 4 until the nearest break.
 * If there is no break then the execution continues with the next case without any checks.
 * Let’s emphasize that the equality check is always strict. The values must be of the same type
 * to match.
 */