import React, { useState } from 'react';

const Make_Announcement = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const announcement = {
            title,
            description,
            date: new Date().toLocaleString(),
        };
        console.log('Announcement Submitted:', announcement);
        // Here you can add logic to send this announcement to the database or API.
        setTitle('');
        setDescription('');
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
            <h3 className="text-3xl font-semibold mb-4">Make an Announcement</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter announcement title"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter announcement description"
                        rows="4"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Submit Announcement
                </button>
            </form>
        </div>
    );
};

export default Make_Announcement;
