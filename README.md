# How to

Follow the steps below to install and run this project.

1. Install by running npm install
```
npm ci
```

2. Install husky to avoid untested commits, with this, before each commit, git will run test, lint and build to check if the code works.
```
npm run prepare
```

3. Now you are able to run the project, there are several options to run it.

  + ```npm run start:dev```
    + This allows you to make changes to the code and see its execution in real time.
  + ```npm run start:dev:no-color```
    + Same as the first, but disables the colors in the output.
  + ```npm run build:start:```
    + This compiles the code from Typescript to Javascript and runs it automatically. This generates the ```dist``` folder.
  + ```npm run build:start:no-color```
    + Like the last one, this compiles the code and runs it automatically. The output will not have colors.
  + ```npm start```
    + This can only be run after running ```npm run build```.

### There are other scripts:
  + ```npm test```
    + This runs Jest tests, they should pass.
  + ```npm run coverage```
    + This shows the coverage of the tests.
  + ```npm run lint```
    + This shows the code smells with styles and try to fix them.
  + ```npm run build```
    + This compiles the code from Typescript to Javascript without running it. This generates the ```dist``` folder.



## Technical requeriments

+ NodeJS - v18


# Test

Part 1: Fees

The file fees.json describes fees that are applied to different types of items in an order. Each type of item in a order can have one or more fees associated with it.
The total cost for the order item is the aggregate of all of fees associated with that item. There are different types of fees. Flat fees are simply a single charge. Per-page fees add an additional fee on top of a flat fee for each page after the first.

Challenge:

Write Javascript that outputs to the console the prices for each order item and order in the orders.json file based on the fees in the fees.json file. 

The output should be of the form:  
```
Order ID: <order number>  
   Order item <n>: $<price>  
   ..
   ..

   Order total: <total>
```


Part 2: Distributions

Each fee has a set of funds associated with it. The money associated with each fee is split among the funds based on the amount specified in the distribution. Any extra money associated with the order that isn't allocated to a fund should be assigned to a generic "Other" fund.

Challenge:

Write Javascript that outputs to the console the fund distributions for each order in the orders.json file, and then output the totals in each fund after processing all orders.

The output should be of the form:  
```
Order ID: <order number>  
  Fund - <fund_n>: $<amount>
  Fund - <fund_m>: $<amount>
  ..  
  ..  

Order ID: <order number>
  Fund - <fund_n>: $<amount>
  Fund - <fund_m>: $<amount>
  ..  
  ..  
  ..  

Total distributions:
  Fund - <fund_n>: $<amount>
  Fund - <fund_m>: $<amount>
  ..  
  ..  
```


Returning the completed challenge:

You may choose to send us a link to a public cloud file-sharing service (google drive, dropbox, etc), or you can send an invitation to view a private github repository with your solution.  The link you provide may be used by multiple individuals from our team, so make sure your link is not limited one person.