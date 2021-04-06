const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const d3_array = require('d3-array')
const size = 600;
import { choropleth } from 'd3-geomap'

class CustomD3Component extends D3Component {
  initialize(node, props) {

    // do something with the data passed in
    //svg.data(props.data);


     const stateCodeToFips = {"AK": "02", "AL": "01", "AR": "05", "AS": "60", "AZ": "04", "CA": "06", "CO": "08", "CT": "09", "DC": "11", "DE": "10", "FL": "12", "GA": "13", "GU": "66", "HI": "15", "IA": "19", "ID": "16", "IL": "17", "IN": "18", "KS": "20", "KY": "21", "LA": "22", "MA": "25", "MD": "24", "ME": "23", "MI": "26", "MN": "27", "MO": "29", "MS": "28", "MT": "30", "NC": "37", "ND": "38", "NE": "31", "NH": "33", "NJ": "34", "NM": "35", "NV": "32", "NY": "36", "OH": "39", "OK": "40", "OR": "41", "PA": "42", "PR": "72", "RI": "44", "SC": "45", "SD": "46", "TN": "47", "TX": "48", "UT": "49", "VA": "51", "VI": "78", "VT": "50", "WA": "53", "WI": "55", "WV": "54", "WY": "56"};
        const fipsToStateCode = Object.entries(stateCodeToFips).reduce((ret, entry) => {
            const [ key, value ] = entry;
            ret[ value ] = key;
            return ret;
        }, {});
        

        const squareSize = 9; // length of a side of a square
        const strokeWidth = 1.3;
        const numPerRow = 30;
        const numPerCol = 34;
        const w = (squareSize + (strokeWidth * 2)) * numPerRow; // width of chart
        const h = (squareSize + (strokeWidth * 2)) * numPerCol; // height of chart
        const margin = {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        }
        var myColor = d3.scaleSequential()
        .interpolator(d3.interpolateReds)
        .domain([-20,150]);

        // Create scale
        const scale = d3.scaleLinear()
        .domain([0, numPerRow])
        .range([0, w]);

        // Create the svg
        var svg = d3.select(node).append('svg')
        .attr('class', 'chart')
        .attr('width', w + margin.left + margin.right)
        .attr('height', h + margin.top + margin.bottom)
        var chart = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

        // create div for tooltip
        var tooltip = svg.append('g')
        .style("opacity", 0);

        var tooltipState = svg.append('g')
        .style("opacity", 0);

        // create map
        var map = choropleth()
        .geofile('https://cdn.jsdelivr.net/npm/d3-geomap@3.3.0/dist/topojson/countries/USA.json')
        .projection(d3.geoAlbersUsa)
        .height(h + margin.top + margin.bottom)
        .column('count')
        .unitId('fips')
        .scale(750)
        .legend(false);

        /**
         * Render the data into the visualization layout.
         */
         function render() {
                d3.csv("data/death-by-police.csv").then(function (raw_data) {
                let data = raw_data
                    .filter(d => d.date.substring(0,4) == '2019'); /// data in year 2019

                let countByState = d3_array.rollup(data, v => v.length, d => d.state); //count of each state
                data.sort((a, b) => d3.descending(countByState.get(a.state), countByState.get(b.state))); // sort by count

                data.map(d => d.age === '' ? d.age ='Unknown': d.age);
                data.map(d => d.gender === 'F' ? d.gender ='Female': d.gender ='Male');
                // console.log(newdata);
                chart.selectAll('rect').remove();

                // Append new squares
                const squares = chart.selectAll('rect')
                .data(data, function (d) { return d.name; })

                squares.enter().append('rect')
                .attr('x', (d, i) => {
                    const n = i % numPerRow;
                    return scale(n);
                })
                .attr('y', (d, i) => {
                    const n = Math.floor(i / numPerRow);
                    return scale(n);
                })
                .attr('fill','var(--grey1)')
                .attr('ry', 10)
                .attr('rx', 10)
                .attr('width', squareSize)
                .attr('height', squareSize)
                .on("mouseover", handleMouseOver)
                .on("mouseout", handleMouseOut)
                .transition().delay(function (d, i) { return .9 * i; })
                .attr("class", (d) => { return d.state; });


                function handleMouseOver(d) {
                    // highlight rect 
                    d3.select(this).style("fill", d => myColor(countByState.get(d.state)));
                    tooltip.transition()
                    .duration(30)
                    .style("opacity", 1)
                    tooltip.html("Age: " + d.age + "<br>Gender: " + d.gender + "<br>Location: " + d.city + ", "+ d.state + "<br>Flee: " + d.flee);

                    d3.select('.unit-US' + stateCodeToFips[d.state]).classed("map-state-highlighted", true);
                }

                function handleMouseOut(d) {
                    // unhighlight color
                    d3.select(this).style("fill", 'var(--grey1)');
                    tooltip.transition()
                    .duration(30)
                    .style("opacity", 0);

                    d3.select('.unit-US' + stateCodeToFips[d.state]).classed("map-state-highlighted", false);
                }

                // Map to Grid
                const mapData = d3_array.rollups(data, v => v.length, d => d.state).map(([k, v]) => {return {fips: "US"+stateCodeToFips[k], count: v}}); // return {fip, count}

                map.postUpdate(() => {
                    d3.selectAll('.unit')
                    .on("click", (d) => {
                        const stateName = fipsToStateCode[d.properties.fips.slice(2)];
                        d3.selectAll('.'+stateName).style("fill", d => myColor(countByState.get(d.state)));

                        tooltipState.transition()
                            .duration(30)
                            .style("opacity", 1)
                        tooltipState.html("<br><br>State: " + stateName + "<br>Deaths: " + countByState.get(stateName));
                    })
                    .on("mouseout", (d) => {
                        const stateName = fipsToStateCode[d.properties.fips.slice(2)];
                        d3.selectAll('.'+ stateName).style("fill", 'var(--grey1)');

                        tooltipState.transition()
                            .duration(30)
                            .style("opacity", 0)
                    });
                })
                .draw(d3.select('#mappppp').datum(mapData));
         });
        }

        render();
  }
}

module.exports = CustomD3Component;
