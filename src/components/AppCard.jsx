import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>CARD1</p>
      </Card>

      <Card>
        <h1>CARD2</h1>
        <p>content</p>
      </Card>

      <Card>
        <article></article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
