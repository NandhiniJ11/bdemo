import React from 'react';

const AutocompleteDropdown = ({ suggestions, onSelect }) => {
    if (!suggestions.length) {
        return null;
    }

    return (
        <ul className="autocomplete-dropdown bg-white border rounded shadow-md absolute w-full z-10 mt-110">
            {suggestions.map((suggestion, index) => (
                <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => onSelect(suggestion)}
                >
                    {suggestion.featureTxt}
                </li>
            ))}
        </ul>
    );
};

export default AutocompleteDropdown;
