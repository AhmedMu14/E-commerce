const productData = [
    {
        id: 1,
        name: "Fresh Green Leaf Lettuce",
        price: "$2.64",
        oldPrice: "$2.74",
        unit: "1 each",
        onSale: true,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 2,
        name: "Leafy Romaine Mixed Lettuce",
        price: "$2.50",
        oldPrice: "$2.74",
        unit: "1 each",
        onSale: true,   
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 3,
        name: "Fresh Express Iceberg Garden Salad Blend",
        price: "$25.00 - $40.00",
        unit: "1 Bag",
        onSale: false,
        sizes: ["12oz", "24oz", "36oz"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 4,
        name: "Organic Girl Lettuce",
        price: "$1.50",
        unit: "1 Bag",
        onSale: false,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 5,
        name: "Organic Spring Mix",
        price: "$2.60",
        oldPrice: "$3.00",
        unit: "1 each",
        onSale: true,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 6,
        name: "Organic Firm Fresh White Lettuce",
        price: "$3.00 - $5.00",
        unit: "1 each",
        onSale: false,
        sizes: ["12oz", "24oz", "36oz"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 7,
        name: "Fresh Organic Broccoli",
        price: "$5.00 - $8.00",
        unit: "1 each",
        onSale: false,
        sizes: ["12oz", "24oz", "36oz"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 8,
        name: "Great Value Tortilla Chips, Cantina Style",
        price: "$5.00 - $15.00",
        unit: "1 each",
        onSale: false,
        sizes: ["Small", "Medium", "Large"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 9,
        name: "Frito Lay’s Family Fun Mix Snacks",
        price: "$6.20",
        oldPrice: "$6.98",
        unit: "1 each",
        onSale: true,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 10,
        name: "Lay's Kettle Cooked Jalapeno Potato Chips  ",
        price: "$5.00 - $15.00",
        unit: "1 each",
        onSale: false,
        sizes: ["Small", "Medium", "Large"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 11,
        name: "Lay's Bar-B-Que Potato Chips",
        price: "$5.00 - $15.00",
        unit: "1 each",
        onSale: false,
        sizes: ["Small", "Medium", "Large"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 12,
        name: "Chester's Fries Flamen Hot Corn Potato Snacks",
        price: "$5.00 - $15.00",
        unit: "1 each",
        onSale: false,
        sizes: ["Small", "Medium", "Large"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 13,
        name: "Lay’s Kettle Cooked Mesquite Potato Chips",
        price: "$15.00 - $25.00",
        unit: "1 each",
        onSale: false,
        sizes: ["Small", "Medium", "Large"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 14,
        name: "Ruffles Party Size Cheddar & Sour Cream",
        price: "$5.00 - $15.00",
        unit: "1 each",
        onSale: false,
        sizes: ["Small", "Medium", "Large"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 15,
        name: "Calavo Fresh Avocados",
        price: "$25.00 - $40.00",
        unit: "1 bag",
        onSale: false,
        sizes: ["12oz", "24oz", "36oz"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 16,
        name: "Fresh Cilantro",
        price: "$25.00 - $40.00",
        unit: "1 bag",
        onSale: false,
        sizes: ["12oz", "24oz", "36oz"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 17,
        name: "Gourmet Garden™ Lightly Dried Cilantro",
        price: "$2.64",
        oldPrice: "$2.99",
        unit: "1 each",
        onSale: false,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 18,
        name: "Organic Green Cabbage",
        price: "$1.50",
        oldPrice: "$1.99",
        unit: "1 each",
        onSale: false,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 19,
        name: "Green Gaint Peas",
        price: "$1.99",
        unit: "1 each",
        onSale: false,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 20,
        name: "Freshness Guaranteed Mango Spears",
        price: "$3.99",
        unit: "1 each",
        onSale: false,
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },
    {
        id: 21,
        name: "Fresh Express Iceberg Garden Salad Blend",
        price: "$25.00 - $40.00",
        unit: "1 each",
        onSale: false,
        sizes: ["12oz", "24oz", "36oz"],
        details: ["Vegetables are parts of plants that are consumed by humans or other animals as food. the first meaning remains commonly used and is applied to plants collectively to ask all edible plant matter"]
    },

];

export default productData;
