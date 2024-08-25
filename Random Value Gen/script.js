document.getElementById('submit-button').addEventListener('click', function() {
    let minValue = parseInt(document.getElementById('min-value').value);
    let maxValue = parseInt(document.getElementById('max-value').value);

    // console.log('Min Value:', minValue);
    // console.log('Max Value:', maxValue);
    let randValue = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue) ;
    // let output = document.getElementsByClassName('output');
    let output = document.querySelector('.output');

    output.innerHTML = `Random Value: ${randValue}`;

});
