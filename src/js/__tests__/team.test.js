import Team from '../Team';

test('should add without error', () => {
  const team = new Team();
  const user = { name: "user", type: "Bowman"};
  team.add(user);

  expect(team.members.has(user)).toBe(true);
  expect(team.members.size).toBe(1);
});

test('should add with error', () => {
  const team = new Team();
  const user = { name: "user", type: "Bowman"};
  team.add(user);

  expect(() => team.add(user)).toThrow("Такой игрок уже существует");
});

test('should add many', () => {
  const team = new Team();
  const userOne = { name: "user 1", type: "Bowman"};
  const userTwo = { name: "user 2", type: "Swordsman"};
  const userThree = { name: "user 3", type: "Magician"};
  team.addAll(userOne, userTwo, userThree);

  expect(team.members.has(userOne)).toBe(true);
  expect(team.members.size).toBe(3);
});

test('should return array', () => {
  const team = new Team();
  const user = { name: "user 1", type: "Bowman"};
  team.add(user);

  expect(team.toArray()).toEqual([user]);
  expect(team.members.size).toBe(1);
});
