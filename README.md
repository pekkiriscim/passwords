# Passwords

Passwords is an open-source desktop app that simplifies password management, offering a secure and user-friendly experience. Built with Tauri and Next.js.

<img src="screenshots/Dashboard.png" alt="Dashboard" width="100%">

## Features

- Access your encrypted password file through the user authentication page. Safeguard your passwords with an additional layer of security using user credentials.

- Seamlessly add, edit, and delete passwords within the app.

- Organize your passwords into different types for convenient categorization.

- Utilize pre-designed forms tailored for various password types, ensuring easy and consistent data entry.

- Calculate password strength in real-time, assisting you in creating robust and secure passwords.

- Generate strong and unique passwords based on user preferences and choices. Customize password criteria such as length, character types, and complexity.

- Enable internationalization with the integration of i18next. Reach a wider audience by providing localized language options, enhancing user experience.

- Built with Tauri and Next.js, Passwords combines the power of modern web development and desktop application creation. Leverage the advanced capabilities of Tauri for seamless cross-platform deployment.

- Store your passwords in an encrypted local file, ensuring the safety of your sensitive information. Utilize encryption powered by CryptoJS to maintain the confidentiality of your stored data.

- Enjoy a modern and user-friendly interface designed for efficiency and ease of use. Access various password types and features with a clean and organized layout.

## Used Technologies

- **Tauri**: Empower your app with the capabilities of Tauri, enabling seamless cross-platform deployment and access to native APIs for enhanced user experience.

- **Next.js**: Harness the power of Next.js, leveraging its static site generation (SSG) capabilities to create a user interface.

- **shadcn/ui**: Enhance your app's visual and interactive elements with components from shadcn/ui. These beautifully designed components can be seamlessly integrated into your application, offering accessibility, customizability, and open-source goodness.

- **CryptoJS**: Utilize CryptoJS for strong encryption, ensuring that sensitive information such as passwords is securely stored within the app's encrypted local file.

- **i18next**: Implement internationalization with i18next, enabling users to experience the app in their preferred language, enhancing global accessibility.

- **Lucide React**: Enhance the visual appeal of your app with icons from Lucide React, adding a touch of aesthetic sophistication to the user interface.

- **Tailwind CSS**: Employ Tailwind CSS for efficient styling, enabling rapid development through its utility-first approach and streamlined design workflow.

- **Tauri APIs**: Access native functionalities seamlessly through Tauri APIs, providing your app with the potential to interact with the user's system.

## Run Locally

To get a copy of Passwords up and running on your local machine, follow these steps:

1. **Install Tauri Prerequisites**:

   Before you begin, make sure you have the required tools and dependencies installed for Tauri. Follow the [Tauri Prerequisites Guide](https://tauri.app/v1/guides/getting-started/prerequisites) to set up your environment.

2. **Clone the repository**:

   ```bash
   git clone https://github.com/pekkiriscim/passwords.git
   ```

   ```bash
   cd passwords
   ```

3. **Install Dependencies**:

   Navigate into the project directory and install the required dependencies:

   ```bash
   npm install
   ```

4. **Run the Development Server**:

   Start the app in development mode with the following command:

   ```bash
   npm run tauri dev
   ```

5. **Build and Launch the Tauri App**:

   To build and launch the Tauri app, run the following command:

   ```bash
   npm run tauri build
   ```

## Contribution

Contributions to Passwords are welcomed and encouraged! If you're interested in improving the app, adding new features, fixing bugs, or enhancing documentation, your contributions are highly valued.

## License

Passwords is open-source software released under the MIT License.

The MIT License (MIT) is a permissive open-source license that allows you to use, modify, and distribute the software in your projects, both commercial and non-commercial, while providing attribution to the original authors.

## Screenshots

<img src="screenshots/Authentication.png" alt="Authentication" width="100%">

<img src="screenshots/Dashboard.png" alt="Dashboard" width="100%">

<img src="screenshots/PasswordDialog.png" alt="PasswordDialog" width="100%">

<img src="screenshots/PasswordGenerator.png" alt="PasswordGenerator" width="100%">

<img src="screenshots/DeletePasswordDialog.png" alt="DeletePasswordDialog" width="100%">

## Download App

Visit the [Releases](https://github.com/pekkiriscim/passwords/releases) page of the GitHub repository to find the latest version of Passwords. Look for the release version that you want to download.
