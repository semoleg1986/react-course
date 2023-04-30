import { ICard } from './Card.props';
describe('ICard interface', () => {
  test('has required properties', () => {
    const card: ICard = {
      id: 1,
      name: 'Test',
      surname: 'Ivan',
      imageURL: 'https://example.com/image.png',
      date: '2024-12-01',
      rules: true,
      category: 'Test Category',
      gender: 'Male',
    };

    expect(card).toBeDefined();
    expect(card.id).toBeDefined();
    expect(card.name).toBeDefined();
    expect(card.surname).toBeDefined();
    expect(card.imageURL).toBeDefined();
    expect(card.date).toBeDefined();
    expect(card.rules).toBeDefined();
    expect(card.category).toBeDefined();
    expect(card.gender).toBeDefined();
  });
});
