
export const applyTheme = (location) => {
    const now = new Date();
    const hours = now.getHours();
  
    if (hours >= 10 && hours < 12 && location === "South India") {
      document.body.classList.add('white-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  
    if (hours === 13) {
      document.body.innerHTML = "Website is under maintenance from 1 PM to 2 PM";
    }
  };
  