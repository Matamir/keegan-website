import {useEffect} from 'react';

const SearchPage = () => {
    useEffect(() => {
        document.title = "Search"
    }, []);

    return (
        <div className="mt-2 homePageCustom text-monospace">

        </div>
    )
}
export default SearchPage;