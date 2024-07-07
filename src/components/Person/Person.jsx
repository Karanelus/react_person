import React from 'react';
import { PersonName } from './PersonName';
import { PersonAge } from './PersonAge';
import { PersonSpouse } from './PersonSpouse';

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <PersonName name={person.name} />
      {person.age && <PersonAge age={person.age} />}
      <PersonSpouse
        sex={person.sex}
        spouse={person.partnerName}
        isMarried={person.isMarried}
      />
    </section>
  );
};

// misha = {
//   name: 'Misha',
//   age: 37,
//   sex: 'm',
//   isMarried: true,
//   partnerName: 'Natasha',
// };
