"use client";
import Menu from "@/components/menu/menu";
import axios from "axios";
import { useEffect, useState } from "react";

const PizzaPage: React.FC = () => {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      return await axios.get(
        "https://656068d483aba11d99d0c27e.mockapi.io/api/v1/pizza"
      );
    };
    getData().then((res) => setPizzaItems(res.data));
  }, []);
  return <Menu items={pizzaItems} />;
};

export default PizzaPage;
