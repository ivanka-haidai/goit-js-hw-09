const formData = {
  email: "",
  message: "", 
}

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

getDataFromStorage();
form.addEventListener('input', handleMessageInput);
form.addEventListener('submit', handleFormSubmit);



function handleMessageInput(e) {
  const { name, value } = e.target;
  if (name === 'email') {
    formData.email = value.trim();
  } else if (name === 'message') {
    formData.message = value.trim();
  }
  
 localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}



function handleFormSubmit(e) {
  e.preventDefault();


  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields'); 
    return;
  } else {
    console.log(formData);
  }

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = "";
  formData.message = "";
}


function getDataFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || ''; 
    messageInput.value = parsedData.message || ''; 

    
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}