import React, { useState } from "react";

export const Drag_and_drop = () => {
    const [boards, setBoards] = useState([
        {id: 1, title: "Сделать", items: [{id: 1, title: "Пойти в магазин"}, {id: 2, title: "Выкинуть мусор"}, {id: 3, title: "Погладить кошку"}]}, 
        {id: 2, title: "Проверить", items: [{id: 1, title: "Сделать дз"}, {id: 2, title: "Написать drag and drop на react"}, {id: 3, title: "Покормить кошку"}]}, 
        {id: 3, title: "Готово", items: [{id: 1, title: "Полежать"}, {id: 2, title: "Посмотреть инсту"}]}
    ]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    function dragOverHandler(e) {
        e.preventDefault();

        if(e.target.className == 'item') {
            e.target.style.boxShadow = '0 4px 3px grey';
        }

        console.log('dragOverHandler');
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none';

        console.log('dragLeaveHandler');
    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board);
        setCurrentItem(item);

        console.log('dragStartHandler');
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none';

        console.log('dragEndHandler');
    }

    function dropHandler(e, board, item) {
        e.preventDefault();

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);

        e.target.style.boxShadow = 'none';

        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board;
            }

            if(b.id === currentBoard.id) {
                return currentBoard;
            }

            return b;
        }))

        console.log('dropHandler');
    }

    function dropCardHandler(e, board) {
        if(board.items.length > 0) {
            return;
        }

        board.items.push(currentItem)

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board;
            }

            if(b.id === currentBoard.id) {
                return currentBoard;
            }

            return b;
        }))

        console.log('dropCardHandler');
    }

    return (
        <>
            {boards.map(board => 
                <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                    className="board"
                >
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item =>
                        <div
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                            draggable="true"
                            className="item"
                        >{item.title}</div>
                    )}
                </div>
            )}
        </>
    );
}