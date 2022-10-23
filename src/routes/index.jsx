import { Routes, Route } from 'react-router-dom';
import FormPage from '../pages/Form/Form.page';
import PresentationPage from '../pages/Presentation/Presentation.page';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<PresentationPage/>}/>
            <Route path="/form" element={<FormPage/>}/>
            {/* <Route path="/request/:id" element={</>}/> */}
        </Routes>
    )
}

export default RoutesMain