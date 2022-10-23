import { Routes, Route } from 'react-router-dom';
import FormPage from '../pages/Form/Form.page';
import PresentationPage from '../pages/Presentation/Presentation.page';
import RequestPage from '../pages/Request/Request.page';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<PresentationPage/>}/>
            <Route path="/form" element={<FormPage/>}/>
            <Route path="/request/:id" element={<RequestPage/>}/>
        </Routes>
    )
}

export default RoutesMain