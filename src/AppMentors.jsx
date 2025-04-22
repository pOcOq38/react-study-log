import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Ray",
    title: "Developer",
    mentors: [
      {
        id: "1",
        name: "Bob",
        title: "Senior Developer",
      },
      {
        id: "2",
        name: "James",
        title: "Senior Developer",
      },
    ],
  });

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentor:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name}, {mentor.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        Change mentor's name
      </button>
    </div>
  );
}
