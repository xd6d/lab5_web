function task1(obj) {
    let l = parseFloat(obj.length.value)
    let w = parseFloat(obj.width.value)
    if (l <= 0 || w <= 0) {
        obj.p.value = ""
        obj.s.value = ""
        obj.d.value = ""
    } else {
        obj.p.value = (l + w) * 2
        obj.s.value = (l * w)
        obj.d.value = ((l ** 2 + w ** 2) ** (1 / 2)).toFixed(3)
    }
}

function task2() {
    const imgs = [
        'imgs/photo_2022-04-07_22-15-34.jpg',
        'imgs/photo_2022-04-07_22-15-33.jpg',
        'imgs/photo_2022-06-19_18-56-45.jpg',
        'https://i.imgur.com/ptqUGzR.jpg']
    document.writeln(`<div class="small-imgs">`)
    for (let img of imgs) {
        document.writeln(`<img src="${img}" alt="" onclick="chooseImg('${img}')">`)
    }
    document.writeln(`</div>`)
    document.writeln(`<img src="${imgs[0]}" alt="" class="big-img" id="big_img">`)
}

function chooseImg(img) {
    document.getElementById("big_img").src = img
}

function task3() {
    document.getElementById("en").value = ""
    for (let c of document.getElementById("ua").value) {
        let alphabet = new ua_en();
        let letter = alphabet[c]
        if (letter !== undefined)
            document.getElementById("en").value += letter
        else
            document.getElementById("en").value += c
    }
}

function task4() {
    const weekdays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
    let date = new Date(document.getElementById("date").value)
    document.getElementById("weekday").innerHTML = weekdays[date.getDay()]
}