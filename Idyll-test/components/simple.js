const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const d3_array = require('d3-array')
const size = 600;
import { choropleth } from 'd3-geomap'

class simple extends D3Component {
  initialize(node, props) {

    // do something with the data passed in
    //svg.data(props.data);


     
            const squareSize = 15; // margin of two circles
            const circleSize = 4.7;
            const numPerRow = 30;
            const numPerCol = 32;
            const w = squareSize * numPerRow; // width of chart
            const h = squareSize * numPerCol; // height of chart
            const margin = {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5,
            }


            // Create scale
            const scale = d3.scaleLinear()
                .domain([0, numPerRow])
                .range([0, w]);

            var svg = d3.select(node).append('svg')
                .attr('class', 'chart')
                .attr('width', w + margin.left + margin.right)
                .attr('height', h + margin.top + margin.bottom);
            var chart = svg.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);


            /* 
                Map chart
            */








            /* 
                Grid chart
            */

            //render the data
            function render() {
                svg.data(props.data);//raw_data
                // Filter, shuffle, slice, and sort data
                // var data = filter(raw_data);
                // // Select subset of data according to calculated proportions, returns data of length <= 1200
                // selected = select(data);
                // data = selected[0];
                // var proportions = selected[1];

                // data = data.sort((d1, d2) => (d1.predicted_category > d2.predicted_category) ? 1 : -1);
                // const l = data.length;

                chart.selectAll('circle').remove();

                // Append new circles
                const squares = chart.selectAll('circle')
                    .data(data, function (d) { return d.hmid; })

                squares.enter().append('circle')
                    .attr('cx', (d, i) => {
                        const n = i % numPerRow;
                        return scale(n);
                    })
                    .attr('cy', (d, i) => {
                        const n = Math.floor(i / numPerRow);
                        return scale(n);
                    })
                    .attr('r', circleSize)
                    .attr('fill','white')
                    .transition().delay(function (d, i) { return .9 * i; })
                    // .on("mouseover", handleMouseOver)
                    // .on("mouseout", handleMouseOut)
                    // .attr("data-toggle", "modal")
                    // .attr("data-target", "#myModal")
                    // .attr("class", (d) => { return d.predicted_category; });
                // updateProportions(proportions); // update proportions under icons


                // function handleMouseOver(d) {
                //     // highlight rect 
                //     d3.select(this).style("fill", function (d) { return colorMap[d.predicted_category]; });
                //     d3.select(this).style("stroke", "gray");
                //     d3.select(this).style("stroke-width", "1.5px");
                //     // tooltip
                //     tooltip.transition()
                //         .duration(30)
                //         .style("opacity", 1)
                //     tooltip.html("&ldquo;" + d.cleaned_hm + "&rdquo;" + "<br> <br> <div class='tooltip-footer'> CLICK TO SEE MORE </div>")
                //         .style("left", (d3.event.pageX + 20) + "px")
                //         .style("top", (d3.event.pageY - 20) + "px");
                //     //data for modal
                //     d3.select(this).attr("class", "info").datum(d).style("cursor", "pointer");
                // }

                // function handleMouseOut(d) {
                //     // unhighlight color
                //     d3.select(this).style("stroke", "white");
                //     d3.select(this).style("stroke-width", "0px");
                //     d3.select(this).style("fill", function (d) { return colorMap[d.predicted_category]; });
                //     // tooltip
                //     tooltip.transition()
                //         .duration(30)
                //         .style("opacity", 0);
                //     d3.select(this).attr("class", null)
                // }

                // function updateProportions(proportions) {
                //     let categories = Object.keys(proportions);
                //     for (c of categories) {
                //         document.getElementById("icon-proportion-" + c).innerHTML = proportions[c] + "%";
                //     }
                // }

            }

            render();
  }
}

module.exports = simple;
