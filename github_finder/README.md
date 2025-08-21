# GitHub Finder

This project is a React + TypeScript application built with Vite. It allows users to search for GitHub profiles and view user details using the GitHub API.

![alt text](image.png)

## Project Structure

```
github_finder/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
   ├── App.module.css
   ├── App.tsx
   ├── index.css
   ├── main.tsx
   ├── vite-env.d.ts
   ├── components/
   │   ├── Error/
   │   │   └── Error.tsx
   │   ├── Search/
   │   │   ├── Search.module.css
   │   │   └── Search.tsx
   │   └── User/
   │       ├── User.module.css
   │       └── User.tsx
   ├── routes/
   │   └── Home/
   │       └── Home.tsx
   └── types/
      └── user.ts
```

## Main Features

- Search for GitHub users by username
- View user details (profile, avatar, etc.)
- Error handling for invalid or not found users
- Modular and organized TypeScript codebase
- Styled with CSS modules

## Getting Started

1. Install dependencies:
  ```sh
  npm install
  ```
2. Run the development server:
  ```sh
  npm run dev
  ```
3. Open your browser at the provided local address to use the app.

## License

This project is for learning and personal portfolio purposes.
