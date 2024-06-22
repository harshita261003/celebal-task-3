import React from 'react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'To Do',
      cards: [
        { id: 1, title: 'Card 1', description: 'Card details' },
        // more cards
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        { id: 2, title: 'Card 2', description: 'Card details' },
        // more cards
      ],
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        { id: 3, title: 'Card 3', description: 'Card details' },
        // more cards
      ],
    },
  ],
};

const KanbanComponent = () => {
  return (
    <div>
      <Board initialBoard={board} />
    </div>
  );
};

export default KanbanComponent;
