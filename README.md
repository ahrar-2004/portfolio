# Portfolio Website

This is a personal portfolio website built using React and Tailwind CSS. This guide will help you set up and run the project locally.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: latest LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ahrar-2004/portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Setting Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
 create a account on EmailJS and copy your service id template id and public id 
Replace `your_service_id`, `your_template_id`, and `your_public_key` with your actual EmailJS credentials.

## Running the Project

To start the development server, run:

```sh
npm start
```
   or
```sh
yarn start
```

This will launch the portfolio at `http://localhost:3000/` in your browser.

## Deployment

To build the project for production, use:
```sh
npm run build
```
   or
```sh
yarn build
```

This will create an optimized production-ready build in the `build/` folder.

## Technologies Used

- React.js
- Tailwind CSS
- EmailJS (for contact form)
- vercel.com (for deployment )

## Github 

Push your repository to github 

## Deploy 

Create your vercel account and connect it to your github account and select the repository that you want to deploy 

## Contact

If you face any issues or have suggestions, feel free to reach out!

