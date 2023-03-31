// *1
const task1 = () => {
    document.querySelector('#input_1').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            document.querySelector('#output_1').innerHTML = document.querySelector('#input_1').value;
        }
    });

};

task1();
// *1
// *1
// *1
// *1
// *1
// *1
// ! 2
const task2=()=>{
const input_2 = document.querySelector('#input_2');
const output_2 = document.querySelector('#output_2');

input_2.addEventListener('input', () => {
  output_2.innerHTML = input_2.value;
});}
task2();
// ! 2
// ?3
const task3f=()=>{
const task3=document.querySelector('.task_3');
task3.addEventListener('mouseout',(event)=>{
  task3.style.backgroundColor='red';  
});
task3.addEventListener('mouseover', (event) => {
  task3.style.backgroundColor = ''; // Повертаємо колір назад
});}
task3f();
// ?3
// todo4
const task4f=()=>{
const task4=document.querySelector('.task_4');
task4.addEventListener('mouseover',(event)=>{
 task4.classList.add('hidden')
 task4.innerHTML=`<p style="color:white;font-size:64px">Батько наш - Бандера,
Україна - мати....</p>`
});
task4.addEventListener('mouseout',(event)=>{
 task4.classList.remove('hidden')
 task4.innerHTML=`<p>Обновіть сторінку</p>`
});
}
task4f();
// todo4
// 5
const task5f=()=>{
    const task5=document.querySelector('#input_5')
    task5.addEventListener('input',()=>{
        document.body.style.backgroundColor=task5.value;
    })
}
task5f()
// 5