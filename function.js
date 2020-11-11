function sum(a, b) {
    return(a + b);
}

function sub(a, b) {
    var f = a - b;
    return f;
}

function mul(a, b) {
    return(a * b);
}

function div(a, b) {
    return (a / b);
}

function persent(c,d) {
    return ((c*d)/100);
}

function integerDiv(c, d) {
    return ((c - c % d) / d);
}

function abs(c) {
    if (c < 0) {
        c *= -1;
    }
    return (c);
}

function sqrt(c) {
    return (c ** (1/2));
}

function factorial(z) {
    result = 1;
    for (i = 1; i <= z; i++) {
        result = result * i;
    }
return (result);
}
    

function round(c) {
   if ((c%1) !== 0){
       if ((c%1) >= 0.5){
          f=((c - c % 1) / 1);  
          c-=f+1;
        }
        if ((c%1) < 0.5){
        f=((c - c % 1) / 1);  
        c-=f;
      }}
return(c);
}

function sin(x, z) {
    Sin = 1;
    n = 0;
    term = 1;
    for (i = 1; i <= 2*z; i++) {
        n += 2;
        term = term *(-x*x)/ ( n*(n+1) );
        Sin += term;
    }
    Sin *= x;
    return(Sin);
}

function cos(x, z) {
    s = 0;
    n = 0;
    term = 1
    while(term > z) {
      s += term;
      n++;
      term *= -x * x / (2 * n - 1) / (2 * n)
    }
    return (s);
  }
   
/*    TG         */

function tg(x, z) {
    Sin = 1;
    n = 0;
    term = 1;
    for (i = 1; i <= 2*z; i++) {
        n += 2;
        term = term *(-x*x)/ ( n*(n+1) );
        Sin += term;
    }
    Sin *= x;
s = 0;
while(term > z) {
  s += term;
  n++;
  term *= -x * x / (2 * n - 1) / (2 * n)
}
return (Sin/s)
}

/*   CTG         */

function ctg(x, z) {
    Sin = 1;
    n = 0;
    term = 1;
    for (i = 1; i <= 2*z; i++) {
        n += 2;
        term = term *(-x*x)/ ( n*(n+1) );
        Sin += term;
    }
    Sin *= x;
s = 0;
while(term > z) {
  s += term;
  n++;
  term *= -x * x / (2 * n - 1) / (2 * n)
}
return (s/Sin)
}

