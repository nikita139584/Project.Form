import '/src/App.css';
import { Link } from "react-router-dom";//Импортирует  Link для перехода между файлами
function Header() {
    return (
        <header className="header">
            <a href="https://example.com" className="header-logo">H&M</a>

            <div className="header-div">
                <a href="https://example.com">Дамы</a>
                <a href="https://example.com">Мужчины</a>
                <a href="https://example.com">Дети</a>
                <a href="https://example.com">Дом</a>
                <a href="https://example.com">Красота</a>
            </div>

            <div className="header-icons">

                <a href="https://example.com" aria-label="Поиск">
                    {/* Тут рисуется значок лупы svg это холст circle это круг а line это ручка */}
                    <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
                </a>
                {/* Тут аналогично рисуеться человек и Link это тоже что и <a> только для файлов в react  */}
                <Link to="/account" aria-label="Аккаунт">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                </Link >

                <a href="https://example.com" aria-label="Избранное">
                    <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </a>

                <a href="https://example.com" aria-label="Корзина">
                    <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </a>
            </div>
        </header>
    );
}

export default Header;
