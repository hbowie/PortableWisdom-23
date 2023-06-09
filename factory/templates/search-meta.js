<?output "../../web/js/search-meta.js"?>
let searchMeta = [
<?nextrec?>
	{
		title: "=$title$=",
		type: "=$type$=",
    url: "=$folder$=/=$title&f$=.html",
	  author: "=$author$=",
		content: "=$content&\$="
	},
<?loop?>
];
