import service4 from "../images/service/pension.png"
import service3 from "../images/service/maon.png"
import service2 from "../images/service/train.png"
import service1 from "../images/service/safe.png"
import React, { Component }  from 'react';



export const service_data = [
    {
        name: "פנסיון כלבים ",
        id:1,
        img: service4,
        description: <p>הפנסיון שלנו הינו פנסיון ביתי וקטן, המשלב טיולים עם צוות מאלפים מוסמך ומקצועי, פריקת אנרגיה והמון אהבה לכלבכם.</p>     ,
    },
    {
        name: "מעון יום לכלבים",
        id:2,
        img: service3,
        description: <div>הכלב מפרק לכם את הבית בזמן שאתם בעבודה ? אז מעון יום בדיוק עבורכם ! 
        <p>מעון יום הוא מאין "גן" לכלבים. </p>
        <p>גם כלבכם האהוב זקוק לתשומת לב בשעות שאתם בעבודה ואם זה פותר את בעיית הכרסום בבית והבלאגן אז למה לא ?</p>
        </div>,
    },
    {
        name: "אילוף כלבים",
        id:3,
        img: service2,
        description: <div> 
            <p>3 אופציות לאילוף בהתאמה אישית עבורכם!</p>
            <h5> - אילוף בשיעור פרטי בבית הלקוח:</h5>
            <p>אני מגיע אליכם ! ומביא איתי את הכלים הנדרשים לעבוד עם כלבכם.</p>
            <h5> - פנסיון:</h5>
            <p>אתם מביאים את הכלב לפנסיון הביתי הנעים שלנו , ואנו נעבוד עם כלבך ונלמד אותו את הפקודות הבסיסיות.</p>
            <h5> - קבוצת אילוף:</h5>
            <p>עד 10 משתתפים</p>
            <p>פקודות בסיסיות ואיטרקציה קבוצתית ביניכם לבין הכלבים עם הרבה גירויים והסחות דעת.</p>


        </div>
    },
    {
        name: "הכשרת כלבי ביטחון",
        id:4,
        img: service1,
        description: <div>
         <p>שמירה על  טריטוריה, בתים ,חוות שטחים חקלאיים.</p>
         <p>ליווי, הגנה ואיתור</p>
        </div>
    },

]

