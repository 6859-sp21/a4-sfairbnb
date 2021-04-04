console.log('import js successfully')
// const svg2 = d3.select(".map");
// const projection = d3.geoMercator();
// const pathGenerator = d3.geoPath().projection(projection);

// svg2.append('path')
// 	.attr('class','sphere')
// 	.attr('d',pathGenerator({type: 'Sphere'}));

// Promise.all([
// 	d3.tsv('https://unpkg.com/world-atlas@1/world/110m.tsv'),
// 	d3.json('https://unpkg.com/world-atlas@1/world/110m.json')
// 	]).then( ([tsvData,topoData]) => {
// 		const countryName = {};
// 		tsvData.forEach(d => {
// 			countryName[d.iso_n3] = d.name;
// 		});

//   	const countries = topojson.feature(topoData, topoData.objects.countries);  
//   	svg2.selectAll('path')
//     	.data(countries.features)
// 		.enter().append('path')
// 		.attr('class','country')
//   		.attr('d', d => pathGenerator(d))
		
// 		.append('title')
// 			.text(d=>countryName[d.id]);
// });