// const axios = require("axios");
import axios from "axios";
import "regenerator-runtime/runtime.js";

// document.getElementById("post").addEventListener("click", addTodo);
// axios
// 	.get("https://www.fevrok.dev/api/v1/portfolio/chadidi/?api_key=du4iwvio46")
// 	.then(function (response) {
// 		const first_name = response.data.portfolio.user.first_name;
// 		const last_name = response.data.portfolio.user.last_name;

// 		// let last_name = response.data.portfolio.user.last_name;
// 		let about = response.data.portfolio.user.about;

// 		// let location = response.data.portfolio.user.location;

// 		document.getElementById("first_name").innerHTML = first_name;
// 		document.getElementById("last_name").innerHTML = last_name;

// 		// document.getElementById("last_name").innerHTML = last_name;

// 		document.getElementById("about").innerHTML = about;
// 		document.getElementById("location").innerHTML = location;

// 		console.log(response);

// 		// console.log(response.status);
// 		// console.log(response.statusText);
// 		// console.log(response.headers);
// 		// console.log(response.config);
// 	});

async function getUser(username) {
	const {
		data: {
			portfolio: { user },
		},
	} = await axios.get(
		`https://www.fevrok.dev/api/v1/portfolio/${username}/?api_key=du4iwvio46`
	);

	return user;
}

function displayUser(username) {
	getUser(username).then((user) => {
		Object.entries(user).forEach(([key, value]) => {
			if (document.getElementById(`${key}`) !== null) {
				if (key === "avatar" || key === "cover") {
					document.getElementById(`${key}`).src = value.original;
				}
				document.getElementById(`${key}`).innerHTML = value;
			}
		});
	});
}

displayUser("chadidi");
