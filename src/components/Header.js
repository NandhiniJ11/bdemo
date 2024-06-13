import React, { useState, useEffect } from 'react';
import { IoSearchSharp, IoClose } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { CgMenuLeft } from 'react-icons/cg';
import { behance_logo, adobe_cloude, adobeLogo, searchType, tagName, behanceItem } from '../Data';
import BehanceList from './BehanceList';
import AutocompleteDropdown from './AutocompleteDropdown';

const openMenu = () => {
    const main_header = document.getElementById('header');
    main_header.classList.toggle('menuopen');
};

const closeMenu = () => {
    openMenu();
};

const Header = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [filteredItems, setFilteredItems] = useState(behanceItem);
    const [suggestions, setSuggestions] = useState([]);

    const handleSearchChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        filterItems(newQuery, category);
        updateSuggestions(newQuery);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        filterItems(query, newCategory);
    };

    const filterItems = (searchQuery, sortCategory) => {
        let filtered = behanceItem.filter(item =>
            item.featureTxt.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortCategory) {
            filtered = filtered.filter(item => item.category === sortCategory);
        }

        setFilteredItems(filtered);
    };

    const updateSuggestions = (searchQuery) => {
        if (searchQuery.length > 0) {
            const newSuggestions = behanceItem.filter(item =>
                item.featureTxt.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSuggestions(newSuggestions.slice(0, 10)); // Limit to 10 suggestions
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionSelect = (suggestion) => {
        setQuery(suggestion.featureTxt);
        setSuggestions([]);
        filterItems(suggestion.featureTxt, category);
    };

    useEffect(() => {
        filterItems(query, category);
    }, [query, category]);

    return (
        <>
            <header className='header' id='header'>
                <div id='menu' className='menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5'>
                    <div className='text-3xl absolute right-3 cursor-pointer text-[#333]' onClick={closeMenu}>
                        <IoClose />
                    </div>
                    <ul>
                        <li className='m-3 font-medium text-md'><a href="#">For you</a></li>
                        <li className='m-3 font-medium text-md'><a href="#">Discover</a></li>
                        <li className='m-3 font-medium text-md'><a href="#">Livestreams</a></li>
                        <li className='m-3 font-medium text-md'><a href="#">Hire</a></li>
                        <li className='m-3 font-medium text-md'><a href="#">Jobs</a></li>
                    </ul>
                </div>

                <div className='border-b fixed w-full top-0 bg-white z-10'>
                    <div className="container-fluid">
                        <div className="top-header py-4 lgpy-3 px-5 border-b border">
                            <div className="navbar flex items-center justify-between">
                                <div className="brand-logo flex items-center">
                                    <div className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden" onClick={openMenu}>
                                        <CgMenuLeft />
                                    </div>
                                    <img src={behance_logo} alt="Behance logo" className="w-auto h-4" />
                                    <div className="page-links lg:ml-8 hidden lg:block">
                                        <ul className='flex items-center'>
                                            <li className='mx-3 font-medium text-md active'><a href="#">For you</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="#">Discover</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="#">Livestreams</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="#">Hire</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="#">Jobs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="aciton-area flex items-center">
                                        <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] ">
                                            <a href="#" className='text-[#0057ff] font-medium text-md'>Login</a>
                                        </div>
                                        <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                                            <a href="#" className='text-white font-medium text-md'>Sign Up</a>
                                        </div>
                                        <span className='text-gray-300'>|</span>
                                        <div className="free-btn mx-4 flex items-center border rounded-full px-4 py-1">
                                            <div className="cloud-icon pr-2">
                                                <img src={adobe_cloude} alt="Adobe Cloud" className="w-5 h-5" />
                                            </div>
                                            <a href="#">Free Trial</a>
                                        </div>
                                        <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                                            <img src={adobeLogo} alt="Adobe Logo" className="w-5 h-5" />
                                            <a href="#" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                                    <IoSearchSharp />
                                </div>
                            </div>
                        </div>
                        <div className="search-area p-5 relative">
                            <div className="flex items-center relative">
                                <div className="search-box w-full border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between relative">
                                    <div className="input-box relative lg:w-full">
                                        <input
                                            type="text"
                                            placeholder='Search the creative world at work'
                                            className='bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]'
                                            value={query}
                                            onChange={handleSearchChange}
                                        />
                                        <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                    <div className="tags-search bg-white px-4 py-3 border-l-2">
                                        <ul className='flex items-center'>
                                            <li className='text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm'>
                                                <a href="#">Projects</a>
                                            </li>
                                            <div className="dt-arrow block lg:hidden">
                                                <MdArrowDropDown />
                                            </div>
                                            {searchType.map((tags) => (
                                                <li key={tags.sItems} className='mx-1 font-medium text-sm py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]'>
                                                    <a href="#">{tags.sItems}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute w-full mt-8">
                                    <AutocompleteDropdown suggestions={suggestions} onSelect={handleSuggestionSelect} />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="behance-tools flex items-center justify-between pb-5 px-5">
                                <div className='flex items-center'>
                                    {tagName.map((tools) => (
                                        <div key={tools.tags} className="tools-item flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                                            <div className="t-icon">
                                                {tools.tagsIcon}
                                            </div>
                                            <div className="tname px-2">
                                                <p className='text-sm font-bold'> {tools.tags}</p>
                                            </div>
                                            <div className="dt-arrow">
                                                <MdArrowDropDown />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="recm-item">
                                    <span className='text-xs font-bold text-[#626161]'>Filter</span>
                                    <div className="flex items-center">
                                        <select onChange={(e) => handleCategoryChange(e.target.value)} className='text-sm font-medium'>
                                            <option value="">Recommended</option>
                                            <option value="c1">Category 1</option>
                                            <option value="c2">Category 2</option>
                                            <option value="c3">Category 3</option>
                                            <option value="c4">Category 4</option>
                                            <option value="c5">Category 5</option>
                                            <option value="c6">Category 6</option>
                                            <option value="c7">Category 7</option>
                                            <option value="c8">Category 8</option>
                                            <option value="c9">Category 9</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <BehanceList items={filteredItems} />
        </>
    );
};

export default Header;
