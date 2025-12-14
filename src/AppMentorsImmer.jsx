import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Who would you change the name?`);
    const current = prompt(`Which name?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`Mentor's name?`);
    const title = prompt(`Mentor's role?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };
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
      <button onClick={handleUpdate}>Change mentor's name</button>
      <button onClick={handleAdd}>Add mentor</button>
      <button onClick={handleDelete}>Delete mentor</button>
    </div>
  );
}

const initialPerson = {
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
};
