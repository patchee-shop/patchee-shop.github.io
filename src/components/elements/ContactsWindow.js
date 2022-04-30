import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context"
import PostGenerator from "./PostGenerator"
import html2canvas from "html2canvas"

export default function ContactsWindow({requestOrder, cartItems, records}) {

    const {
        userPhone,
        setUserPhone,
        userName,
        setUserName,
        leftEmptyPhone,
        setLeftEmptyPhone,
        isContactsWindowShown,
        setIsContactsWindowShown
    } = useContext(Context)

    const handlePhone = (event) => setUserPhone((event.target.value))
    const handleName = (event) => setUserName((event.target.value))
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        setPictures(
            Object.entries(cartItems).map(([key, value]) => (
                (Object.keys(cartItems).length && records.length)?
                (records).filter(r => r.id === key)[0].fields.Фото[0].url
                : []
            ))
        )
    }, [cartItems])

    const generatePost = () => {
        html2canvas(document.querySelector('.post-generator'), {allowTaint: true,
            useCORS: true}).then((canvas) => {
            saveAs(canvas.toDataURL(), `${userName}.png`);
        });
    }
    
    function saveAs(uri, filename) {
        const link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }

    

    return (
        <div className={`contacts-window ${isContactsWindowShown}`}>
            <PostGenerator
                userPhone={userPhone}
                userName={userName}
                pictures={pictures}
            />
            <p className={`${leftEmptyPhone}`}>Номер телефона для связи</p>
                <input
                    className="userPhone"
                    type="text"
                    name="userPhone"
                    value={userPhone}
                    onChange={handlePhone}
                    placeholder="+7"
                    autoFocus={true}
                />
            <p>Имя</p>
                <input
                    className="useName"
                    type="text"
                    name="useName"
                    value={userName}
                    onChange={handleName}
                    autoFocus={false}
                />
            <div className="wrapper">
                <button
                    id="download"
                    className="send"
                    onClick={
                        () =>
                        !(userPhone.includes("://") || userPhone.includes("?arina"))?
                            userPhone.length >= 10?
                            requestOrder() :
                            setLeftEmptyPhone("empty")
                        : generatePost()
                    }
                >
                    Сделать заказ
                </button>
                <button
                    className="cancel"
                    onClick={() => setIsContactsWindowShown("hidden")}
                >
                    Назад
                </button>
            </div>
        </div>
    )
}