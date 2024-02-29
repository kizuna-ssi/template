let age;

  const userBirthdayYear = document.querySelector('.birthday-year');
  const userBirthdayMonth = document.querySelector('.birthday-month');
  const userBirthdayDay = document.querySelector('.birthday-day');
  const ageDisplay1 = document.getElementById('ageDisplay1');
  const ageDisplay2 = document.getElementById('ageDisplay2');

function createOptionForElements(elem, val) {
  let option = document.createElement('option');
  option.text = val;
  option.value = val;
  elem.appendChild(option);
}


function calculateAge() {

  const today = new Date();
  const birthDate = new Date(userBirthdayYear.value, userBirthdayMonth.value - 1, userBirthdayDay.value);

  let targetDate;
  if (today.getDate() <= 15) {
    // If today is between the 1st and 15th, target next month
    targetDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  } else {
    // If today is 16th or later, target the month after next
    targetDate = new Date(today.getFullYear() + (today.getMonth() === 11 ? 1 : 0), (today.getMonth() + 2) % 12, 1);
  }

  age = targetDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = targetDate.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && targetDate.getDate() <= birthDate.getDate())) {
    age--;
  }

  if (isNaN(age)) {
    ageDisplay1.textContent = `-`;
  } else {
    ageDisplay1.textContent = `${age} 歳`;
  }
  ageDisplay2.textContent = `${targetDate.toLocaleDateString()}`;

  return age;

}


userBirthdayYear.innerHTML = '<option value="-">-</option>';
userBirthdayMonth.innerHTML = '<option value="-">-</option>';
userBirthdayDay.innerHTML = '<option value="-">-</option>';


for(let i = 1924; i <= 1980; i++) {
  createOptionForElements(userBirthdayYear, i);
}

for(let i = 1; i <= 12; i++) {
  createOptionForElements(userBirthdayMonth, i);
}

for(let i = 1; i <= 31; i++) {
  createOptionForElements(userBirthdayDay, i);
}

function changeTheDay() {
  if (userBirthdayYear.value && userBirthdayMonth.value) {
    userBirthdayDay.innerHTML = '';
    let lastDayOfTheMonth = new Date(userBirthdayYear.value, userBirthdayMonth.value, 0).getDate();
    for(let i = 1; i <= lastDayOfTheMonth; i++) {
      createOptionForElements(userBirthdayDay, i);
    }
  }
  calculateAge();
}

userBirthdayYear.addEventListener('change', changeTheDay);
userBirthdayMonth.addEventListener('change', changeTheDay);
userBirthdayDay.addEventListener('change', calculateAge);

// Initialize age calculation on page load
calculateAge();
