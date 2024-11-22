const mockQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choice1: "<script>",
      choice2: "<javascript>",
      choice3: "<js>",
      choice4: "<scripting>",
      answer: 1,
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choice1: "<script href='xxx.js'>",
      choice2: "<script name='xxx.js'>",
      choice3: "<script src='xxx.js'>",
      choice4: "<script file='xxx.js'>",
      answer: 3,
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      choice1: "msgBox('Hello World');",
      choice2: "alertBox('Hello World');",
      choice3: "msg('Hello World');",
      choice4: "alert('Hello World');",
      answer: 4,
    },
    {
      question: "Which programming language is primarily used for web development?",
      choice1: "Java",
      choice2: "Python",
      choice3: "JavaScript",
      choice4: "C++",
      answer: 3,
    },
    {
      question: "What is the correct way to declare a JavaScript variable?",
      choice1: "variable carName;",
      choice2: "var carName;",
      choice3: "v carName;",
      choice4: "var:carName;",
      answer: 2,
    },
    {
      question: "What does CSS stand for?",
      choice1: "Colorful Style Sheets",
      choice2: "Creative Style Sheets",
      choice3: "Cascading Style Sheets",
      choice4: "Computer Style Sheets",
      answer: 3,
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      choice1: "<style>",
      choice2: "<css>",
      choice3: "<script>",
      choice4: "<stylesheet>",
      answer: 1,
    },
    {
      question: "Which is the correct CSS syntax?",
      choice1: "body {color: black;}",
      choice2: "{body:color=black;}",
      choice3: "body:color=black;",
      choice4: "{body;color:black;}",
      answer: 1,
    },
    {
      question: "Which property is used to change the background color?",
      choice1: "bgcolor",
      choice2: "color",
      choice3: "background-color",
      choice4: "background",
      answer: 3,
    },
    {
      question: "How do you add a comment in CSS?",
      choice1: "// this is a comment",
      choice2: "/* this is a comment */",
      choice3: "' this is a comment",
      choice4: "// this is a comment //",
      answer: 2,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      choice1: "style",
      choice2: "styles",
      choice3: "font",
      choice4: "class",
      answer: 1,
    },
    {
      question: "Which JavaScript method is used to write HTML output?",
      choice1: "document.write()",
      choice2: "console.log()",
      choice3: "window.print()",
      choice4: "alert()",
      answer: 1,
    },
    {
      question: "What is the HTML tag for creating a hyperlink?",
      choice1: "<link>",
      choice2: "<a>",
      choice3: "<href>",
      choice4: "<hyperlink>",
      answer: 2,
    },
    {
      question: "What does SQL stand for?",
      choice1: "Structured Query Language",
      choice2: "Stylized Query Language",
      choice3: "Strong Question Language",
      choice4: "Simple Query Language",
      answer: 1,
    },
    {
      question: "Which is the correct SQL statement to select all records from a table named 'Customers'?",
      choice1: "SELECT * FROM Customers;",
      choice2: "SELECT FROM Customers;",
      choice3: "SELECT ALL FROM Customers;",
      choice4: "SELECT EVERY RECORD Customers;",
      answer: 1,
    },
    {
      question: "Which JavaScript keyword is used to declare a constant?",
      choice1: "var",
      choice2: "let",
      choice3: "constant",
      choice4: "const",
      answer: 4,
    },
    {
      question: "What does JSON stand for?",
      choice1: "JavaScript Object Notation",
      choice2: "JavaScript Online Notation",
      choice3: "Java Syntax Object",
      choice4: "JavaScript Online Object",
      answer: 1,
    },
    {
      question: "Which company developed JavaScript?",
      choice1: "Microsoft",
      choice2: "Netscape",
      choice3: "Oracle",
      choice4: "Google",
      answer: 2,
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      choice1: "<bottom>",
      choice2: "<footer>",
      choice3: "<section>",
      choice4: "<foot>",
      answer: 2,
    },
    {
      question: "How can you make a list that lists the items with bullets?",
      choice1: "<list>",
      choice2: "<ul>",
      choice3: "<ol>",
      choice4: "<dl>",
      answer: 2,
    },
    {
      question: "Which property is used to change the font of an element in CSS?",
      choice1: "font-style",
      choice2: "font-weight",
      choice3: "font-family",
      choice4: "font-size",
      answer: 3,
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      choice1: "onchange",
      choice2: "onmouseclick",
      choice3: "onmouseover",
      choice4: "onclick",
      answer: 4,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      choice1: "/* comment */",
      choice2: "// comment",
      choice3: "' comment",
      choice4: "<!-- comment -->",
      answer: 2,
    },
    {
      question: "Which HTML element is used for the largest heading?",
      choice1: "<h6>",
      choice2: "<heading>",
      choice3: "<h1>",
      choice4: "<h2>",
      answer: 3,
    },
    {
      question: "How do you define an array in JavaScript?",
      choice1: "var arr = '1, 2, 3'",
      choice2: "var arr = [1, 2, 3]",
      choice3: "var arr = (1, 2, 3)",
      choice4: "var arr = {1, 2, 3}",
      answer: 2,
    },
    {
      question: "How do you create a function in JavaScript?",
      choice1: "function myFunction()",
      choice2: "create function myFunction()",
      choice3: "function = myFunction()",
      choice4: "function:myFunction()",
      answer: 1,
    },
    {
      question: "Which of the following is not a programming language?",
      choice1: "Python",
      choice2: "Ruby",
      choice3: "HTML",
      choice4: "Swift",
      answer: 3,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      choice1: "<lb>",
      choice2: "<break>",
      choice3: "<br>",
      choice4: "<line>",
      answer: 3,
    },
    {
      question: "What is the correct way to write an array in JavaScript?",
      choice1: "var colors = ['red', 'green', 'blue']",
      choice2: "var colors = (red, green, blue)",
      choice3: "var colors = {red, green, blue}",
      choice4: "var colors = <red, green, blue>",
      answer: 1,
    },
    {
      question: "Which company developed the C programming language?",
      choice1: "Microsoft",
      choice2: "Apple",
      choice3: "Bell Labs",
      choice4: "Google",
      answer: 3,
    },
    {
      question: "How can you add a comment in HTML?",
      choice1: "<!-- comment -->",
      choice2: "// comment",
      choice3: "' comment",
      choice4: "/* comment */",
      answer: 1,
    },
    {
      question: "Which of the following is not a NoSQL database?",
      choice1: "MongoDB",
      choice2: "Cassandra",
      choice3: "MySQL",
      choice4: "CouchDB",
      answer: 3,
    },
    {
      question: "What does HTTP stand for?",
      choice1: "HyperText Transfer Protocol",
      choice2: "HyperText Transport Protocol",
      choice3: "HyperLink Transfer Protocol",
      choice4: "HyperLink Transport Protocol",
      answer: 1,
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      choice1: "title",
      choice2: "alt",
      choice3: "src",
      choice4: "href",
      answer: 2,
    },
    {
      question: "What does CSS stand for?",
      choice1: "Cascading Style Sheets",
      choice2: "Creative Style Sheets",
      choice3: "Colorful Style Sheets",
      choice4: "Computer Style Sheets",
      answer: 1,
    },
    {
      question: "Which protocol is used for secure communication over a computer network?",
      choice1: "FTP",
      choice2: "SSH",
      choice3: "HTTP",
      choice4: "SMTP",
      answer: 2,
    },
    {
      question: "Which symbol is used to denote IDs in CSS?",
      choice1: "#",
      choice2: ".",
      choice3: "@",
      choice4: "$",
      answer: 1,
    },
    {
      question: "Which symbol is used to denote classes in CSS?",
      choice1: ".",
      choice2: "#",
      choice3: "@",
      choice4: "%",
      answer: 1,
    },
    {
      question: "Which HTML element is used to define important text?",
      choice1: "<strong>",
      choice2: "<i>",
      choice3: "<b>",
      choice4: "<important>",
      answer: 1,
    },
    {
      question: "Which of the following is a valid JavaScript data type?",
      choice1: "string",
      choice2: "method",
      choice3: "component",
      choice4: "object",
      answer: 4,
    },
    {
      question: "Which JavaScript method is used to round a number to the nearest integer?",
      choice1: "Math.round()",
      choice2: "Math.ceil()",
      choice3: "Math.floor()",
      choice4: "Math.random()",
      answer: 1,
    },
    {
      question: "How do you add an external JavaScript file in HTML?",
      choice1: "<script src='file.js'>",
      choice2: "<script href='file.js'>",
      choice3: "<link src='file.js'>",
      choice4: "<link href='file.js'>",
      answer: 1,
    },
    {
      question: "How do you call a function in JavaScript?",
      choice1: "myFunction{}",
      choice2: "myFunction[]",
      choice3: "myFunction()",
      choice4: "myFunction<>",
      answer: 3,
    },
    {
      question: "What is the correct syntax for a for loop in JavaScript?",
      choice1: "for (i = 0; i <= 5)",
      choice2: "for i = 1 to 5",
      choice3: "for (i <= 5; i++)",
      choice4: "for (i = 0; i <= 5; i++)",
      answer: 4,
    },
    {
      question: "How do you declare a JavaScript variable?",
      choice1: "v carName;",
      choice2: "variable carName;",
      choice3: "var carName;",
      choice4: "var:carName;",
      answer: 3,
    },
    {
      question: "Which of the following is not a valid JavaScript operator?",
      choice1: "++",
      choice2: "--",
      choice3: "//",
      choice4: "**",
      answer: 3,
    },
  ];
  
  export default mockQuestions;
  