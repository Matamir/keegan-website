import { useEffect } from 'react';

const HomePage = () => {
    
    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <div className="mt-2 homePageCustom text-monospace">

        </div>
    )
}
export default HomePage;