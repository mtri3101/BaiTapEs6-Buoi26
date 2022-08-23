let tinhDiemTrungBinh = (...numbers) =>{
    let tong = 0;
    let diemTB = 0;
    for (let i = 0; i < numbers.length; i++){
        tong += parseInt(numbers[i]);
    }
    console.log(tong);
    diemTB = tong / numbers.length;
    return diemTB;
}

let khoi1Btn = document.querySelector("#btnKhoi1");
khoi1Btn.onclick = () =>{
    let div = document.querySelectorAll('.col-6');
    //Phan biet khoi 1 va khoi 2
    let inputNumbers = div[0].querySelectorAll('input');
    let points = [];
    for (let i = 0; i < inputNumbers.length; i++){
        points.push(inputNumbers[i].value);
    }
    let GPA = tinhDiemTrungBinh(...points);
    document.querySelector('#tbKhoi1').innerHTML = GPA;
}

let khoi2Btn = document.querySelector("#btnKhoi2");
khoi2Btn.onclick = () =>{
    let div = document.querySelectorAll('.col-6');
    let inputNumbers = div[1].querySelectorAll('input');
    let points = [];
    for (let i = 0; i < inputNumbers.length; i++){
        points.push(inputNumbers[i].value);
    }
    let GPA = tinhDiemTrungBinh(...points);
    document.querySelector('#tbKhoi2').innerHTML = GPA;
}
