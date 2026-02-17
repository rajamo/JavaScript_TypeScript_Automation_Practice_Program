/// Node.js -- > Its is JS Engine for V8 based JS code run. 
// provide V8 engine based on Google to execute JS scripts. 
// All browser has own JS Engine ; Chrome - V8; FF - SpiderMonkey; Edge - V8; Safari - Nitro
// Install by windwos click ; Version node -v; 

//1. node -v  [run JS code]
//2. npm -v [ Install packages/tools from App Store like npm install Playwright] Node Package Manager. This use package.json for tracking installed tools
//3. npx [ Run the installed tools without install globally  ]

// For normal simple Cold code V8 process as follow 
// ** JS code > Parser > AST Abstruct Syntax Tree > Interpreter > Byte Code  == Take quick time 
//Else Hot code big loops , long code
// ** JS code > Parser > AST Abstruct Syntax Tree > Interpreter > Compiler Turbo FAN > Optimized Machine Code > Byte Code == Takes long Time

// Parser = JS is Run Time script so Parser only check and basic error while type code 
// AST = When run JS code that time only remain all Error will be checked.


