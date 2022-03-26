import { Link } from 'react-router-dom'
import Searcher from '../elements/Searcher';

function Categories() {
  return (
    <div className="section-view categories">
        <div className="fix-wrapper">
            <h1 className='section-title'>Каталог товаров</h1>
            <Link to={process.env.PUBLIC_URL + "/catalog/all"}>
                <Searcher placeholder={"Поиск по всем товарам"} autoFocus={false}/>
            </Link>
        </div>
        <section className='categories-grid'>
            <Link className="category-card antiaging" to={process.env.PUBLIC_URL + "/catalog/antiaging"}>
                <p>Антивозрастная косметика</p>
            </Link>
            <Link className="category-card discounts" to={process.env.PUBLIC_URL + "/catalog/discounts"}>
                <p>Скидки</p>
            </Link>
            <Link className="category-card facemasks" to={process.env.PUBLIC_URL + "/catalog/facemasks"}>
                <p>Тканевые маски</p>
            </Link>
            <Link className="category-card hands" to={process.env.PUBLIC_URL + "/catalog/hands"}>
                <p>Пенки для лица</p>
            </Link>
            <Link className="category-card body" to={process.env.PUBLIC_URL + "/catalog/body"}>
                <p>Крема, гели и эмульсии</p>
            </Link>
            <Link className="category-card face" to={process.env.PUBLIC_URL + "/catalog/face"}>
                <p>Скрабы для лица и пилинг</p>
            </Link>
            <Link className="category-card wrinkles" to={process.env.PUBLIC_URL + "/catalog/wrinkles"}>
                <p>Сыворотки и эссенции</p>
            </Link>
            <Link className="category-card darkcircles" to={process.env.PUBLIC_URL + "/catalog/darkcircles"}>
                <p>Для кожи вокруг глаз</p>
            </Link>
            <Link className="category-card hair" to={process.env.PUBLIC_URL + "/catalog/hair"}>
                <p>Для волос</p>
            </Link>
            <Link className="category-card moisture" to={process.env.PUBLIC_URL + "/catalog/moisture"}>
                <p>Крем-маски для лица</p>
            </Link>
            <Link className="category-card eyemasks" to={process.env.PUBLIC_URL + "/catalog/eyemasks"}>
                <p>Патчи</p>
            </Link>
            <Link className="category-card acne" to={process.env.PUBLIC_URL + "/catalog/acne"}>
                <p>От акне, прыщей и чёрных точек</p>
            </Link>
            <Link className="category-card scrubs" to={process.env.PUBLIC_URL + "/catalog/scrubs"}>
                <p>Скрабы для тела</p>
            </Link>
            <Link className="category-card other" to={process.env.PUBLIC_URL + "/catalog/other"}>
                <p>Другое</p>
            </Link>
            <Link className="category-card all" to={process.env.PUBLIC_URL + "/catalog/all"}>
                <p>Все товары</p>
            </Link>
        </section>
    </div>
  );
}

export default Categories