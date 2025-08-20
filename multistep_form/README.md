# Multistep Form Project

This project is a React application built with Vite, featuring a multi-step form for user evaluation. Users can provide their name, email, rating, and comments, and review their input before submitting.

## Project Structure

```
multistep_form/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
	 ├── App.css
	 ├── App.jsx
	 ├── index.css
	 ├── main.jsx
	 ├── components/
	 │   ├── ReviewForm/
	 │   │   ├── ReviewForm.css
	 │   │   └── ReviewForm.jsx
	 │   ├── Thanks/
	 │   │   ├── Thanks.css
	 │   │   └── Thanks.jsx
	 │   └── UserForm/
	 │       └── UserForm.jsx
	 ├── hooks/
	 │   └── useForm.jsx
	 └── Steps/
		  ├── Steps.css
		  └── Steps.jsx
```

## Main Features

- Multi-step form with user, review, and thank you steps
- State management using React hooks
- Custom hook for form step logic (`useForm`)
- Modular component structure
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
