const BASE_PATH =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://full-stack-todo-list-app.vercel.app";
	
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

export default BASE_PATH;
