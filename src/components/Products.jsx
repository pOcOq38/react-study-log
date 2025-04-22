import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    //useEffect로 안 하면 무한루프 됨
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥Get data from network");
        setProducts(data);
      });
    return () => {
      //컴포넌트 언마운트 될 때 정리함
      console.log("Callback");
    };
  }, [checked]);
  //[]가 없으면 매 렌더링마다 실행
  //[] 빈 배열: 최초 1번만 실행(마운트 시)
  //[state, props]: 배열 안의 값이 바뀔 때만 실행

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only on Hot Sales</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
