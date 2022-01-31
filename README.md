# React-Native Ecommerce App
Simple display and select retail application. 

#### Libaries mainly used
    React-Native, TypeScript, Redux[thunk + persist], StackNavigation, RNsnap-carousel, Jest

### Features 
<details>
* <summary>Listing products by categories</summary>
    <img src = "https://github.com/CPKVG/ecommerce-reactnative-redux/blob/main/assests/readmeGIF/Snap-Carousel-Scroll.gif" alt="Snap-Carousel" width = "40%">
</details>
<details>
* <summary>Dynamic search filter, by productname,description, category or price </summary>
     <img src = "https://github.com/CPKVG/ecommerce-reactnative-redux/blob/main/assests/readmeGIF/Dynamic-search-filter.gif" alt="search filter" width = "40%">
</details>
<details>
* <summary>Responsive category select + integrated with search function</summary>
    <img src = "https://github.com/CPKVG/ecommerce-reactnative-redux/blob/main/assests/readmeGIF/Category-Select.gif" alt="Category Select example" width = "40%">
</details>
 <details>
* <summary>Add/remove product from cart + increase/decrease quantity</summary>
    <img src = "https://github.com/CPKVG/ecommerce-reactnative-redux/blob/main/assests/readmeGIF/Product-Quantity.gif" alt="Product Quantity" width = "40%">
 </details>
<details>
* <summary>Payment processing information</summary>
    <img src = "https://github.com/CPKVG/ecommerce-reactnative-redux/blob/main/assests/readmeGIF/Payment-Info.gif" alt="Payment Info" width = "40%">
 </details>
<details>
* <summary>Page navigation</summary>
    <img src = "https://github.com/CPKVG/ecommerce-reactnative-redux/blob/main/assests/readmeGIF/Page-Navi.gif" alt="Page Navigation" width = "40%">
</details>

##  How to run it

Run ReactNative 
    `react-native run-android`

Run json server 
    `json-server --watch db.json --port 3000`

Json server sometimes does not latch on properly
    `adb reverse tcp:3000 tcp:3000`

Nuke gradlew
    ` cd android `
    `./gradlew clean`

Clear cache
`npm cache clean --force`


## Installation
    `https://reactnative.dev/docs/environment-setup`
### (Express Install) <br/>
`npm install`
    
### (Manual Install)

Json-Mock-Server(as a substitute) <br/>
`npm install -g json-server`
    
Redux
```
npm i react-redux
npm i redux
npm i redux-thunk
npm i redux-persist
```
    
React-Native-Navigator v6 `https://reactnavigation.org/docs/getting-started`
```
npm i @react-navigation/native
npm i @react-navigation/stack
npm i react-native-screens react-native-safe-area-context
```
 
Snap Carousel
```
npm install react-native-snap-carousel
```
    
Testing
```
npm i jest
npm i @testing-library/react-native 
npm i redux-mock-store
```
    

    
## TODO
### Front End
- [X] Homepage category selection
- [X] Carousel category
- [X] Product add cart
- [X] Product detail page -> page navigation
- [X] Cart page
### Testing 
- [X] Testing(76% coverage) - Jest, react-test-renderer, redux-mock-store,
### Back End
- [ ] Restful API using nodejs/express
- [ ] Backend Intergration, prob postgress/mysql
- [ ] Payment intergration, prob Stripe
### misc 
- [ ] Code cleanup


<details>
<summary>Testing Coverage Log</summary>
    
```
-----------------------------------------------------------------|---------|----------|---------|---------|-------------------------
File                                                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
-----------------------------------------------------------------|---------|----------|---------|---------|-------------------------
All files                                                        |   76.83 |    59.64 |    62.5 |   76.13 | 
 ecommerce-reactnative-redux                                     |      80 |       50 |      60 |      80 | 
  App.tsx                                                        |   73.33 |      100 |   42.85 |   73.33 | 66,75,84,93
  RootNavigation.js                                              |   66.66 |       50 |     100 |   66.66 | 15
  test-utils.js                                                  |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/assests/img                         |     100 |      100 |     100 |     100 | 
  Black_t-shirt.png                                              |     100 |      100 |     100 |     100 | 
  Kv1.png                                                        |     100 |      100 |     100 |     100 | 
  Laptop.png                                                     |     100 |      100 |     100 |     100 | 
  Potatos.png                                                    |     100 |      100 |     100 |     100 | 
  RTX3080.png                                                    |     100 |      100 |     100 |     100 | 
  T34-85.png                                                     |     100 |      100 |     100 |     100 | 
  Watties_Beanz.png                                              |     100 |      100 |     100 |     100 | 
  White_t-shirt.png                                              |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/components/cart/cartDetail          |   56.52 |       25 |   18.18 |   54.54 | 
  index.tsx                                                      |   56.52 |       25 |   18.18 |   54.54 | 12,21,25,29,33,45-83,99
 ecommerce-reactnative-redux/components/cart/cartUI              |    87.5 |       50 |     100 |    87.5 | 
  index.tsx                                                      |    87.5 |       50 |     100 |    87.5 | 21
 ecommerce-reactnative-redux/components/checkout/checkOutDetail  |   78.57 |       80 |   77.77 |   78.57 | 
  index.tsx                                                      |   78.57 |       80 |   77.77 |   78.57 | 75-88
 ecommerce-reactnative-redux/components/checkout/checkOutUI      |   86.66 |       50 |     100 |   85.71 | 
  index.tsx                                                      |   86.66 |       50 |     100 |   85.71 | 22,31
 ecommerce-reactnative-redux/components/header                   |    90.9 |       50 |     100 |    90.9 | 
  index.tsx                                                      |    90.9 |       50 |     100 |    90.9 | 23
 ecommerce-reactnative-redux/components/product/ProductDetail    |   88.88 |       50 |     100 |    87.5 | 
  index.tsx                                                      |   88.88 |       50 |     100 |    87.5 | 14                      
 ecommerce-reactnative-redux/components/product/productCategory  |   71.42 |       90 |   33.33 |      76 | 
  index.tsx                                                      |   71.42 |       90 |   33.33 |      76 | 12,50-51,65,71-74      
 ecommerce-reactnative-redux/components/product/productImage     |     100 |      100 |     100 |     100 | 
  index.tsx                                                      |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/components/product/productResult    |   73.33 |       50 |   33.33 |   71.42 | 
  index.tsx                                                      |   73.33 |       50 |   33.33 |   71.42 | 19,35-36,58
 ecommerce-reactnative-redux/components/product/productUI        |   70.37 |       40 |    62.5 |      68 | 
  index.tsx                                                      |   70.37 |       40 |    62.5 |      68 | 21,28,33,41,48-51,64   
 ecommerce-reactnative-redux/components/purchase/purchaseDetails |   66.66 |      100 |       0 |   66.66 | 
  index.tsx                                                      |   66.66 |      100 |       0 |   66.66 | 6
 ecommerce-reactnative-redux/components/search                   |   84.61 |    16.66 |      75 |   83.33 | 
  index.tsx                                                      |   84.61 |    16.66 |      75 |   83.33 | 32-33
 ecommerce-reactnative-redux/layouts                             |   66.66 |      100 |   33.33 |   66.66 | 
  CheckoutPageLayout.tsx                                         |      50 |      100 |       0 |      50 | 9
  HomePageLayout.tsx                                             |     100 |      100 |     100 |     100 | 
  ProductPageLayout.tsx                                          |      50 |      100 |       0 |      50 | 6
 ecommerce-reactnative-redux/pages/cartpage                      |   66.66 |      100 |       0 |   66.66 | 
  index.tsx                                                      |   66.66 |      100 |       0 |   66.66 | 9
 ecommerce-reactnative-redux/pages/checkoutpage                  |   66.66 |      100 |       0 |   66.66 | 
  index.tsx                                                      |   66.66 |      100 |       0 |   66.66 | 6
 ecommerce-reactnative-redux/pages/homepage                      |     100 |      100 |     100 |     100 | 
  index.tsx                                                      |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/pages/productpage                   |      50 |      100 |       0 |      50 | 
  index.tsx                                                      |      50 |      100 |       0 |      50 | 15
 ecommerce-reactnative-redux/pages/purchasepage                  |      50 |      100 |       0 |      50 | 
  index.tsx                                                      |      50 |      100 |       0 |      50 | 7
 ecommerce-reactnative-redux/redux                               |     100 |      100 |     100 |     100 | 
  createStore.tsx                                                |     100 |      100 |     100 |     100 | 
  rootReducer.tsx                                                |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/redux/Cart                          |   71.79 |    26.66 |   84.61 |   67.64 | 
  cart.action.tsx                                                |   69.69 |    16.66 |   83.33 |   64.28 | 17-27,40,86-87
  cart.reducer.tsx                                               |      80 |    66.66 |     100 |      80 | 13                      
  cart.types.tsx                                                 |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/redux/Checkout                      |    86.2 |    80.95 |      70 |      88 | 
  checkout.action.tsx                                            |    90.9 |    88.23 |   66.66 |   94.44 | 6
  checkout.reducer.tsx                                           |   66.66 |       50 |     100 |   66.66 | 12-22
  checkout.types.tsx                                             |     100 |      100 |     100 |     100 | 
 ecommerce-reactnative-redux/redux/Product                       |   68.42 |    57.14 |      90 |    64.7 | 
  product.action.tsx                                             |   65.51 |       50 |   88.88 |      60 | 7-16,30-36,48,81       
  product.reducer.tsx                                            |      75 |    66.66 |     100 |      75 | 15,41
  product.types.tsx                                              |     100 |      100 |     100 |     100 | 
-----------------------------------------------------------------|---------|----------|---------|---------|-------------------------

Test Suites: 15 passed, 15 total
Tests:       40 passed, 40 total
Snapshots:   10 passed, 10 total
Time:        13.656 s
Ran all test suites.
```
</details>