import axios from "axios";
import "regenerator-runtime/runtime.js";

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
