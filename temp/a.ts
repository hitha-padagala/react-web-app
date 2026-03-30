function f2() {
  let ch = "a";
  let s = "abc";
  let isMale = true;
  let age = 18;

  console.log(typeof ch, ch);
  console.log(typeof s, s);
  console.log(typeof isMale, isMale);
  console.log(typeof age, age);

  // age = "abc";
  console.log(typeof age, age);

  if (1) {
    let s = "abc";
    console.log(s);
  }
}

f2();
