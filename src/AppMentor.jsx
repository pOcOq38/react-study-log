import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Ray",
    title: "Developer",
    mentor: {
      name: "Bob",
      title: "Senior Developer",
    },
  });

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name}, {person.mentor.title}
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name: name },
          }));
        }}
      >
        Change mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title: title },
          }));
        }}
      >
        Change mentor's title
      </button>
    </div>
  );
}
