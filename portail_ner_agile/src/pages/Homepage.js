import React from "react";
import {useNavigate} from "../../node_modules/react-router-dom";
import button from '../button.jpg'; // Tell webpack this JS file uses this image
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell
} from 'recharts';

export default function Homepage() {

    const navigate = useNavigate();

    // Sample data
    const data = [
        {name: 'Hydraulique au fil de l eau', value: 14269, kw:"GWh"},
        {name: 'Nouvelles Energies Renouvelables', value: 4800, kw:"GWh"},
        {name: 'Hydraulique à accumulation', value: 17329, kw:"GWh"},
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <>

            <h1>Portail des énergies renouvelables en VS</h1>

            <p style={{fontSize: 30}}>Details NER</p>

            <img src={button} width="80px" alt="button" onClick={() => {navigate('/ner');}}/>

            <ResponsiveContainer width="100%" height={500}>
                <PieChart height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                        label={({
                                    cx,
                                    cy,
                                    midAngle,
                                    innerRadius,
                                    outerRadius,
                                    value,
                                    index
                                }) => {
                            console.log("handling label?");
                            const RADIAN = Math.PI / 180;
                            // eslint-disable-next-line
                            const radius = 25 + innerRadius + (outerRadius - innerRadius);
                            // eslint-disable-next-line
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            // eslint-disable-next-line
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);

                            return (
                                <text
                                    x={x}
                                    y={y}
                                    fill="#black"
                                    textAnchor={x > cx ? "start" : "end"}
                                    dominantBaseline="central"
                                    style={{fontSize: 20}}
                                >
                                    {data[index].name} ({value} {data[index].kw})
                                </text>
                            );
                        }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <p>Source : Office fédéral de l'énergie</p>


        </>

    )
}