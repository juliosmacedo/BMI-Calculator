function calculateBmi(weight, height) {
  const bmi = parseFloat((weight / (height*height))*10000).toFixed(1)
  console.log(weight, height, bmi)
  if (bmi<15) {
    return `BMI: ${bmi} <br> Very severely underweight` }
  
  else if (bmi<16) {
    return `BMI: ${bmi} <br> Severely underweight` }
  
  else if (bmi<18.5) {
    return `BMI: ${bmi} <br> Underweight`}
  
  else if (bmi<25) {
    return `BMI: ${bmi} <br> Normal (healthy weight)` }
  
  if (bmi<30) {
    return `BMI: ${bmi} <br> Overweight`}
  
  if (bmi<35) {
    return `BMI: ${bmi} <br> Obese Class I (Moderately obese)` }
  
  if (bmi<40) {
    return `BMI: ${bmi} <br> Obese Class II (Severely obese)` }
  
  if (bmi<45) {
    return `BMI: ${bmi} <br> Obese Class III (Very severely obese)`}
  
  if (bmi<50) {
    return `BMI: ${bmi} <br> Obese Class IV (Morbidly obese)`}
  
  if (bmi<60) {
    return `BMI: ${bmi} <br> Obese Class V (Super obese)` }
  
  if (bmi>=60) {
    return `BMI: ${bmi} <br> category: Obese Class VI (Hyper obese)` }
}




const btn = document.getElementById("button");
btn.onclick = function submit() {
  const weight = document.getElementById("weight").value
  const height = document.getElementById("height").value
  console.log(weight, height)
  document.getElementById('info').innerHTML = `<h3><strong>${calculateBmi(weight, height)}!</strong></h3>`
}
