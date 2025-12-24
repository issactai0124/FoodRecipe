# FoodRecipe

## Description

This repository is a practice project from the ["React Native: Developing Android and iOS Apps"] (https://www.coursera.org/learn/react-native-developing-android-and-ios-apps) course by IBM on Coursera. It is a fully functional recipe application built with React Native, designed to provide a seamless user experience for discovering, adding, and managing favorite recipes.

## Features

### Main Feed

- Scrollable main page displaying recipes shared by all users.
- Each recipe shows an image of the dish and its name.
- Horizontal scroll bar at the top with various dish categories for easy exploration.

### Recipe Details

- Detailed view of selected recipes including:
  - Dish image
  - Complete list of ingredients
  - Step-by-step cooking instructions
  - Additional information: preparation time, servings, calories, and difficulty level
- Favorite toggle button to save or remove recipes from favorites.

### Favorites Section

- Accessible via the category bar.
- Stores favorite recipes for quick access.
- Easy browsing and management of saved recipes.

### My Food

- Personal recipe collection section.
- Option to add new recipes.

### My Recipes Section

- Add new recipes by:
  - Uploading a dish image
  - Inputting recipe name, ingredients, and steps
  - Publishing to your personal collection
- Edit or delete personal recipes for full control.

### Additional Features

- Back button on every page for seamless navigation.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/FoodRecipe.git
   cd FoodRecipe
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. For iOS (macOS only):

   ```
   cd ios && pod install && cd ..
   ```

4. Run the app:
   - For Android: `npx react-native run-android`
   - For iOS: `npx react-native run-ios`

## Technologies Used

- React Native
- Redux (for state management)
- JavaScript

## License

This project is licensed under the Apache License Version 2 - see the [LICENSE](LICENSE) file for details.

## Contributing

This is a practice project. Contributions are welcome for learning purposes.
