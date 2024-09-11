// const production = "production";
const development = "devlopment";

const mode = development;

let base_url = "";

if (mode == development) {
  base_url = "http://localhost:5000/api";
} else {
  base_url = "http://localhost:5000/api";
}

export { base_url };
