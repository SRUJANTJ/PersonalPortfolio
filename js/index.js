
document.getElementById('skills').addEventListener('click', (event) => {
    event.preventDefault()

    let bottom = document.getElementById('Skills')
    bottom.scrollIntoView({ behavior: "smooth" })
    let offset = 110; // Adjust this value as needed
    let topPosition = bottom.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
})
document.getElementById('services').addEventListener('click', (event) => {
    event.preventDefault();
    let services = document.getElementById('sectionservice');
    let offset = 100; // Adjust this value as needed
    let topPosition = services.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
});
document.getElementById('aboutbtn').addEventListener('click', () => {
    event.preventDefault();
    let about = document.getElementById('about');
    let offset = 110; // Adjust this value as needed
    let topPosition = about.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
})
document.getElementById('Home').addEventListener('click',()=>{
    event.preventDefault();
    let perprofile = document.getElementById('perprofile');
    let offset = 200; // Adjust this value as needed
    let topPosition = perprofile.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
})

let textconetnt = document.getElementById('text-container')


let index = 0;
let direction = 1;
let constanttext = "I am a "
let text = " word";
// let newword = ["Front End Developer", "Back End Developer", "Hello"]
let newword = ["Your Name", "Front-End Developer", "Back-End Developer"]
let textindex = 0
function typetext() {
    let satart = newword[textindex]

    if (index >= satart.length) {
        direction = -1
    }
    else if (index <= -1) {
        direction = 1;

        textindex++;


    }
    if (textindex >= newword.length) {
        textindex = 0;
    }
    //   let typedText = currentText.substring(0, index);

    if (direction === 1) {

        textconetnt.textContent = constanttext + satart.substring(0, index + 1)+'|';
        index++;   }
    else {
        textconetnt.textContent = constanttext +  satart.substring(0, index)+'|';
        index--;
    }
    // textContainer.textContent = constantText + typedText;

    setTimeout(typetext, 250)
}
typetext()
// if(index >= text.length){

//     direction=-1
// }
// else if (index<=-1){
//     direction=1;

// }
// if(direction===1){
//     textconetnt.textContent+=text.charAt(index)
// index++;
// }
// else{
//     textconetnt.textContent=constanttext + text.substring(0,index)
//     index--;
// }
// setTimeout(typetext,100)

// }

// typetext()



//form submit

let name = document.getElementById('name')
let email = document.getElementById('email')
let address = document.getElementById('address')
let phone = document.getElementById('phone')
let message = document.getElementById('message')
let submit = document.getElementById('submit')

submit.addEventListener('click', () => {
 
   
    fetch('/submitf',{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
              body:JSON.stringify({ 
           name: name.value,
           email: email.value,
           address: address.value,
           phone: phone.value,
           message: message.value

        })
        
      
    })
    .then(response=>{
        if(response.ok){
            name.value = '';
            email.value = '';
           address.value = '';
           phone.value = '';
           message.value = '';        }
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
})



