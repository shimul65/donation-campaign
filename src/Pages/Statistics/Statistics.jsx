import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const dataLength = () => {
        let length = 0;
        if (selectedCategories === null) {
            length = 12;
        }
        else {
            length = selectedCategories.length;
        }
        return length
    }

    const length = dataLength();

    useEffect(() => {
        const selectedCategory = JSON.parse(localStorage.getItem('selected-category'));
        setSelectedCategories(selectedCategory);
    }, [])

    const data = [
        { name: "Group A", value: 12 - length },
        { name: "Group B", value: length }
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };
    return (
        <div>
            <div className="flex justify-center items-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-14">
                <div className="flex gap-3 justify-center items-center">
                    <p>Your Donation</p>
                    <div className="w-24 h-3 bg-[#00C49F] rounded-sm"></div>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <p>Total Donation</p>
                    <div className="w-24 h-3 bg-[#FF444A] rounded-sm"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
