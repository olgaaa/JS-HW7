//Task 1
//Создать поиск кандидатов в массиве candidateArr по номеру телефона. Номер телефона может быть указан не полностью и в любом формате.

const searchCandidatesByPhoneNumber = (phone) => {
  let result = [];
  phone = phone.replace(/\D/g, '');
  for (let i = 0; i < condidateArr.length; i++) {
    condidateArr[i].phone.replace(/\D/g, '').includes(phone)
      ? result.push(condidateArr[i])
      : null;
  }
  return result;
};

console.log(searchCandidatesByPhoneNumber('43'));
/// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
/// [Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('43'));
/// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'));
/// [Candidate]

//Task 2
//Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr c отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.

const getCandidateById = (id) => {
  const candidate = condidateArr.find((item) => item._id === id);
  candidate.registered = candidate.registered
    .slice(2, 10)
    .split('-')
    .reverse(0, 3)
    .join('/');
  return candidate;
};

console.log(getCandidateById('5e216bc9a6059760578aefa4'));
{
   _id: '5e216bc9a6059760578aefa4',
   name: 'Bernice Walton',
   registred: '05/11/2015',
   ... other properties in candidate
}

//Task 3
//Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих на балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy. Если параметр не был передан, то вернет массив в первоначальном состоянии.

const sortCandidatesArr = (sortBy) => {
  if (sortBy === 'asc') {
    condidateArr.sort((a, b) => {
      return (
        a.balance.slice(1).split(',').join('') -
        b.balance.slice(1).split(',').join('')
      );
    });
    console.log(condidateArr);
  }
  if (sortBy === 'desc') {
    condidateArr.sort((a, b) => {
      return (
        b.balance.slice(1).split(',').join('') -
        a.balance.slice(1).split(',').join('')
      );
    });
    console.log(condidateArr);
  }

  return condidateArr;
};

console.log(sortCandidatesArr('asc'));
// отсортирует по-возростанию и вернет отсортированный массив

console.log(sortCandidatesArr('desc'));
// отсортирует по-убыванию и вернет отсортированный массив

console.log(sortCandidatesArr());
// не будет сортировать, а просто вернет первоначальный массив



//Task 4
//Написать функцию, которая вернет объект в котором название ключей будут цвета глаз, а значением - массив с кандидатами имеющие такой цвет глаз. При этом нельзя самому указывать первоначальный объект с возможными вариантами цветами глаз, а сгенерировать их на основе массива с кандидатами, то есть пройтись по массиву candidatesArr и брать смотреть на свойство eyeColor и добавлять значение цвета глаз кандидата как ключ объекта, если такого ключа не существует, ну и не добавлять - если  одноименный ключ уже существует
// не виконано