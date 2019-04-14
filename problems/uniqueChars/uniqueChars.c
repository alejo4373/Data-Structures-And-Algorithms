#include <stdio.h>
#include <stdlib.h>

#define WORDSIZE 32
#define BITS_WS 5
#define MASK 0x1f

int initbv(int **bv, int val)
{
  *bv = calloc(val/WORDSIZE + 1, sizeof(int));
  return *bv != NULL;
}

void set (int *bv, int i)
{
  bv[i>>BITS_WS] |= (1 << (i & MASK));
}

int member(int *bv, int i)
{
  return bv[i>>BITS_WS] & (1 << (i & MASK));
}

int main(void)
{
  int *bv;
  char *str = " !\"";

  // printf("%s", str);
  printf("=> %p, Address of bv\n", (void *)&bv);
  printf("=> %p, Value hold in bv\n", (void *)bv);
  initbv(&bv, 127);
  printf("=> %p, Value hold in bv after setting\n", (void *)bv);

  for(int i = 0; str[i]; i++)
  {
    set(bv, str[i]);
  }
  printf("=> bv[1] = %i\n", bv[1]);
  printf("32 << 5 = %i", 32>>5);
  return 0;
}