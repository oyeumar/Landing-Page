import React from 'react';
import { Note } from '../types';

interface NotesListProps {
    notes: Note[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
    return (
        <ul>
            {notes.map((note, index) => (
                <li key={index}>
                    <p>{note.content}</p>
                    <small>{note.timestamp.toLocaleString()}</small>
                </li>
            ))}
        </ul>
    );
};

export default NotesList;