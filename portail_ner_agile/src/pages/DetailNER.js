
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';


export default function DetailNER() {

    const data = [
        {name: 'PV', 2020: 14269, 2021: 10000},
        {name: 'mini-hydr.', 2020: 4800, 2021: 5000},
    ];


    return (
        <>
            <h2>Nouvelles énergies renouvelables</h2>
            <ResponsiveContainer width="40%" height={500}>
                <BarChart
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="2020" fill="#8884d8" />
                    <Bar dataKey="2021" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            <p>Source : Office fédéral de l'énergie</p>

        </>


    )
}
