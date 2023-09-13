function exec(n: number, first = 1, second = 1): number {
  if (n === 1) return first;
  return exec(n - 1, second, first + second);
}

function main(n: number) {
  console.time(`CALC FIBONAXI n=${n}`);
  const res = exec(n);
  console.log(res);
  console.timeEnd(`CALC FIBONAXI n=${n}`);
}

main(1000);
