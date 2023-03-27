function displayDate() {
  const currentDate = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  document.getElementById('date').innerHTML = formattedDate;
}

export default displayDate;
