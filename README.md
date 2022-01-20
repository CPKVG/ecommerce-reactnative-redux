
Run ReactNative 
    `react-native run-android`

Run json server 
    `json-server --watch db.json --port 3000`

Json server trouble shoot
    `adb reverse tcp:3000 tcp:3000`

Nuke gradlew
    ` cd android `
    `./gradlew clean`

make sure its dead
`npm cache clean --force`


Installation
    `https://reactnative.dev/docs/environment-setup`
dependencies 
    (if you want to install all dependancies)
    `npm install`

    `npm install -g json-server`
    `npm i react-redux`
    Redux
    `npm i redux`
    `npm i redux-thunk`
    `npm install redux-persist`
    React-Native-Navigator v6 `https://reactnavigation.org/docs/getting-started`
    `npm i @react-navigation/native`
    `npm install react-native-screens react-native-safe-area-context`
    <!-- `npm install @react-navigation/stack` -->
    `npm install @react-navigation/native-stack`
     for testing 
    <!-- 'npm i enzyme'
    'npm i jest-enzyme'
    'npm i @wojtekmaj/enzyme-adapter-react-17' -->
    
    snap Carousel 
    `npm install react-native-snap-carousel`


TO DO LIST
    1) Homepage category selection (X)
    2) Carousel category (X)
    3) Product add cart (x)
    4) product detail page -> page navigation (x)
    5) Cart page (x)
    6) Testing 

Features 
    1) Dynamic search filter
    2) Responsive category select + integrated with search function
    3) Page navigation
    4) CheckOut page
    5) Easy to configure backend