// import React, { useState } from 'react';
// import Header from './components/Header';
// import BehanceList from './components/BehanceList';

// const App = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [sortCategory, setSortCategory] = useState('');

//     const handleSearch = (query, category) => {
//         setSearchQuery(query);
//         setSortCategory(category);
//     };

//     return (
//         <div>
//             <Header onSearch={handleSearch} />
//             <BehanceList searchQuery={searchQuery} sortCategory={sortCategory} />
//         </div>
//     );
// };

// export default App;
import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
