import Character from '../Character';

test('should check the class Character no name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name > 10', () => {
  expect(() => new Character('aaaaaaaaaaa', 'Bowman')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  expect(() => new Character('Игрок', 'Hero')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  const character = new Character('Игрок', 'Magician');
  expect(character.name).toBe('Игрок');
});

test('should check the class Character no name', () => {
  const character = new Character('Игрок', 'Magician');
  expect(character.type).toBe('Magician');
});

test('should check the class Character no name', () => {
  const character = new Character('Игрок', 'Magician');
  const result = {
    name: 'Игрок',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});