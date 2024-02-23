let sortby_btn = document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener('click', () => {
    sortby_opt.classList.toggle('sortby_opt_active');
})

let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');
let home_page = document.getElementById('home_page');
let content = document.getElementById('content');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');

function myFun() {
    content.style.display = "none";
    home_page.style.display = "block";
    c.style.background = "unset";
}
function myFun1() {
    home_page.style.display = "none";
    content.style.display = "flex";
    c.style.background = "orangered";
}

let url = "json.json";
const main_shoes_box = document.getElementsByClassName('main_shoes_box')[0];
fetch(url).then((Response => Response.json())).then((data) => {
    // const all_shoes_array = [...data,'name','kumar','singh'];
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array = [...data].splice(0, 8);

    data.forEach((el, i) => {
        const { Img, Name, Category, MRP, Price, Tag, Color } = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `<img src="${Img}" alt="${Name}">
        <h5 class="card_title" title="${Name}">${Name}</h5>
        <p>${Category} Shoes</p>
        <div class="price">
            <h5>Rs. ${Price}</h5>
            <h5>MRP: <del>Rs. ${MRP}</del></h5>
        </div>
        <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
        </div>`;
        main_shoes_box.appendChild(card);
    });

    newest.addEventListener('click', () => {
        main_shoes_box.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By : Newest</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');
        newest_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs. ${Price}</h5>
                <h5>MRP: <del>Rs. ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_box.appendChild(card);
        });
    })

    all_shoes.addEventListener('click', () => {
        main_shoes_box.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By : All Shoes</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');
        all_shoes_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs. ${Price}</h5>
                <h5>MRP: <del>Rs. ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_box.appendChild(card);
        });
    })

    low.addEventListener('click', () => {
        main_shoes_box.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By : High</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');
        low_array.sort(({ Price: a }, { Price: b }) => a - b)
        low_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs. ${Price}</h5>
                <h5>MRP: <del>Rs. ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_box.appendChild(card);
        });
    })
    high.addEventListener('click', () => {
        main_shoes_box.innerHTML = '';
        sortby_btn.innerHTML = `<h5>Sort By : High </h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');
        high_array.sort(({ Price: a }, { Price: b }) => b - a)
        high_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs. ${Price}</h5>
                <h5>MRP: <del>Rs. ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_box.appendChild(card);
        });
    })

    let boot_array = all_shoes_array.filter((el) => {
        return el.Type == 'Boots';
    })
    let All_Main_filter_array = [];
    let boots = document.getElementById('boots');

    boots.addEventListener('click', () => {
        if (boots.title == "boots_filter_on") {
            main_shoes_box.innerHTML = "";
            boots.classList.toggle("i_active");
            boots.classList.toggle("bi-toggle2-off");
            boots.classList.toggle("bi-toggle2-on");
            boots.title = "boots_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(boot_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            boots.classList.toggle("i_active");
            boots.classList.toggle("bi-toggle2-off");
            boots.classList.toggle("bi-toggle2-on");
            boots.title = "boots_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return boot_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let loafers_array = all_shoes_array.filter((el) => {
        return el.Type == 'Loafer';
    })
    let loafers = document.getElementById('loafers');

    loafers.addEventListener('click', () => {
        if (loafers.title == "loafers_filter_on") {
            main_shoes_box.innerHTML = "";
            loafers.classList.toggle("i_active");
            loafers.classList.toggle("bi-toggle2-off");
            loafers.classList.toggle("bi-toggle2-on");
            loafers.title = "loafers_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(loafers_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            loafers.classList.toggle("i_active");
            loafers.classList.toggle("bi-toggle2-off");
            loafers.classList.toggle("bi-toggle2-on");
            loafers.title = "loafers_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return loafers_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let airmax_array = all_shoes_array.filter((el) => {
        return el.Type == 'Air Max';
    })
    let airmax = document.getElementById('airmax');

    airmax.addEventListener('click', () => {
        if (airmax.title == "airmax_filter_on") {
            main_shoes_box.innerHTML = "";
            airmax.classList.toggle("i_active");
            airmax.classList.toggle("bi-toggle2-off");
            airmax.classList.toggle("bi-toggle2-on");
            airmax.title = "airmax_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(airmax_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            airmax.classList.toggle("i_active");
            airmax.classList.toggle("bi-toggle2-off");
            airmax.classList.toggle("bi-toggle2-on");
            airmax.title = "airmax_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return airmax_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let airforce_array = all_shoes_array.filter((el) => {
        return el.Type == 'Air Force';
    })
    let airforce = document.getElementById('airforce');

    airforce.addEventListener('click', () => {
        if (airforce.title == "airforce_filter_on") {
            main_shoes_box.innerHTML = "";
            airforce.classList.toggle("i_active");
            airforce.classList.toggle("bi-toggle2-off");
            airforce.classList.toggle("bi-toggle2-on");
            airforce.title = "airforce_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(airforce_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            airforce.classList.toggle("i_active");
            airforce.classList.toggle("bi-toggle2-off");
            airforce.classList.toggle("bi-toggle2-on");
            airforce.title = "airforce_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return airforce_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let zoom_array = all_shoes_array.filter((el) => {
        return el.Type == 'Zoom Rival';
    })
    let zoom = document.getElementById('zoom');

    zoom.addEventListener('click', () => {
        if (zoom.title == "zoom_filter_on") {
            main_shoes_box.innerHTML = "";
            zoom.classList.toggle("i_active");
            zoom.classList.toggle("bi-toggle2-off");
            zoom.classList.toggle("bi-toggle2-on");
            zoom.title = "zoom_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(zoom_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            zoom.classList.toggle("i_active");
            zoom.classList.toggle("bi-toggle2-off");
            zoom.classList.toggle("bi-toggle2-on");
            zoom.title = "zoom_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return zoom_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let pegasus_array = all_shoes_array.filter((el) => {
        return el.Type == 'Pegasus';
    })
    let pegasus = document.getElementById('pegasus');

    pegasus.addEventListener('click', () => {
        if (pegasus.title == "pegasus_filter_on") {
            main_shoes_box.innerHTML = "";
            pegasus.classList.toggle("i_active");
            pegasus.classList.toggle("bi-toggle2-off");
            pegasus.classList.toggle("bi-toggle2-on");
            pegasus.title = "pegasus_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(pegasus_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            pegasus.classList.toggle("i_active");
            pegasus.classList.toggle("bi-toggle2-off");
            pegasus.classList.toggle("bi-toggle2-on");
            pegasus.title = "pegasus_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return pegasus_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let dunk_array = all_shoes_array.filter((el) => {
        return el.Type == 'Nike Dunk';
    })
    let dunk = document.getElementById('dunk');

    dunk.addEventListener('click', () => {
        if (dunk.title == "dunk_filter_on") {
            main_shoes_box.innerHTML = "";
            dunk.classList.toggle("i_active");
            dunk.classList.toggle("bi-toggle2-off");
            dunk.classList.toggle("bi-toggle2-on");
            dunk.title = "dunk_filter_off";
            All_Main_filter_array = All_Main_filter_array.concat(dunk_array);
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });
        }
        else {
            main_shoes_box.innerHTML = "";
            dunk.classList.toggle("i_active");
            dunk.classList.toggle("bi-toggle2-off");
            dunk.classList.toggle("bi-toggle2-on");
            dunk.title = "dunk_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return dunk_array.indexOf(el) < 0;
            });
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price}</h5>
                    <h5>MRP: <del>Rs. ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_box.appendChild(card);
            });

        }
    })
    let right_input = document.getElementById('right_input');
    let left_input = document.getElementById('left_input');
    let left_input_icon = document.getElementById('left_input_icon');
    let right_input_icon = document.getElementById('right_input_icon');

    let array_1000_50000 = all_shoes_array.filter((el) => {
        return el.Price <= 50000;
    })
    console.log(array_1000_50000);

    left_input.addEventListener('change', () => {
        left_input_icon.style.left = left_input.value + '%';
        let price_box_value_left = (50000 / 100) * left_input.value;
        a.innerHTML = price_box_value_left;
        let array_1000_50000_left = array_1000_50000.filter((el) => {
            return el.Price >= price_box_value_left;
        })
        main_shoes_box.innerHTML = '';
        array_1000_50000_left.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs. ${Price}</h5>
                <h5>MRP: <del>Rs. ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_box.appendChild(card);
        });

    })
    right_input.addEventListener('change', () => {
        right_input_icon.style.left = right_input.value + '%';
        let price_box_value_right = (50000 / 100) * right_input.value;
        b.innerHTML = price_box_value_right + 50000;
        let array_1000_50000_right = array_1000_50000.filter((el) => {
            return el.Price >= price_box_value_right;
        })
        main_shoes_box.innerHTML = '';
        array_1000_50000_right.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs. ${Price}</h5>
                <h5>MRP: <del>Rs. ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_box.appendChild(card);
        });

    })
    const color = ['white', 'gray-white', 'yellow', 'yellow-black', 'orange', 'green',
        'sky-blue', 'pink', 'red', 'blue', 'gray-black', 'brown', 'black'];

    Array.from(document.getElementsByClassName('color')).forEach((el, i) => {
        el.addEventListener('click', () => {
            const color_array = all_shoes_array.filter((el) => {
                return el.ColorTag === color[i];
            });
            main_shoes_box.innerHTML = '';
            color_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
      <img src="${Img}" alt="${Name}" />
      <h5 class="card_title" title="${Name}">
      ${Name}
      </h5>
      <p>${Category} Shoes</p>
      <div class="price">
        <h5>Rs ${Price}</h5>
        <h5>MRP: <del>RS ${MRP}</del></h5>
      </div>
      <div class="color_tag">
        <h6>Color ${Color}</h6>
        <h6>${Tag}</h6>
      </div>
      `;
                main_shoes_box.appendChild(card)
            });
        })
    })
    const number = [4, 7, 9, 6, 5, 8, 10, 11];

    document.getElementsByClassName('size')[0].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size4 === number[0];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })


    document.getElementsByClassName('size')[1].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size7 === number[1];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
    document.getElementsByClassName('size')[2].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size9 === number[2];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
    document.getElementsByClassName('size')[3].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size6 === number[3];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
    document.getElementsByClassName('size')[4].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size5 === number[4];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
    document.getElementsByClassName('size')[5].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size8 === number[5];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
    document.getElementsByClassName('size')[6].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size10 === number[6];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
    document.getElementsByClassName('size')[7].addEventListener('click', () => {
        main_shoes_box.innerHTML = '';

        let number_array = all_shoes_array.filter((el) => {
            return el.Size11 === number[7];
        })

        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
       <img src="${Img}" alt="${Name}" />
       <h5 class="card_title" title="${Name}">
       ${Name}
       </h5>
       <p>${Category} Shoes</p>
       <div class="price">
         <h5>Rs ${Price}</h5>
         <h5>MRP: <del>RS ${MRP}</del></h5>
       </div>
       <div class="color_tag">
         <h6>Color ${Color}</h6>
         <h6>${Tag}</h6>
       </div>
       `;
            main_shoes_box.appendChild(card)
        });
    })
})



