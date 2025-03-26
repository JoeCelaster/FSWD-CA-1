import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

const App = () => {
  const data = [
  {
    name : "John Doe",
    title: "Software Engineer"
  },
  {
    name: "Jack Dawson",
    title: "Manager"
  },
  {
    name : "Patrick Bateman",
    title: "Human Resource"
  }
]

return (
  <div>
    {data.map((item, i) => (
      <TeamMemberCard key={i} name={item.name} title={item.title} />
    ))}
  </div>
);
}

export default App;
