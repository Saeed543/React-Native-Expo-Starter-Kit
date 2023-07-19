# React Native Expo Starter Kit

This project serves as a starting point for developing a React Native application using Expo. It is pre-configured with Firebase Email authentication and Expo notification push features, eliminating the need for setting up these functionalities from scratch. With this starter kit, you can jumpstart your development process and focus on building your application's core features.

## Features

- Firebase Email authentication integration for user authentication
- Expo notification push feature for sending notifications to users
- Ready-to-use authentication screens and components
- Simple and clean folder structure for easy organization
- Essential dependencies pre-installed and configured
- Pre-configured navigation using React Navigation

## Prerequisites

To use this starter kit, ensure that you have the following software installed on your development machine:

- Node.js
- Expo CLI
- Firebase account and project
- Expo account (for push notifications)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-native-expo-starter-kit.git
```

2. Install the dependencies:

```bash
cd react-native-expo-starter-kit
npm install
```

3. Configure Firebase:

- Create a Firebase account and project if you don't have one already.
- Enable Firebase Email authentication in your Firebase project.
- Copy your Firebase project's configuration and replace the placeholder values in `src/firebase/config.js` with your actual Firebase configuration.

4. Configure Expo push notifications:

- Create an Expo account if you don't have one already.
- Follow Expo's documentation to obtain the necessary push notification credentials for your project.
- Update the `ExpoPushToken` variable in `src/screens/HomeScreen.js` with your Expo push notification token.

5. Start the development server:

```bash
expo start
```

6. Use Expo CLI to launch the application on your desired platform (iOS or Android). You can run the application on a physical device or an emulator by following the instructions provided by Expo CLI.

```bash
expo run-ios
# or
expo run-android
```

## Project Structure

The project structure is designed to keep the codebase organized and scalable. Here's an overview of the main directories and files:

  - `/Navigation`: Configurations and screens related to navigation using React Navigation.
  - `/Pages`: Application screens and their respective components.
  - `/config`: Firebase configuration and authentication service.
- `/assets`: Contains static assets such as images, fonts, etc.

Feel free to modify the project structure based on your specific needs as the project evolves.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, please submit a pull request. For major changes, it is recommended to open an issue to discuss the proposed changes before submitting a pull request.

Please ensure that your code adheres to the existing coding style and conventions used in the project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Firebase](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/)

## Contact

If you have any questions or need assistance, feel free to reach out to the project maintainer:

- Maintainer: Saeed Saleem
- Email: safiullahsaleem820@gmail.com

Happy coding!
