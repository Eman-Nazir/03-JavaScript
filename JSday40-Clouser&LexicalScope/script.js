function runLexical() {
  console.log("Lexical Scope")

  function outer() {
    let name = "Eman"
    function inner() {
      console.log("Hello " + name)
    }
    inner()
  }
  outer()

  function one() {
    let a = "A"
    function two() {
      let b = "B"
      function three() {
        let c = "C"
        console.log(a, b, c)
      }
      three()
    }
    two()
  }
  one()
}

function runClosure() {
  console.clear()
  console.log("Closure Examples")

  function makeCounter() {
    let count = 0
    return function() {
      count++
      console.log("Count:", count)
    }
  }

  const counter = makeCounter()
  counter()
  counter()
  counter()

  const counterA = makeCounter()
  const counterB = makeCounter()
  counterA()
  counterB()
  counterA()
  counterB()

  function makeAdder(x) {
    return function(y) {
      console.log(x + y)
    }
  }

  const add5 = makeAdder(5)
  const add10 = makeAdder(10)
  add5(2)
  add10(3)
}

function runPractice() {
  console.clear()
  console.log("Practice Examples")

  function greet(language) {
    return function(name) {
      if (language === "english") console.log("Hello " + name)
      if (language === "urdu") console.log("Assalam o Alaikum " + name)
    }
  }

  const greetEng = greet("english")
  const greetUrdu = greet("urdu")
  greetEng("Eman")
  greetUrdu("Sara")

  function bank() {
    let balance = 0
    return {
      deposit(amount) {
        balance += amount
        console.log("Deposited", amount, "New balance:", balance)
      },
      withdraw(amount) {
        balance -= amount
        console.log("Withdrew", amount, "New balance:", balance)
      },
      show() {
        console.log("Balance:", balance)
      }
    }
  }

  const myBank = bank()
  myBank.deposit(100)
  myBank.withdraw(30)
  myBank.show()

  function outer() {
    let outerValue = "I am outer"
    function inner() {
      console.log("Inner can see:", outerValue)
    }
    return inner
  }

  const see = outer()
  see()
}
