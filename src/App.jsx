// Импортируем компоненты React Router
// Routes содержит все ссылки на сайте.
// Route задаёт правило для путя.
// Outlet делает пустое место, куда будет вставлен нужный компонент.
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Form from "./Form/Form";

function Layout() {
    return (
        <>
            <Header />
            <Info />
            <Outlet />
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>  {/* Если ссылка /, то показываем компонент Layout */}
                <Route path="account" element={<Form />} />{/* Тут добавляеться к ссылке (Этой ссылку http://localhost:5173/) account и переносить на Form и это самое Form встаёт на место Outlet  */}
            </Route>
        </Routes>
    );
}

export default App;