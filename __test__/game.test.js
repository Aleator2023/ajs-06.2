const { extractSpecialAttacks } = require('../src/index');

describe('extractSpecialAttacks', () => {
    test('correctly extracts and sets default description', () => {
      const character = {
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // Описание отсутствует
          }
        ]	
      };
  
      const expected = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно'
        }
      ];
  
      const result = extractSpecialAttacks(character);
      expect(result).toEqual(expected);
    });
  });
  