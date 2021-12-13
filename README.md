# The emoji searcher app.
lets you search list emoji by keyword.

# Architecture considerations.
Considering the user's network speed, I improved the performance by not showing the entire emoji; I introduced pagination by showing an initial paginated list of 10 emojis. The user can search by keywords if they need to get more results. 

Also, for a better user experience, I did not use the standard method of searching with a search button by introducing the concept of debouncing, which is a way of improving performance.

## to run the project

In the project directory, you can run.

### `yarn install`

To start the application.
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.