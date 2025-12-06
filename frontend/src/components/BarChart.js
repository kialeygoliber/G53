import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import axios from "axios";
import { API_URL } from "../config";



export default function BarChart({ width = 500, height = 300 }) {
    const ref = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
      
        axios.get(`${API_URL}/bar_data`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          setData(response.data);
        })
        .catch(err => console.error(err));
      }, []);

  useEffect(() => {
    if (!data || !data.length) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, w])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)]).nice()
      .range([h, 0]);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .call(d3.axisLeft(y));

    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(d3.axisBottom(x));

    g.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.month))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", d => h - y(d.value))
      .attr("fill", "#69b3a2")
      .append("title")
      .text(d => `${d.month}: ${d.value}`);
  }, [data, width, height]);

  return <svg ref={ref} width={width} height={height} aria-label="Bar chart" />;
}
