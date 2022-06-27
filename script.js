const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const textBox = document.querySelector('.textbox');
const inputstw = document.querySelector('.switch');
const ul = document.querySelector('.messages');
const toggle = document.getElementById('.toggle');

const now = new Date;

const userJohn = 'John Doe';
const userKrystian = 'Krystian Pach';


function addJohnDoe() { btn2.addEventListener('click', ()=>{
    const newMessageOne = document.createElement('li');

    newMessageOne.innerHTML = `
         <div class="concon">
        <div class="mainInnerHtml">
            <div class="innerHtmlOne">
            <img src="images/cf3fa30d-8eba-440e-ba2b-e698a83df18b.jpg" alt="">

                <div class="innerDetails">
                    <h6>Krystian Pach</h6>
                    <span class="text">${textBox.value}</span>
                </div>
            </div>
            <div class="detailsContainerOne">
            <span class="time">${now.getHours()}:${now.getMinutes()}</span>
            <button class="edit">edit</button>
            <button class="delete">delete</button>
            </div>
        </div>
    </div>
    `;

        ul.appendChild(newMessageOne);
        textBox.value = '';
})
};

function addKrystianPach() { btn.addEventListener('click', ()=>{
    const newMessageTwo = document.createElement('li');

    newMessageTwo.innerHTML = `
         <div class="conconTwo">
        <div class="mainInnerHtmlTwo">
            <div class="innerHtmlOneTwo">
                <img src="images/4c993e07-709c-4e0a-9c78-119285895acd.jpg" alt="">

                <div class="innerDetailsTwo">
                    <h6>John Doe</h6>
                    <span class="textTwo">${textBox.value}</span>
                </div>
            </div>
            <div class="detailsContainerTwo">
            <span class="timeTwo">${now.getHours()}:${now.getMinutes()}</span>
            <button class="editTwo">edit</button>
            <button class="deleteTwo">delete</button>
            </div>
        </div>
    </div>
    `;

        ul.appendChild(newMessageTwo);
        textBox.value = '';

})
};


function toggleCheck() {
    if(document.getElementById('myCheckbox').checked === false) 
    {
        addKrystianPach()
    } else if(document.getElementById('myCheckbox').checked === true) {
        
        addJohnDoe()
    }
};

toggleCheck();

// usuwanie button

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.addEventListener('click', e =>{
    deleteButtons.closest(".element").remove();
})



// druga próba

// function textOne(){

//     const newMessageOne = document.createElement('li');

//     newMessageOne.innerHTML = `
//          <div class="concon">
//         <div class="mainInnerHtml">
//             <div class="innerHtmlOne">
//             <img src="images/cf3fa30d-8eba-440e-ba2b-e698a83df18b.jpg" alt="">

//                 <div class="innerDetails">
//                     <h6>Krystian Pach</h6>
//                     <span class="text">${textBox.value}</span>
//                 </div>
//             </div>
//             <div class="detailsContainerOne">
//             <span class="time">${now.getHours()}:${now.getMinutes()}</span>
//             <button class="edit">edit</button>
//             <button class="delete">delete</button>
//             </div>
//         </div>
//     </div>
//     `;

//         ul.appendChild(newMessageOne);
//         textBox.value = '';
// }

// function textTwo(){
//     const newMessageTwo = document.createElement('li');

//     newMessageTwo.innerHTML = `
//          <div class="conconTwo">
//         <div class="mainInnerHtmlTwo">
//             <div class="innerHtmlOneTwo">
//                 <img src="images/4c993e07-709c-4e0a-9c78-119285895acd.jpg" alt="">

//                 <div class="innerDetailsTwo">
//                     <h6>John Doe</h6>
//                     <span class="textTwo">${textBox.value}</span>
//                 </div>
//             </div>
//             <span class="timeTwo">${now.getHours()}:${now.getMinutes()}</span>
//             <button class="editTwo">edit</button>
//             <button class="delete">delete</button>
//         </div>
//     </div>
//     `;

//         ul.appendChild(newMessageTwo);
//         textBox.value = '';

// }



// function sendMessage(userName, text){
//     if(document.getElementById('myCheckbox').checked === false) {
//         sendMessage(userJohn, textOne());
//     } else{
//         sendMessage(userKrystian, textTwo() );
//     }

    
// }

// btn.addEventListener('click', sendMessage(userJohn, textOne()));