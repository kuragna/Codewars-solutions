// link: https://www.codewars.com/kata/526571aae218b8ee490006f4/train/c
#include <stddef.h>

size_t countBits(unsigned value)
{
  int bit;
  int re;

  re = 0;
  while (value != 0)
  {
    bit = (value % 2);
    if (bit == 1)
      re += 1;
    value /= 2;
  }
  return (re);
}
