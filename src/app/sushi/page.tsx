"use client";
import Menu from "@/components/menu/menu";
import axios from "axios";
import { useEffect, useState } from "react";

const SushiPage: React.FC = () => {
  const [sushiItems, setSushiItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      return await axios.get(
        "https://656068d483aba11d99d0c27e.mockapi.io/api/v1/sushi"
      );
    };
    getData().then((res) => setSushiItems(res.data));
  }, []);
  return <Menu items={sushiItems} />;
};

export default SushiPage;
