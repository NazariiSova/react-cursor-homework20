import React from "react";
import style from "./contacts.module.css"



const ContactsPage = () => {
return <div className={style["contacts-all-container"]}>
       <div className={style["container-for-contact"]}>
      <h2>Барней</h2>
      <h2>Стинсовський</h2>
      <h2>380956319521</h2>
      <h2>male</h2>
    </div>
    <div className={style["container-for-contact"]}>
      <h2>Робін</h2>
      <h2>Щербатська</h2>
      <h2>+380931460123</h2>
      <h2>female</h2>
    </div>
    <div className={style["container-for-contact"]}>
      <h2>Анонімний</h2>
      <h2>Анонімус</h2>
      <h2>+380666666666</h2>
      
    </div>
    <div className={style["container-for-contact"]}>
      <h2>Лілія</h2>
      <h2>Олдровна</h2>
      <h2>+380504691254</h2>
      <h2>female</h2>
    </div>
    <div className={style["container-for-contact"]}>
      <h2>Маршен</h2>
      <h2>Еріксонян</h2>
      <h2>+380739432123</h2>
      <h2>male</h2>
    </div>
    <div className={style["container-for-contact"]}>
      <h2>Теодор</h2>
      <h2>Мотсбес</h2>
      <h2>+380956319521</h2>
      <h2>male</h2>
    </div>
</div>
}

export default ContactsPage;