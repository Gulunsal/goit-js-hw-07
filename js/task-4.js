// Mission 4 - Task 4
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

  const email = form.elements.email.value.trim(); // Email alanındaki değeri al ve kenar boşluklarını temizle
  const password = form.elements.password.value.trim(); // Password alanındaki değeri al ve kenar boşluklarını temizle

  // Alanlardan biri boşsa uyarı göster
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    // Tüm alanlar doldurulmuşsa, verileri nesne olarak topla
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData); // Veriyi konsola yazdır
    form.reset(); // Formu temizle
  }
});
