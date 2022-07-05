// document.getElementById('btn').onclick = function () {
//     var conteudo = document.getElementById('main');
//         window.print(conteudo);
//     window.close();
// };
const inp_d1 = document.querySelector('.inp_d1')
const inp_d2 = document.querySelector('.inp_d2')

const inp_a1 = document.querySelector('.inp_a1')
const inp_a2 = document.querySelector('.inp_a2')

const inp_m1 = document.querySelector('.inp_m1')
const inp_m2 = document.querySelector('.inp_m2')

const inp_no1 = document.querySelector('.inp_no1')
const inp_no2 = document.querySelector('.inp_no2')

const inp_mon1 = document.querySelector('.inp_mon1')
const inp_mon2 = document.querySelector('.inp_mon2')

const inp_rec1 = document.querySelector('.inp_rec1')
const inp_rec2 = document.querySelector('.inp_rec2')

const inp_qua1 = document.querySelector('.inp_qua1')
const inp_qua2 = document.querySelector('.inp_qua2')

const tex_are1 = document.querySelector('.tex_are1')
const tex_are2 = document.querySelector('.tex_are2')

window.oninput = function (event) {
  let campo = event.target.classList.value

  campo == 'inp_no1' ? inp_no2.value = inp_no1.value : inp_no1.value = inp_no2.value;
  campo == 'inp_d1' ? inp_d2.value = inp_d1.value : inp_d1.value = inp_d2.value;
  // campo == 'inp_a1' ? inp_a2.value = inp_a1.value : inp_a1.value = inp_a2.value;
  // campo == 'inp_m1' ? inp_m2.value = inp_m1.value : inp_m1.value = inp_m2.value;
  campo == 'inp_mon1' ? inp_mon2.value = inp_mon1.value : inp_mon1.value = inp_mon2.value;
  campo == 'inp_mon1' ? inp_qua2.value = inp_mon2.value.extenso(true) : inp_qua2.value = inp_mon1.value.extenso(true);
  campo == 'inp_rec1' ? inp_rec2.value = inp_rec1.value : inp_rec1.value = inp_rec2.value;
  campo == 'inp_qua1' ? inp_qua2.value = inp_qua1.value : inp_qua1.value = inp_qua2.value;
  campo == 'tex_are1' ? tex_are2.value = tex_are1.value : tex_are1.value = tex_are2.value;
};

/* RANDO NUMBER */
const random = document.querySelectorAll('.inp_no1,.inp_no2')
console.log(random[0].value)
random[0].value = Math.floor(Math.random() * 99999 + 1)
random[1].value = random[0].value