# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Shopping Cart



This project is a simple shopping cart system designed to demonstrate how to add products to a shopping cart, remove products, and display the total prices. This project is built using **Vite** for development and **concurrently** to run both the server and the database simultaneously.



## Prerequisites



To run this project, you need the following software and tools:



- [Node.js](https://nodejs.org/) (version 14.x or higher)

- [npm](https://www.npmjs.com/) (Node package manager)

- [Vite](https://vitejs.dev/) (for running the project)



## Installation



1. Clone the project from the GitHub repository:



   ```bash

   git clone https://github.com/sholeh-khalkhali42/Shopping-Cart.git



2. Navigate to the project directory:



cd Shopping-Cart





3. Install the required packages using npm:



npm install





4. Ensure that Concurrently is installed correctly. If needed, install concurrently globally:



npm install -g concurrently







Usage



To run the project with concurrently, which starts both the server and the database simultaneously, use the following command:



npm run dev



This command will start both the Vite server and the database simultaneously. You can view the project in your browser at http://localhost:3000.



Features



Add product to cart: Users can add products to their shopping cart.



Remove product from cart: Users can remove products from the cart.



Display total price: The total price of products in the cart is automatically updated.



Data storage: Cart data is temporarily stored in the browser.





Project Structure



The project has the following structure:



Shopping-Cart/

├── assets/                  # Folder for static resources (images, CSS files)

├── src/                     # Main application code

│   ├── components/           # Components

│   ├── utils/                # Helper functions and utilities

│   └── main.js               # Main application file

├── public/                   # Public and static files

├── index.html                # Main HTML file

├── package.json              # Project metadata and dependencies

├── vite.config.js            # Vite configuration

├── concurrently.json         # Concurrently configuration (if exists)

└── README.md                 # Project documentation



Concurrently Configuration



This project uses concurrently to run both the server and the database simultaneously. The package.json file is configured as follows to use concurrently:



{

  "scripts": {

    "dev": "concurrently \"npm run server\" \"npm run db\"",

    "server": "vite",

    "db": "npm run start-db"

  }

}



Here:



The command npm run dev starts both the Vite server and the database simultaneously.



The npm run server command starts the Vite server.



The npm run db command is responsible for starting the database.





Testing



To run the tests, use the following command:



npm run test



This command will run the tests and display the results in the console.



Contributing



If you would like to contribute to this project, please follow these steps:



1. Fork this repository.





2. Make your changes.





3. Submit a pull request.







License



This project is licensed under the MIT License.

