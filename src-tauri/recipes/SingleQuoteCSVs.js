/**
	{
		"api":1,
		"name":"Single Quote CSVs",
		"description":"Wraps all comma separated values in single quotes.",
		"author":"achristmascarl",
		"icon":"quote",
		"tags":"join"
	}
**/

function main(state) {
  state.text = state.text
    .split(",")
    .map((t) => `'${t.trim()}'`)
    .join(",");
}
