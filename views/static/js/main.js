const complaint = document.querySelector('#comp');
const resolve = document.querySelector('#resolve');
const frm1 = document.querySelector('#frm1');
const frm2 = document.querySelector('#frm2');
const dd = document.querySelector('#showId');

complaint.addEventListener('click',()=>{
  resolve.classList.toggle('border-2');
  resolve.classList.toggle('border-white');
  resolve.classList.toggle('rounded-xl');

  frm2.classList.toggle('hidden');

  complaint.classList.toggle('border-2');
  complaint.classList.toggle('border-white');
  complaint.classList.toggle('rounded-xl');
  frm1.classList.toggle('hidden');
});
resolve.addEventListener('click',()=>{
  complaint.classList.toggle('border-2');
  complaint.classList.toggle('border-white');
  complaint.classList.toggle('rounded-xl');
  
  frm1.classList.toggle('hidden');

  resolve.classList.toggle('border-2');
  resolve.classList.toggle('border-white');
  resolve.classList.toggle('rounded-xl');
  frm2.classList.toggle('hidden');
})