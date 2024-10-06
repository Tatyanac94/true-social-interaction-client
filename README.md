# True Social Interaction

## Author: Tatyana Cuttino

## Description

True Social Interaction is a front-end application designed to create a genuine and irreversible social experience for users. Unlike traditional platforms, users can engage with content through posts, comments, and likes, with no option to edit or delete their interactions. This ensures that every contribution is final and authentic, reflecting the true nature of social interactions in a digital space.

The app features a seamless interface for creating and sharing thoughts, fostering a real sense of community. At its core, True Social Interaction embodies the philosophy that every voice matters and every statement is a commitment, making it a unique space for honest expression. Users can also choose between dark mode and light mode, tailoring their viewing experience to their preference.

## How to Run

Clone the repository: <https://github.com/Tatyanac94/true-social-interaction-client.git>

Navigate to the project directory:

```bash
cd [project-directory]
```

## Installation Command

Install dependencies using the following command:

```bash
npm install
```

## Set Up Environmental Variables

Create a `.env.local` file in the root directory of the project:

```plaintext
NEXT_PUBLIC_API_URL=https://social-interaction.vercel.app/api
```

## Run the Server

For production:

```bash
npm start
```

For development with auto-reloading:

```bash
npm run dev
```

Open your browser and navigate to <http://localhost:3000> to see the app in action.

## Key Features

- **Permanent Interactions**: Users cannot edit or delete posts, comments, or likes, promoting authenticity and ensuring that all interactions are final.
- **Dark Mode and Light Mode**: Switch between dark and light themes to optimize the viewing experience based on user preference.
- **User-Friendly Interface**: Enjoy an intuitive design for seamless navigation and interaction.
- **Anonymous Participation**: Choose to remain anonymous if users prefer not to disclose their identity.
- **Real-Time Updates**: Experience dynamic engagement with posts, comments, and likes updated in real-time, enhancing user interaction.

## Technologies and Resources Used

- React: A JavaScript library for building user interfaces.

- Tailwind CSS: A utility-first CSS framework for styling.

- Axios: HTTP client for making requests to the backend API.

- Vercel: Deployment platform for serverless functions and static sites.

- JavaScript: Programming language used for client-side logic.

- Local Storage: Used for storing user preferences such as theme settings.
