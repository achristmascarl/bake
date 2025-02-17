/**
	{
		"api":1,
		"name":"Collapse to SQL values",
		"description":"Wraps all strings in single quotes and separates with commas.",
		"author":"achristmascarl",
		"icon":"collapse",
		"tags":"join"
	}
**/

function main(state) {
  state.text = state.text
    .split("\n")
    .map((t) => `'${t}'`)
    .join(",");
}
